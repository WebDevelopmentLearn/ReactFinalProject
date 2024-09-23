import {Breadcrumbs, Footer, Navbar} from "../../components";
import {useContext} from "react";
import breadcrumbsContext from "../../context/breadcrumbsContext";

export const Layout = ({children}) => {
    const {crumbs} = useContext(breadcrumbsContext);
    return (
        <div>
            <Navbar/>
            {crumbs.length ? <Breadcrumbs crumbs={crumbs}/> : ""}
            {children}
            <Footer />
        </div>
    )
}
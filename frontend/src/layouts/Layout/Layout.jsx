import {Breadcrumbs, Footer, Navbar} from "../../components";
import {useContext} from "react";
import {BreadcrumbsContext} from "../../context/BreadcrumbsContext";
import {useBreadcrumbs} from "../../utils/CustomHooks";

export const Layout = ({children}) => {
    const {crumbs} = useContext(BreadcrumbsContext);
    useBreadcrumbs();
    return (
        <div>
            <Navbar/>
            {crumbs.length ? <Breadcrumbs crumbs={crumbs}/> : ""}
            {children}
            <Footer />
        </div>
    )
}
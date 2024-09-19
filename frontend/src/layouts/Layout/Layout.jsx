import {Footer, Navbar} from "../../components";

export const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer />
        </div>
    )
}
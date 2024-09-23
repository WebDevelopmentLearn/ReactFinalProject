import {createContext} from "react";

 const breadcrumbsContext = createContext([{
    path: "/",
    label: "Main Page"
}]);

 export default breadcrumbsContext;
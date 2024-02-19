import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/details";
import Home from "../pages/home";
import Error from "../pages/error";
import DefaultPage from "../components/defaultPage";

const Router = () => {
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultPage/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/detail/:id" element={<Details/>} />
                <Route path="*" element={<Error />} />
            </Route>                 
        </Routes>
       </BrowserRouter>
    );
}

export default Router;
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const Main = () => {
    return (
        <div className="lato">
           <Navbar></Navbar> 
           <div className="min-h-[calc(100vh-303px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Main;
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from '../components/navbar/Navbar'

export const Root = () => {
    return (
        <>
            <Navbar />
            <div className="container p-4">
                <Outlet />
                <ToastContainer />
            </div>
        </>
    )
}

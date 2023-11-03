import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import Navbar from '../layout/Navbar'

const DashboardLayout = () => {
    return (
        <div className="flex ">
            <Sidebar />
            <div className="bg-gray-100 dark:bg-slate-500 px-10 py-4 h-screen w-full">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
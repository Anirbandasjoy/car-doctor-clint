import { Outlet } from "react-router-dom"
import OrderNavbar from "./OrderNavbar"



const Order = () => {
    return (
        <div>
            <OrderNavbar />

            <div className="mt-2">
                <Outlet />
            </div>

        </div>
    )
}

export default Order
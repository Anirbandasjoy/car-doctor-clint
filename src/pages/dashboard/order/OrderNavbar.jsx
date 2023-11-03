import { BiBadgeCheck } from "react-icons/bi"
import { GoPackageDependents } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"

const OrderNavbar = () => {

    return (
        <div className="flex gap-3 justify-center  lg:justify-start mt-5 " id="ordernav">
            <Link to="/dashboard/order" className="bg-blue-200 text-gray-700  cursor-pointer lg:w-36 shadow-lg flex lg:px-4 px-2 text-sm lg:text-lg py-1 gap-2 justify-center  items-center">
                <h1 className="">All Order</h1>
                <GoPackageDependents />
            </Link>
            <NavLink to="/dashboard/order/pending" className="bg-blue-200 text-gray-700  cursor-pointer lg:w-36 shadow-lg flex lg:px-4 px-2 text-sm lg:text-lg py-1 gap-2 justify-center  items-center">
                <h1 className="">Pending</h1>
                <GoPackageDependents />
            </NavLink>
            <NavLink to="/dashboard/order/approved" className="bg-blue-200 text-gray-700 cursor-pointer lg:w-36 shadow-lg flex lg:px-4 px-2 text-sm lg:text-lg py-1 gap-2 justify-center  items-center">
                <h1 className="">Approved</h1>
                <BiBadgeCheck />
            </NavLink>

        </div>
    )
}

export default OrderNavbar
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useContext } from "react"
import { FiSun } from "react-icons/fi"
import { LuMoonStar } from "react-icons/lu"
import { AuthContext } from "../../context/AuthProvider"
import useTheme from "../../hooks/useTheme"
import { BsBook } from "react-icons/bs"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { mode, handleModeChnage } = useTheme()

    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("Logout Successfully")
                localStorage.removeItem("location")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const navitems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="" id="navbar">
            <div className="navbar bg-base-100 dark:bg-gray-800 dark:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <Link>
                        <img className="w-20" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu font-semibold menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        mode === "light" ? <LuMoonStar onClick={handleModeChnage} size={33} className="mr-8 cursor-pointer" /> :
                            <FiSun onClick={handleModeChnage} size={33} className="mr-8 cursor-pointer" />
                    }

                    <Link to="/cart">
                        <BsBook size={32} className="mr-8 cursor-pointer" />
                    </Link>
                    {
                        user ? <Link onClick={handleLogOut} className="btn  btn-outline btn-warning rounded-sm capitalize ">Logout</Link> : <Link to="/login" className="btn  btn-outline btn-warning rounded-sm capitalize ">Login</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
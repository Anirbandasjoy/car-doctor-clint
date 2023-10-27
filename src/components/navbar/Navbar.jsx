import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
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
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-base-100">
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
                        user ? <Link onClick={handleLogOut} className="btn  btn-outline btn-warning rounded-sm capitalize ">Logout</Link> : <Link to="/login" className="btn  btn-outline btn-warning rounded-sm capitalize ">Login</Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
import Navbar from "../../components/navbar/Navbar"
import logo from '../../assets/images/login/login.svg'
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
const Register = () => {
    const { registerUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegistation = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        registerUser(email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
                logOut()
                    .then(() => {
                        console.log("Logout Successfully")
                        localStorage.removeItem("location")
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                alert("Register Successfully")
                navigate("/login")

            })
            .catch(err => console.log(err))

    }
    return (
        <div className="container mx-auto px-2 lg:px-0 ">
            <Navbar />
            <div className="flex flex-col h-screen  lg:flex-row items-center">
                <div className="flex-1">
                    <img className="w-full h-[40rem]" src={logo} alt="logo" />
                </div>


                <div className="w-full flex-1  p-4 bg-white border border-gray-200 rounded-lg lg:py-20 h-fit shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleRegistation} className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign up to our platform</h5>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>

                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Already LoggedIn? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Please login</Link>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Register
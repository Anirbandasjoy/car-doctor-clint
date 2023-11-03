import { FiSun } from "react-icons/fi"
import useTheme from "../../../hooks/useTheme"
import { LuMoonStar } from "react-icons/lu"
const Navbar = () => {
    const { handleModeChnage, mode } = useTheme()
    return (
        <div className="dark:bg-slate-500">
            <div className='flex justify-between items-center w-full  max-w-7xl mx-auto '>
                <div>
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                </div>
                <div className="flex items-center">
                    {
                        mode === "light" ? <LuMoonStar onClick={handleModeChnage} size={37} className="mr-8  cursor-pointer" /> :
                            <FiSun onClick={handleModeChnage} size={37} className="mr-8  cursor-pointer dark:text-white" />
                    }
                    <img className='w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yU9YYJ7zB2TdJxeMOmqtEc3M3a9YZj2J2w&usqp=CAU" alt="account" />
                </div>

            </div>
            <div className="w-full h-[1px] bg-slate-700 mt-5"></div>
        </div>

    )
}

export default Navbar
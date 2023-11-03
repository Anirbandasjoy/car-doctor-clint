import { AiFillTwitterCircle, AiFillLinkedin, AiOutlineInstagram, AiOutlineClockCircle } from 'react-icons/ai'
import { BsFacebook, BsTelephoneForward } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
const Header = () => {


    return (
        <div className='flex dark:bg-gray-700 flex-col md:flex-row justify-between items-center p-3 ' data-aos="zoom-in">

            <div className='flex flex-col dark:text-white md:flex-row mb-6 md:mb-0 text-xs items-center  gap-5 list-none'>
                <div className='flex items-center gap-2'>
                    <BsTelephoneForward />
                    <li>(+088) 01772838734</li>
                </div>
                <div className='flex items-center gap-2'>
                    <HiOutlineMail />
                    <li>adj@gmail.com</li>
                </div>
                <div className='flex items-center gap-2'>
                    <AiOutlineClockCircle />
                    <li> Sut – Fri 9.00 am – 6.00 pm</li>
                </div>
                {/* {
                    user && <div className='flex items-center gap-2'>
                        <CgProfile />
                        <li>{user?.displayName}</li>
                    </div>
                } */}

            </div>
            <div className='flex items-center gap-3'>
                <button className=" bg-gray-100">
                    <AiFillTwitterCircle className='text-gray-500 hover:text-teal-400 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <BsFacebook className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiFillLinkedin className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>
                <button className=" bg-gray-100">
                    <AiOutlineInstagram className='text-gray-500  hover:text-cyan-700 duration-300' size={19} />
                </button>

                <div className="avatar">
                    <div className="w-9 rounded-full cursor-pointer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6yU9YYJ7zB2TdJxeMOmqtEc3M3a9YZj2J2w&usqp=CAU" />
                    </div>
                </div>

                {/* <Link to="/login" className=" bg-red-500 py-1 px-3 text-white font-bold shadow-md rounded-sm text-sm">
                    Login
                </Link> */}


            </div>

        </div>




    )
}

export default Header
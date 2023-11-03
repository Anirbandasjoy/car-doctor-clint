import Navbar from "../navbar/Navbar"
import banner from '../../assets/images/banner/4.jpg'
import logo from '../../assets/logo.svg'
import { Link, useLoaderData } from "react-router-dom"
const ServiceDetails = () => {
    const { data } = useLoaderData();
    const { title, img, description, facility, price, _id } = data
    return (
        <div className="container mx-auto px-2 lg:px-0 ">
            <Navbar />
            <div>
                <div className=" lg:h-80 h-40 w-full relative">
                    <img className="w-full h-full" src={banner} alt="service-banner" />
                    <div className="serviceDetails flex items-center  w-full h-full top-0 absolute">
                        <h1 className=" lg:ml-20 ml-10  text-white text-xl lg:text-3xl font-bold">Service Details</h1>
                    </div>
                </div>
            </div>
            <div className="mt-28">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-3/4 w-full space-y-8">
                        <img className="w-full h-[28rem] rounded-lg" src={img} alt={title} />
                        <h1 className="text-xl font-bold lg:text-4xl">{title}</h1>
                        <p className="text-sm lg:text-sm text-gray-400">{description}</p>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {
                                facility.map((fac, index) => {
                                    return <div className="bg-gray-100 dark:bg-gray-700  space-y-4 lg:p-20 p-10 border-t-4 border-red-400 rounded-t-xl" key={index}>
                                        <h1 className="text-2xl dark:text-white text-gray-700">{fac.name}</h1>
                                        <p className="text-xs lg:text-sm text-gray-400">{fac.details}</p>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center bg-[#151515] h-[28rem] space-y-10 p-6 rounded-md text-white">
                            <img className="mx-auto" src={logo} alt="logo" />
                            <h1 className="text-lg lg:text-2xl font-semibold">Need Help? We Are Here <br /> To Help You</h1>
                            <div className=" relative">
                                <div className="bg-white text-gray-600 p-10 rounded-md">
                                    <h2 className="text-lg lg:text-xl font-bold"><span className="text-red-400">Car Doctor</span> Special</h2>
                                    <h4 className="text-sm lg:text-lg font-bold">Save up to <span className="text-red-400">60% off</span></h4>
                                </div>

                                <button className="btn border-none capitalize rounded-md text-white -bottom-6 right-20 hover:text-gray-600 absolute bg-[#FF3811]">Get A Quote</button>
                            </div>
                        </div>
                        <h1 className="text-2xl lg:text-4xl font-bold mt-10">Price ${price}</h1>
                        <Link to={`/checkout/${_id}`} >
                            <button className="btn border-none capitalize rounded-md text-white mt-5  hover:text-gray-600 w-full bg-[#FF3811]">Proceed Checkout</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ServiceDetails
import Navbar from "../navbar/Navbar"
import banner from '../../assets/images/banner/4.jpg'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { useLoaderData } from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { data } = useLoaderData()
    const { title, img, price } = data
    const handleOrder = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const data = form.date.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const email = form.email.value;
        const status = "Pending"
        const order = { title, img, price, name, data, phone, message, email, status }
        axios.post("http://localhost:5000/order", order)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.promise(
                        new Promise((resolve) => setTimeout(() => resolve(res.data), 2000)),
                        {
                            loading: "Order Placed",
                            success: () => {
                                return <b>Order Placed Successfully</b>;
                            },
                            error: <b>Could not placed .</b>,
                        }
                    );
                }
            })


        form.reset()

    }
    return (
        <div className="container mx-auto px-2 lg:px-0">
            <Navbar />
            <div>
                <div className=" lg:h-80 h-40 w-full relative">
                    <img className="w-full h-full" src={banner} alt="service-banner" />
                    <div className="serviceDetails flex  items-center  w-full h-full top-0 absolute">
                        <h1 className=" lg:ml-20 ml-10  text-white text-xl lg:text-3xl font-bold">Check Out</h1>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <form onSubmit={handleOrder} className="lg:p-28 p-5 space-y-6 dark:bg-gray-400 bg-gray-100">
                    <div className="flex flex-col lg:flex-row  items-center gap-5 justify-center">
                        <div className="w-full">
                            <input type="text" className="bg-white w-full rounded-md   p-3 py-4 text-sm outline-none" name="name" id="name" placeholder="Service Name" required defaultValue={title} readOnly />
                        </div>
                        <div className="w-full">
                            <input type="date" className="bg-white w-full rounded-md   p-3 py-4 text-sm outline-none" name="date" id="date" placeholder="Date" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-5 justify-center">
                        <div className="w-full">
                            <input type="number" className="bg-white w-full rounded-md   p-3 py-4 text-sm outline-none" name="phone" id="phone" placeholder="Your Phone " required />
                        </div>
                        <div className="w-full">
                            <input type="email" className="bg-white w-full rounded-md   p-3 py-4 text-sm outline-none" name="email" id="email" placeholder="Your Email" defaultValue={user?.email} readOnly required />
                        </div>
                    </div>
                    <div className="w-full">
                        <textarea type="text" className="bg-white w-full rounded-md h-40  p-6 text-sm outline-none" name="message" id="message" placeholder="Your Message..." required></textarea>
                    </div>
                    <button className="btn border-none capitalize rounded-md text-white mt-5   w-full hover:bg-[#FF3811]  bg-[#FF3811]">Order Confirm</button>
                </form>
            </div>
            <Toaster
                toastOptions={{
                    position: "bottom-center",
                    style: {
                        background: "#283046",
                        color: 'white'
                    }
                }}
            />

        </div>
    )
}

export default Checkout
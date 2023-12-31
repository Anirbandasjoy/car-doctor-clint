import { useContext, useEffect, useState } from "react"
import Navbar from "../navbar/Navbar"
import axios from "axios"
import { AuthContext } from "../../context/AuthProvider"
import { AiFillCloseCircle } from "react-icons/ai"
import LoadingSpinner from "../loading/LoadingSpinner"
import Error from "../error/Error"
import toast, { Toaster } from "react-hot-toast"
const Cart = () => {
    const { user } = useContext(AuthContext)
    const [CartData, setCartData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const url = user?.email
        ? `http://localhost:5000/order?email=${user.email}`
        : null;

    const fetchData = async (url) => {
        try {
            if (!url) {
                return;
            }
            setLoading(true);
            await axios
                .get(url, { withCredentials: true })
                .then((res) => {
                    setCartData(res.data);
                });
            setLoading(false);
            setError(null);
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    if (loading) {
        return <LoadingSpinner />
    }
    else if (error) {
        return <Error>{error}</Error>
    }

    const handleDelete = (id) => {
        try {

            axios.delete(`http://localhost:5000/order/${id}`)
                .then((res) => {

                    if (res.data.deletedCount > 0) {

                        const remaining = CartData.filter(cart => cart._id !== id);
                        setCartData(remaining)
                        toast.promise(
                            new Promise((resolve) => setTimeout(() => resolve(res.data), 100)),
                            {
                                loading: "Deleting",
                                success: (data) => {
                                    return <b>Order delete to {data.deletedCount}</b>;
                                },
                                error: <b>Could not Delete .</b>,
                            }
                        );

                    }

                })
        } catch (error) {
            console.log(error)
        }
    }

    // const handleUpdated = (id) => {

    //     const status = "Approved"
    //     const updatedOrder = { status }
    //     try {
    //         axios.patch(`http://localhost:5000/order/${id}`, updatedOrder)
    //             .then((res) => {

    //                 const remaining = CartData.filter(cart => cart._id !== id);
    //                 const updated = CartData.find(cart => cart._id === id);
    //                 updated.status = "Approved"
    //                 const newCart = [updated, ...remaining];
    //                 setCartData(newCart)
    //                 console.log(res.data)

    //                 toast.promise(
    //                     new Promise((resolve) => setTimeout(() => resolve(res.data), 1000)),
    //                     {
    //                         loading: "Updating",
    //                         success: (data) => {
    //                             return <b>Status updated to {data.status}</b>;
    //                         },
    //                         error: <b>Could not update status.</b>,
    //                     }
    //                 );
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


    return (
        <div className="container mx-auto dark:bg-slate-800 h-screen">

            <Navbar />

            <div className="mt-20 dark:text-white h-[35rem] overflow-auto">
                <div className="overflow-x-auto">
                    <table className="table text-center ">
                        {/* head */}
                        <thead>
                            <tr className="bg-gray-300 font-bold">
                                <th>Action</th>
                                <th className="text-left">Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                CartData.map(cart => {
                                    return <tr key={cart._id}>
                                        <th>
                                            <AiFillCloseCircle onClick={() => handleDelete(cart._id)} size={30} className="cursor-pointer mx-auto" />
                                        </th>
                                        <td>
                                            <div className="flex  items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img className="" src={cart.img} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{cart.title}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {cart.price}

                                        </td>
                                        <td>{cart.data}</td>
                                        <th>

                                            <button className="btn btn-ghost btn-sm bg-transparent text-green-400 border-2 border-green-500 w-24 rounded-sm text-xs capitalize">Details</button>
                                        </th>
                                    </tr>
                                })
                            }



                        </tbody>



                    </table>
                </div>
            </div>


            <Toaster
                toastOptions={{
                    position: "top-center",
                    style: {
                        background: "#283046",
                        color: 'white'
                    }
                }}
            />
        </div>
    )
}

export default Cart
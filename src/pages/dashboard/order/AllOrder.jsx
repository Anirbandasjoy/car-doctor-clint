import { useContext } from "react"
import axios from "axios"
import { AiFillCloseCircle } from "react-icons/ai"
import toast, { Toaster } from "react-hot-toast"
import { AuthContext } from "../../../context/AuthProvider"
import LoadingSpinner from "../../../components/loading/LoadingSpinner"
import Error from "../../../components/error/Error"
import useFetch from "../../../hooks/useFetch"
const AllOrder = () => {
    const { user } = useContext(AuthContext)
    // const [data, setCartData] = useState([])
    const url = user?.email
        ? `http://localhost:5000/order?email=${user.email}`
        : null;

    const { data, loading, error, setData } = useFetch(url)

    if (loading) {
        return <LoadingSpinner />
    }
    else if (error) {
        return <Error>{error}</Error>
    }
    else if (data.length === 0) {
        return <h1 className="flex justify-center lg:mt-72 text-xl lg:text-4xl">Card data Not Avilable</h1>
    }

    const handleDelete = (id) => {
        try {

            axios.delete(`http://localhost:5000/order/${id}`)
                .then((res) => {

                    if (res.data.deletedCount > 0) {

                        const remaining = data.filter(cart => cart._id !== id);
                        setData(remaining)
                        toast.promise(
                            new Promise((resolve) => setTimeout(() => resolve(res.data), 200)),
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

    const handleUpdated = (id) => {

        const status = "Approved"
        const updatedOrder = { status }
        try {
            axios.patch(`http://localhost:5000/order/${id}`, updatedOrder)
                .then((res) => {

                    const remaining = data.filter(cart => cart._id !== id);
                    const updated = data.find(cart => cart._id === id);
                    updated.status = "Approved"
                    const newCart = [updated, ...remaining];
                    setData(newCart)
                    console.log(res.data)

                    toast.promise(
                        new Promise((resolve) => setTimeout(() => resolve(res.data), 200)),
                        {
                            loading: "Updating",
                            success: (data) => {
                                return <b>Status updated to {data.status}</b>;
                            },
                            error: <b>Could not update status.</b>,
                        }
                    );
                })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container mx-auto ">
            <div className="lg:mt-8 mt-4 lg:h-[30rem] h-[17rem] dark:text-gray-500 overflow-auto">
                <div className="overflow-x-auto ">
                    <table className="table text-center ">
                        {/* head */}
                        <thead>
                            <tr className="bg-yellow-100 text-gray-700 font-bold">
                                <th className="">Action</th>
                                <th className="text-left border-x-2 border-gray-400">Name</th>
                                <th className="text-left border-r-2 border-gray-400">Email</th>
                                <th className="border-x-2 border-gray-400">Price</th>
                                <th className="border-x-2 border-gray-400">Date</th>
                                <th className="border-x-2 border-gray-400">Phone</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(cart => {
                                    return <tr key={cart._id}>
                                        <td className="bg-red-100 ">
                                            <AiFillCloseCircle onClick={() => handleDelete(cart._id)} size={30} className="cursor-pointer mx-auto" />
                                        </td>
                                        <td className="bg-blue-100">
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
                                        <td className="text-left bg-red-100">
                                            {cart.email}
                                        </td>
                                        <td className="bg-blue-100">
                                            {cart.price}

                                        </td>
                                        <td className="bg-red-100">{cart.data}</td>
                                        <td className="bg-blue-100">{cart.phone}</td>
                                        <td className="bg-red-100">
                                            {
                                                cart.status === "Approved" ? <button className="btn btn-ghost btn-sm bg-transparent text-green-400 border-2 border-green-500 w-24 rounded-sm text-xs capitalize">Approved</button> :
                                                    <button onClick={() => handleUpdated(cart._id)} className="btn btn-ghost btn-sm hover:bg-[#FF3811] rounded-sm border-2 border-red-600 w-24 bg-[#FF3811] text-xs text-white capitalize">Pending</button>
                                            }
                                        </td>
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

export default AllOrder
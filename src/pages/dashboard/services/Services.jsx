import useFetch from "../../../hooks/useFetch"
import Service from "./Service";
import { RiDeleteBinLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { PiPencilSimpleLineDuotone } from 'react-icons/pi'
import LoadingSpinner from "../../../components/loading/LoadingSpinner";

const Services = () => {
    const { data, loading, error } = useFetch("http://localhost:5000/services");

    if (loading) {
        return <LoadingSpinner />
    }
    else if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                        <tr className="bg-gray-200 border-b dark:bg-gray-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <RiDeleteBinLine size={25} />
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Name
                            </th>
                            <td className="px-6 py-4">
                                Id
                            </td>
                            <td className="px-6 py-4">
                                Price
                            </td>
                            <td className="px-6 py-4">
                                Info
                            </td>
                            <td className="px-6 py-4">
                                <button href="#" className="font-medium ">
                                    <PiPencilSimpleLineDuotone size={25} />
                                </button>
                            </td>
                        </tr>

                    </thead>
                    <tbody>

                        {


                            data.map(service => <Service key={service._id} service={service} />)



                        }






                    </tbody>
                </table>
                <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
                        </li>
                        <li>
                            <Link href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Services
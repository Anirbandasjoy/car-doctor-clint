import { AiOutlineCloseSquare } from 'react-icons/ai'
import PropTypes from 'prop-types'
const Service = ({ service }) => {
    console.log(service)
    const { title, price, service_id } = service || {}

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <AiOutlineCloseSquare size={20} className='cursor-pointer' />
                </div>
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {title}
            </th>
            <td className="px-6 py-4">
                {service_id}
            </td>
            <td className="px-6 py-4">

                ${price}
            </td>
            <td className="px-6 py-4">
                <button className='btn-xs btn capitalize text-xs font-normal bg-gray-200 rounded-sm text-gray-900  '>details</button>
            </td>
            <td className="px-6 py-4">
                <button href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
        </tr>
    )
}

Service.propTypes = {
    service: PropTypes.object
}

export default Service
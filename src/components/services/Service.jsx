import PropTypes from 'prop-types';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, title, price, _id } = service

    return (
        <div className='cursor-pointer  h-80 w-full relative cardBody'>

            <img className='h-full w-full' src={img} alt={title} />

            <div className='h-full w-full serviceCard absolute top-0 flex items-end'>
                <div className='p-3 cart w-full'>
                    <h1 className='font-bold text-white text-2xl '>{title}</h1>
                    <div className='flex justify-between items-center '>
                        <p className='font-semibold text-xl text-red-100'>price : ${price}</p>
                        <Link to={`/service-details/${_id}`}>
                            <BsFillArrowRightCircleFill size={30} className='text-red-300   mb-1 lg:ml-[19rem] ml-28' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}
export default Service
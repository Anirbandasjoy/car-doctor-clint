import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.module.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner1} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner2} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner3} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner4} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner5} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='lg:h-[37rem] w-full z-10' src={banner6} alt="" />
                        <div>
                            <div className='h-[37rem] flex  items-center w-full  lg:bottom-0 banner absolute z-40'>
                                <div className='ml-20 space-y-5'>
                                    <h1 className='text-4xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                    <p className='text-sm text-gray-200'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                                    <button className='btn  bg-[#FF3811]  border-none rounded-sm  hover:text-gray-700 text-white capitalize'>Discover More</button>
                                    <button className='btn ml-2  bg-transparent rounded-sm hover:text-gray-700  text-white capitalize'>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Banner

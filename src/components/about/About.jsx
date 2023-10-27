import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='my-20 py-4' id='about'>
            <div className='flex flex-col lg:flex-row justify-center gap-12'>
                <div className='flex-1 relative'>
                    <img className='lg:w-5/6' src={person} alt="person" />
                    <img className='lg:w-2/4 w-3/4 lg:top-[50%] top-[60%] lg:left-80 border-8 border-white absolute' src={parts} alt="person" />
                </div>
                <div className='flex-1 space-y-8'>
                    <h2 className='font-bold text-red-400'>About Us</h2>
                    <h1 className='lg:text-4xl text-2xl font-semibold'>We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className='text-gray-600 text-xs lg:text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <h4 className='text-gray-600 text-xs lg:text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </h4>
                    <button className='btn text-sm bg-[#FF3811] text-white hover:bg-transparent hover:text-gray-700 border-2 hover:border-red-800 capitalize rounded-sm'>Get More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About
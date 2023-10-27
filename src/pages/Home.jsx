import About from "../components/about/About"
import Banner from "../components/banner/Banner"
import Navbar from "../components/navbar/Navbar"
import Services from "../components/services/Services"


const Home = () => {
    return (
        <div className="container mx-auto px-2 lg:px-0">
            <Navbar />
            <Banner />
            <About />
            <Services />
        </div>
    )
}

export default Home


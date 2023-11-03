import About from "../components/about/About"
import Banner from "../components/banner/Banner"
import Navbar from "../components/navbar/Navbar"
import Services from "../components/services/Services"
import Header from "../layout/Header"


const Home = () => {
    return (
        <div>
            <div className="container mx-auto px-2 lg:px-0">
                <Header />
                <Navbar />
                <Banner />
                <About />
                <Services />
            </div>
        </div>
    )
}

export default Home


import axios from "axios"
import { useEffect, useState } from "react"
import Service from "./Service"
import Loading from "../loading/Loading"

const Services = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.get("http://localhost:5000/services", { withCredentials: true })
            setServices(data)
            setIsLoading(false)
            setError(null)
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading) {
        return <Loading />
    }
    else if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="mt-20 pb-20" id="services">
            <div className="text-center space-y-5 dark:text-white">
                <h4 className="font-bold text-red-400">Services</h4>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p className="text-xs lg:text-lg text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    )
}

export default Services
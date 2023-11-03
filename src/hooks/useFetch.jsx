import axios from "axios";
import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async (url) => {
        try {
            setLoading(true)
            const { data } = await axios.get(url, { withCredentials: true })
            setData(data)
            setLoading(false);
            setError(null)
        } catch (error) {
            console.log(error)
            setError(error.message);
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])

    return { data, loading, error, setData }
}
export default useFetch
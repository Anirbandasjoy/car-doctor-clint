import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">

                <h1 className="text-[20rem] text-red-400 font-bold">404</h1>
                <Link to="/">
                    <button className="text-blue-400 underline text-lg ">back to home</button>

                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
import { Outlet, useNavigation } from "react-router-dom"
import LoadingSpinner from "../components/loading/LoadingSpinner"
const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>


            {
                navigation.state === "loading" ? <LoadingSpinner /> :
                    <Outlet />
            }
        </div>
    )
}

export default MainLayout
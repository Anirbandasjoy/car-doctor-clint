import { Vortex } from "react-loader-spinner"


const LoadingSpinner = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}

export default LoadingSpinner
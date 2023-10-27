const Loading = () => {
    return (
        <div className=" shadow rounded-md p-4 w-full h-screen mx-auto">
            <div className="animate-pulse flex space-x-4">

                <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-4 ">
                        <div className="h-4 w-1/6 mx-auto bg-slate-700 rounded"></div>
                        <div className="h-8 w-2/6 mx-auto bg-slate-700 rounded"></div>
                        <div className="h-6 w-3/6 mx-auto bg-slate-700 rounded"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="h-80 bg-slate-700 rounded"></div>
                        <div className="h-80 bg-slate-700 rounded"></div>
                        <div className="h-80 bg-slate-700 rounded"></div>
                        <div className="h-80 bg-slate-700 rounded"></div>
                        <div className="h-80 bg-slate-700 rounded"></div>
                        <div className="h-80 bg-slate-700 rounded"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Loading
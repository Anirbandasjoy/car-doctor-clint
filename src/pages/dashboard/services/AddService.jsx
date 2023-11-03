const AddService = () => {
    return (
        <div className="bg-gray-300 h-[38rem] text-center">
            <form className="pt-10 lg:px-7 px-2 space-y-5">
                <div className="flex flex-col lg:flex-row gap-3">

                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="text" id="title" name="title" placeholder="Title " required />

                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="text" id="title" name="title" placeholder="Price " required />
                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="text" id="title" name="title" placeholder="Service Id " required />
                </div>
                <div className="flex gap-3 flex-col lg:flex-row">
                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="text" id="facilitiOneName" name="facilityOneName" placeholder="Facility 1 Name " required />
                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="title" id="facilityOneDsc" name="facilityOneDsc" placeholder="Facility 1 dsc " required />
                </div>
                <div className="flex gap-3 flex-col lg:flex-row">
                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="text" id="facilitiTwoName" name="facilityTwoName" placeholder="Facility 2 Name " required />
                    <input className="px-3 py-2 input   w-full outline-none rounded-sm" type="title" id="facilityTwoDsc" name="facilityTwoDsc" placeholder="Facility 2 dsc " required />
                </div>
                <div className="flex gap-3 flex-col    lg:flex-row">
                    <input className="px-3 py-2 w-full input outline-none rounded-sm" type="text" id="facilitiThreeName" name="facilityThreeName" placeholder="Facility 3 Name " required />
                    <input className="px-3 py-2  input   w-full outline-none rounded-sm" type="title" id="facilityThreeDsc" name="facilityThreeDsc" placeholder="Facility 3 dsc " required />
                </div>
                <div className="flex gap-3 flex-col lg:flex-row">
                    <input className="px-3 py-2 input w-full outline-none rounded-sm" type="text" id="facilitiFourName" name="facilityFourName" placeholder="Facility 4 Name " required />
                    <input className="px-3 input  py-2 w-full outline-none rounded-sm" type="title" id="facilityFourDsc" name="facilityFourDsc" placeholder="Facility 4 dsc " required />
                </div>
                <div className="w-full">
                    <input className="px-3 input  py-2 w-full outline-none rounded-sm" type="title" id="image" name="image" placeholder="Image Url " required />
                </div>
                <div >
                    <textarea className="textarea textarea-info w-full" placeholder="dsc..." required></textarea>
                </div>
                <button className="btn rounded-sm w-full capitalize bg-success text-gray-900 hover:bg-success">Add</button>
            </form>
        </div>
    )
}

export default AddService
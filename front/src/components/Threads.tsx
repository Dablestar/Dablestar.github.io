function Threads(){
    return(
            <div className="w-full">
                <span>
                    <span className="threadsText text-4xl">r/Daburu</span>
                    <span className="threadsTitle text-2xl font-thin !ml-4">Feel free to leave a comment to developer</span>
                </span>

                <div className="commentForm w-9/10 mt-5 ml-10">
                    <form action="" className="mt-5 grid gap-2">
                        <div className="grid grid-cols-4 gap-2">
                            <input type="text" placeholder="Name" className="w-full p-2 border-b text-2xl focus:outline-hidden col-span-1" />
                            <input type="text" placeholder="Comment" className="w-full p-2 border-b text-2xl focus:outline-hidden col-span-3" />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-l font-bold col-span-3 text-right">※By pressing Submit, you are agreeing to provide your IP address to the site owner</span>
                            <button className="p-2 text-xl border rounded col-span-1">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="commentsTitle text-4xl mt-10">Comments</div>
                <table className="w-9/10 mt-5 ml-10 border-collapse border border-gray-300">
                    <thead>
                        <tr className="">
                            <th className="border-b p-2 text-2xl font-light">Name</th>
                            <th className="border-b p-2 text-2xl font-light">Date</th>
                            <th className="border-b p-2 text-2xl font-light">Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b p-2 mt-4 mb-4">
                            <td className="p-2 text-center text-xl">Martin</td>
                            <td className="p-2 text-center text-xl">2025-02-18</td>
                            <td className="p-2 mt-4 mb-4 text-xl">Hello, this is a test comment!</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}
export default Threads
import { getCommentList, uploadComment, deleteComment, getIpAddress  } from "./FirebaseConfigure"
import { useEffect, useState } from "react"
import type { UserComment } from "./structure/UserComment"
import type { InternalComment } from "./structure/InternalComment"

function Threads(){
    const [comments, setComments] = useState<UserComment[]>([]);
    useEffect(() => {
        getCommentList().then(setComments);
    }, []);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        // alert("Submitting comment:" + JSON.stringify({ name, comment, password }));
        const ip = await getIpAddress();
        console.log("Fetched IP address:", ip);
        await uploadComment({
            name: name,
            date: new Date().toISOString().slice(0, 10),
            comment: comment,
            password: password,
            ipAddress: ip
        }as InternalComment);
        console.log("Comment submitted:", { name, comment, password, ip });
        setName("");
        setComment("");
        setPassword("");
        getCommentList().then(setComments);
    };

    return(
            <div className="w-full">
                <span>
                    <span className="threadsText text-4xl">r/Daburu</span>
                    <span className="threadsTitle text-2xl font-thin !ml-4">Feel free to leave a comment to developer</span>
                </span>

                <div className="commentForm w-9/10 mt-5 ml-10">
                    <form action="" className="mt-5 grid gap-2">
                        <div className="grid grid-cols-4 gap-2">
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border-b text-2xl focus:outline-hidden col-span-1" />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border-b text-2xl focus:outline-hidden col-span-3" />
                            <input type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} className="w-full p-2 border-b text-2xl focus:outline-hidden col-span-4" />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-l font-bold col-span-3 text-right">※By pressing Submit, you are agreeing to provide your IP address to the site owner</span>
                            <button className="p-2 text-xl border rounded col-span-1" type="button" onClick={() => {handleSubmit();}}>Submit</button>
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
                        {comments.map((comment, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border-b p-2 text-xl">{comment.name}</td>
                                <td className="border-b p-2 text-xl">{comment.date}</td>
                                <td className="border-b p-2 text-xl">{comment.comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}
export default Threads
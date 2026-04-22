import { getCommentList, uploadComment, getIpAddress } from "./FirebaseConfigure"
import { useEffect, useState } from "react"
import type { UserComment } from "./structure/UserComment"
import type { InternalComment } from "./structure/InternalComment"

type Notification = { type: "success" | "error"; message: string };

function LoadingModal() {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-10 flex flex-col items-center gap-5 shadow-2xl">
                <div className="w-14 h-14 border-4 border-gray-200 border-t-gray-700 rounded-full animate-spin" />
                <p className="text-lg text-gray-600 font-light">Loading...</p>
            </div>
        </div>
    );
}

function Threads(){
    const [comments, setComments] = useState<UserComment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState<Notification | null>(null);

    const showNotification = (type: Notification["type"], message: string) => {
        setNotification({ type, message });
        setTimeout(() => setNotification(null), 4000);
    };

    useEffect(() => {
        setIsLoading(true);
        getCommentList()
            .then(setComments)
            .catch(() => showNotification("error", "Failed to load comments. Please refresh."))
            .finally(() => setIsLoading(false));
    }, []);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        if (!name.trim() || !comment.trim()) {
            showNotification("error", "Name and comment are required.");
            return;
        }
        setIsLoading(true);
        try {
            const ip = await getIpAddress();
            const date = new Date().toISOString().slice(0, 10);
            await uploadComment({ name, date, comment, password, ipAddress: ip } as InternalComment);
            // Optimistic update — no need to refetch the whole list
            setComments(prev => [...prev, { name, date, comment }]);
            setName("");
            setComment("");
            setPassword("");
            showNotification("success", "Comment submitted successfully!");
        } catch {
            showNotification("error", "Failed to submit comment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div className="w-full">
            {isLoading && <LoadingModal />}

            {notification && (
                <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg text-white text-lg font-light transition-all duration-500 ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
                    {notification.message}
                </div>
            )}

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
                        <button className="p-2 text-xl border rounded col-span-1" type="button" onClick={handleSubmit} disabled={isLoading}>Submit</button>
                    </div>
                </form>
            </div>

            <div className="commentsTitle text-4xl mt-10">Comments</div>
            <table className="w-9/10 mt-5 ml-10 border-collapse border border-gray-300">
                <thead>
                    <tr>
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

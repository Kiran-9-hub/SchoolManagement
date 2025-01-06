import { CiMenuKebab } from "react-icons/ci";
function HeadCounts({ type, count }) {
    return (
        <>
            <div className="flex flex-col p-4 bg-purple-500 
            rounded-lg shadow-md w-44 gap-5 ">
                <div className="flex justify-between items-center w-full ">
                    <div className="text-center text-sm h-6 w-20 rounded-full
                     bg-slate-50 text-green-700">
                        2024/25
                    </div>
                    <div>
                        <CiMenuKebab className="text-4xl text-center rotate-90 text-black cursor-pointer" />
                    </div>
                </div>
                <h1 className="text-3xl font-semibold text-black-50">{count}</h1>
                <p className="text-xl text-slate-200">{type}</p>
            </div>
        </>
    )
}
export default HeadCounts
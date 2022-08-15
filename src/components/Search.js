// import { AiOutlineClose } from 'react-icons/ai';

export default function Search() {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex  justify-between">
                <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3 z-1000"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </div>
                {/* <div className ="place-items-center left-96 md:left-120">
                <AiOutlineClose fontSize={24} className="absolute top-0 bottom-0 z-1000 my-auto"/></div> */}
                <input
                    type="search"
                    className="w-80 py-1 pl-12 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                
            </div>
        </div>
    );
}
// import { AiOutlineClose } from 'react-icons/ai';
import './Search.css'

export default function Search({value, onChange}) {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex  justify-between">
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3 search-color button"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
                <input
                    type="search"
                    className="w-80 py-1 pl-12 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    id='Search'
                    value={value}
                    onChange={onChange}
                />
                
            </div>
        </div>
    );
}
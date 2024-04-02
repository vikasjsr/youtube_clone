import { useDispatch } from "react-redux"
import hamburger from "../assets/hamburger.png"
import { toggleMenu } from "../utils/appSlice";

const Navbar = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="navbar fixed top-0 left-0 right-0 z-10 h-16 flex items-center justify-between px-4 bg-white shadow-lg">
            <div className="flex items-center space-x-4">
                {/* Hamburger menu */}
                <img onClick={() => toggleMenuHandler()} src={hamburger} alt="Menu" className="h-8 w-8 cursor-pointer" />

                {/* Logo */}
                <img src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" alt="Logo" className="h-10" />
            </div>

            {/* Search bar */}
            <form className="flex items-center max-w-md mx-auto">
                <input type="text" id="simple-search" className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3" placeholder="Search" required />
                <button type="submit" className="ml-2 p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>

            {/* Account section */}
            <div>
                <button className="text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar;
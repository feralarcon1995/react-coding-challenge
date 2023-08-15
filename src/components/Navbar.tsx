import { useLocation, Link } from "react-router-dom"


const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto  capitalize text-gray-300">
                <Link to="/" className={`:text-gray-200 mx-1.5 sm:mx-6 ${location.pathname === '/' ? 'border-b-2 border-blue-500' : ''}`}>Home</Link>
                <Link to="/movies" className={`text-gray-200 mx-1.5 sm:mx-6 ${location.pathname === '/movies' ? 'border-b-2 border-blue-500' : ''}`}>Movies</Link>
                <Link to="/series" className={`text-gray-200 mx-1.5 sm:mx-6 ${location.pathname === '/series' ? 'border-b-2 border-blue-500' : ''}`}>Series</Link>

            </div>
        </nav>
    )
}

export default Navbar
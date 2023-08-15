import { Link } from "react-router-dom"


const Footer = () => {
    return (

        <footer className="bg-gray-800">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link to="/" className="text-base leading-6 text-gray-200 hover:scale-150">
                            Home
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/movies" className="text-base leading-6 text-gray-200 hover:scale-150">
                            Movies
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link to="/series" className="text-base leading-6 text-gray-200 hover:scale-150">
                            Series
                        </Link>
                    </div>
                </nav>

                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2023 <a href="https://www.linkedin.com/in/feralarcon1995/" target="_blank" rel="noopener noreferrer" className="hover:scale-150">Fernando Alarcon.</a>
                </p>
            </div>
        </footer>
  )
}

export default Footer
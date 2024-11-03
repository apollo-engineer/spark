
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <>
      <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-4 px-8 navbar border-none">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/home" className="flex items-center">
            <img src="logo.png" alt="Spark25 Logo" className="w-10 h-10" />
            <span className="ml-3 text-white font-bold text-3xl">Spark25</span>
          </Link>

          <div className="flex space-x-8">
            <Link to="/home" className="text-white pt-3 px-2 underline underline-offset-2">Home</Link>
            <Link to="/portfolio" className="text-white pt-3 px-2">Portfolio</Link>
            <Link to="/blog" className="text-white pt-3 px-2">Blog</Link>
            <Link to="/contact" className="bg-clip-border px-4 py-2 border-2 border-purple-300 rounded-xl text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

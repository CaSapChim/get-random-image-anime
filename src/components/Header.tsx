import { Link } from "react-router-dom";

export default function Header() {
  return (  
    <header className='nav bg-gray-800 flex flex-row items-center justify-between p-4'>
      <div>
        <h1 className='text-white pl-4 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>H4ntai</h1>
      </div>
      <div className='space-x-5 text-white pr-10 cursor-pointer'>
        <ul className="flex flex-row items-center justify-between p-1 space-x-5">
          <li>
            <Link to="/" className="transition duration-300 ease-in-out hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link to="/awoo" className="transition duration-300 ease-in-out hover:text-purple-400">Awoo</Link>
          </li>
          <li>
            <Link to="/neko" className="transition duration-300 ease-in-out hover:text-purple-400">Neko</Link>
          </li>
          <li>
            <Link to="/waifu" className="transition duration-300 ease-in-out hover:text-purple-400">Waifu</Link>
          </li>
          <li>
            <Link to="/nsfw" className="transition duration-300 ease-in-out hover:text-purple-400">NSFW</Link>
            <ul className="subnav bg-gray-800 p-3 space-y-4">
              <li><Link to="/nsfw" className="transition duration-300 ease-in-out hover:text-purple-400">BlowJob</Link></li>
              <li><Link to="/nsfw/neko" className="transition duration-300 ease-in-out hover:text-purple-400">Neko</Link></li>
              <li><Link to="/nsfw/waifu" className="transition duration-300 ease-in-out hover:text-purple-400">Waifu</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>       
  );
}
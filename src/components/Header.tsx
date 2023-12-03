import { Link } from "react-router-dom";

export default function Header() {
  return (  
    <header className='bg-gray-800 flex flex-row items-center justify-between p-4'>
        <div>
            <h1 className='text-white pl-10 transition ease-linear hover:text-purple-400 cursor-pointer'>H4ntai</h1>
        </div>
        <div className='space-x-5 text-white pr-20 cursor-pointer'>
            <Link to="/" className="transition ease-linear hover:text-purple-400">Home</Link>
            <Link to="/awoo" className="transition ease-linear hover:text-purple-400">Awoo</Link>
            <Link to="/neko" className="transition ease-linear hover:text-purple-400">Neko</Link>
            <Link to="/waifu" className="transition ease-linear hover:text-purple-400">Waifu</Link>
            <Link to="/nsfw" className="transition ease-linear hover:text-purple-400">NSFW</Link>
        </div>
    </header>       
  );
}

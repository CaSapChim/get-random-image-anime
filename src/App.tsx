import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Awoo from "./components/Awoo";
import Neko from "./components/Neko";
import Waifu from "./components/Waifu";
import NekoNSFW from "./components/NSFW/NekoNSFW";
import WaifuNSFW from "./components/NSFW/WaifuNSFW";
import BlowJobNSFW from "./components/NSFW/BlowJobNSFW";

function App() {
  return (
    <Router>
      <div className="w-screen bg-white">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/awoo" element={<Awoo/>}></Route>
          <Route path="/neko" element={<Neko/>}></Route>
          <Route path="/waifu" element={<Waifu/>}></Route>
          <Route path="/nsfw/neko" element={<NekoNSFW/>}></Route>
          <Route path="/nsfw/waifu" element={<WaifuNSFW/>}></Route>
          <Route path="/nsfw/blowjob" element={<BlowJobNSFW/>}></Route>
        </Routes> 
      </div>
    </Router>
  )
}

export default App

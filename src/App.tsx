import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Awoo from "./components/Awoo";
import Neko from "./components/Neko";
import Waifu from "./components/Waifu";
import Nsfw from "./components/Nsfw";

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
          <Route path="/nsfw" element={<Nsfw/>}></Route>
        </Routes> 
      </div>
    </Router>
  )
}

export default App

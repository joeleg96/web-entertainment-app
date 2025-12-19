import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from "./pages/TVServies";
import Bookmarked from "./pages/Bookmarked";
import Header from "./components/Header";


function App() {
  return (
    <div className='bg-[#10141E] lg:flex min-h-screen'>
      <Header />
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='tv-series' element={<TVSeries />} />
          <Route path ='bookmarked' element={<Bookmarked />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

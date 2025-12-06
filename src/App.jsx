import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from "./pages/TVServies";
import BookMarked from "./pages/BookMarked";
import Header from "./components/Header";

function App() {
  return (
    <div className='bg-[#10141E]'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv-series' element={<TVSeries />} />
          <Route path ='/bookmarked' element={<BookMarked />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

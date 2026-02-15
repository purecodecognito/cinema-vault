import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritePage';
import { useState } from 'react';


function App() {
  const [isLiked, setIsLiked] = useState([])
  
  const handleLike = (movieId) => {
      setIsLiked(prev => (
        prev.includes(movieId)
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
      ))
      console.log(isLiked)
  }

  return (
    <BrowserRouter>
      <Header/>
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage isLiked={isLiked} handleLike={handleLike}/>}/>
          <Route path='/favorites' element={<FavoritesPage isLiked={isLiked}/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

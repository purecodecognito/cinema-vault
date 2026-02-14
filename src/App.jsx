import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritePage';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className='container'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favorites' element={<FavoritesPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

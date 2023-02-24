import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import Signup from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import Favorites from './components/Favorites'
import AnimePage from './components/AnimePage'
import './App.css'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'
import { useState, useEffect } from 'react'

function App () {
  const [animeList, setAnimeList] = useState([
    {
      id: 1,
      title: 'Death Note',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg'
    },
    {
      id: 2,
      title: 'Ghost In The Shell',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/10/82594.jpg'
    },
    {
      id: 3,
      title: 'Gintama',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg'
    }
  ])
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Signup />} />

            <Route path='/login' element={<Login />} />
            {/* <Route path='/home' element={<Home />} /> */}

            <Route path='/favorites' element={<Favorites />} />
            {/* <Route path='/anime/:id' element={<AnimePage initialAnimeList={animeList} />} /> */}
            <Route
              path='/home'
              element={
                <Home animeList={animeList} setAnimeList={setAnimeList} />
              }
            />
            <Route
              path='/anime/:id'
              element={<AnimePage initialAnimeList={animeList} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

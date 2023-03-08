import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import DataBase from './Data/data'

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
import Genres from './components/Genres'
import Profile from './components/Profile'
import InitialPage from './components/InitialPage'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'
import { useState, useEffect } from 'react'

import DarkModeButton from './components/DarkModeButton' // entry
import About from './components/About'

function App () {
  const [animeList, setAnimeList] = useState(DataBase)
  // console.log(animeList)
  const [darkMode, setDarkMode] = useState(false) //entry

  const toggleDarkMode = () => {
    //entry
    setDarkMode(!darkMode)
  }

  // useEffect(() => {
  //   const body = document.body
  //   darkMode
  //     ? body.classList.add('dark-mode')
  //     : body.classList.remove('dark-mode')
  // }, [darkMode])

  return (
    // <div className={darkMode ? 'dark-mode' : ''}>
    //   <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <div className='App'>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<InitialPage />} />

              <Route path='/signup' element={<Signup />} />

              <Route path='/login' element={<Login />} />

              <Route path='/favorites' element={<Favorites />} />

              <Route
                path='/genres'
                element={<Genres animeList={animeList} />}
              />

              <Route path='/profile' element={<Profile />} />

              <Route path='/about' element={<About />} />

              <Route
                path='/home'
                element={
                  <Home animeList={animeList} setAnimeList={setAnimeList} />
                }
              />
              <Route
                path='/anime/:id'
                element={
                  <AnimePage
                    animeList={animeList}
                    initialAnimeList={animeList}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App

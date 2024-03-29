// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import DataBase from './Data/data'

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useNavigate
// } from 'react-router-dom'
// import Signup from './components/SignUp'
// import Login from './components/Login'
// import Home from './components/Home'
// import Favorites from './components/Favorites'
// import AnimePage from './components/AnimePage'
// import './App.css'
// // import { ToastContainer } from 'react-toastify'
// // import 'react-toastify/dist/ReactToastify.css'
// // import axios from 'axios'
// import { useState, useEffect } from 'react'

// import DarkModeButton from './components/DarkModeButton' // entry

// function App () {
//   const [animeList, setAnimeList] = useState(DataBase)
//   // console.log(animeList)
//   const [darkMode, setDarkMode] = useState(false) //entry

//   const toggleDarkMode = () => {
//     //entry
//     setDarkMode(!darkMode)
//   }

//   return (
//     <div className='App'>
//       <Router>
//         <div>
//           <Routes>
//             <Route path='/' element={<Signup />} />

//             <Route path='/login' element={<Login />} />
//             {/* <Route path='/home' element={<Home />} /> */}

//             <Route path='/favorites' element={<Favorites />} />
//             {/* <Route path='/anime/:id' element={<AnimePage initialAnimeList={animeList} />} /> */}
//             <Route
//               path='/home'
//               element={
//                 <Home animeList={animeList} setAnimeList={setAnimeList} />
//               }
//             />
//             <Route
//               path='/anime/:id'
//               element={
//                 <AnimePage animeList={animeList} initialAnimeList={animeList} />
//               }
//             />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   )
// }

// export default App

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
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'
import { useState, useEffect } from 'react'

import DarkModeButton from './components/DarkModeButton' // entry

function App () {
  const [animeList, setAnimeList] = useState(DataBase)
  // console.log(animeList)
  const [darkMode, setDarkMode] = useState(false) //entry

  const toggleDarkMode = () => {
    //entry
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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

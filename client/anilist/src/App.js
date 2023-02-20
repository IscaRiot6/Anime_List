import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
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
import './App.css'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

function App () {
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Signup />} />

            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />

            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

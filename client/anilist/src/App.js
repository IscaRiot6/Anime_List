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
import Anilist from './components/Anilist'
import './App.css'
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
            <Route path='/anilist' element={<Anilist />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

import './App.css'
import {
  BrowseRouter as Router,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App () {
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/signup' element={<h1> this is signup</h1>} />
            <Route path='/login' element={<h1> this is login</h1>} />
            <Route path='/profile' element={<h1> this is profile</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

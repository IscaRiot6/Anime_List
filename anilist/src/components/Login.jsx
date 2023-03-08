import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BgImg2 from '../assets/img4.jpg'
import FavoritesNavBar from './FavoritesNavBar'
import logoImg from '../assets/logo.jpg'
import BgImg from '../assets/img1.jpg'
import Gon from '../assets/gon.jpg'
import Ryuk from '../assets/ryuk-2.jpg'
import RandomImageGenerator from './RandomImageGenerator'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function login () {
    axios
      .post('http://localhost:8000/user/login', {
        username,
        password
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          navigate('/home')
        } else {
          alert(data.message)
        }
      })
  }

  return (
    <section>
      <div className='container'>
      {/* <img className='logoImage' src={logoImg} alt='logo'></img> */}
      <div className='signUp-header'><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr>.</tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr></tr><tr>.</tr><tr></tr></div>
      <div className='register'>
        <div className='col-1'>
          <div className='col-1-container'>
          <h2>Login</h2>
          <p className='test-2'>Login here to join <span><img className='logoImage' src={logoImg} alt='logo'></img></span></p>
          <form id='form-2' className='flex flex-col'>
            <input
              onChange={e => {
                setUsername(e.target.value)
              }}
              type='text'
              placeholder='Username'
            />
            <input
              onChange={e => {
                setPassword(e.target.value)
              }}
              type='password'
              placeholder='Password'
            />
            <button
              type='button'
              className='btn'
              onClick={() => {
                login()
              }}
            >
              Log in
            </button>
            <div>Don't have an account? <a link='true' href='/signup'>Sign-Up here </a> 
            </div>
          </form>
          </div>
        </div>
        {/* <div className='col-2 random-image'> */}
        <div className='random-image'>
          {/* <img src={Ryuk} alt='' /> */}
          <RandomImageGenerator />
        </div>
      </div>
      <footer className='signUp-footer'><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr>.</tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr></tr><tr>.</tr><tr></tr></footer>
      </div>
    </section>
  )
}

export default Login

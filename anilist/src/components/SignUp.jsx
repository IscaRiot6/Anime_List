import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BgImg from '../assets/img1.jpg'
import logoImg from '../assets/logo.jpg'


function Signup () {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  function signup () {
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    axios
      .post('http://localhost:8000/user/signup', {
        email,
        username,
        password
      })
      .then(({ data }) => {
        // console.log(data)
        if (data.message === true) {
          navigate('/login')
        } else {
          alert(data.message)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <section>
      <div className='container'>
      <img className='logoImage' src={logoImg} alt='logo'></img>
      <header className='signUp-header'><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr>.</tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr></tr><tr>.</tr><tr></tr></header>
      <div className='register'>
        <div className='col-1'>
          <h2 id='test'>Sign Up</h2>
          <p className='test-2'>Register to enjoy <span><img className='logoImage' src={logoImg} alt='logo'></img></span></p>
          <form id='form' className='flex flex-col'>
            <input
              onChange={e => {
                setEmail(e.target.value)
              }}
              type='text'
              placeholder='Email'
            />
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
            <input
              onChange={e => {
                setConfirmPassword(e.target.value)
              }}
              type='password'
              placeholder='Confirm Password'
            />
            <button
              type='button'
              className='btn'
              onClick={() => {
                signup()
              }}
            >
              Create Account
            </button>
            <div>Already have an account? <a link='true' href='/login'>Login here </a> 
            </div>
          </form>
        </div>
        <div className='col-2'>
          <img src={BgImg} alt='Kakashi' />
        </div>
        
      </div>
      <footer className='signUp-footer'><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr>.</tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr>.</tr><tr></tr><tr>.</tr><tr></tr></footer>
      </div>
      
    </section>
  )
}

export default Signup

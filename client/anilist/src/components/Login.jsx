import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BgImg2 from '../assets/img4.jpg'

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
      <div className='register'>
        <div className='col-1'>
          <h2>Login</h2>
          <p className='test-2'>Login here to join Ani-list</p>
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
            <div>Don't have an account? <a link='true' href='/'>Sign-Up here </a> 
            </div>
          </form>
        </div>
        <div className='col-2'>
          <img src={BgImg2} alt='' />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Login

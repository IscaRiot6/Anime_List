import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BgImg from '../assets/img1.jpg'

function Signup () {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [confirm, setConfirm] = useState('')
  const navigate = useNavigate()

  function signup () {
    axios
      .post('http://localhost:8000/user/signup', {
        email,
        username,
        password
        // confirm
      })
      .then(({ data }) => {
        if (data.message === true) {
          navigate('/login')
        } else {
          alert(data.message)
        }
      })
  }

  return (
    <section>
      <div className='register'>
        <div className='col-1'>
          <h2 id='test'>Sign Up</h2>
          <p id='test-2'>Register to enjoy your ani-list</p>
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
              type='Password'
              placeholder='Password'
            />
            <input type='password' placeholder='Confirm Password' />
            <button
              className='btn'
              onClick={() => {
                signup()
              }}
            >
              Create Account
            </button>
          </form>
        </div>
        <div className='col-2'>
          <img src={BgImg} alt='Kakashi' />
        </div>
      </div>
    </section>
  )
}

export default Signup

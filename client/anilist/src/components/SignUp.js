import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <div>
      Email:
      <input
        onChange={e => {
          setEmail(e.target.value)
        }}
        type='text'
        placeholder='Please insert your email'
      />
      Username:
      <input
        onChange={e => {
          setUsername(e.target.value)
        }}
        type='text'
        placeholder='Please insert your Username'
      />
      Password
      <input
        onChange={e => {
          setPassword(e.target.value)
        }}
        type='password'
        placeholder='Password'
      />
      {/* Confirm Password
      <input
        onChange={e => {
          setConfirm(e.target.value)
        }}
        type='password'
        placeholder='Confirm Password'
      /> */}
      <button
        onClick={() => {
          signup()
        }}
      >
        Create Account
      </button>
    </div>
  )
}

export default Signup

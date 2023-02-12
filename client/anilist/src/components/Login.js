import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [confirm, setConfirm] = useState('')
  const navigate = useNavigate()

  function login () {
    axios
      .post('http://localhost:8000/user/login', {
        username,
        password
        // confirm
      })
      .then(({ data }) => {
        if (data.token) {
          localStorage.setItem(process.env.TOKEN_KEY, data.token)
          navigate('/anilist')
        } else {
          alert(data.message)
        }
      })
  }

  return (
    <div>
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
          login()
        }}
      >
        Log in
      </button>
    </div>
  )
}

export default Login

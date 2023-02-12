import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Anilist () {
  const [username, setUsername] = useState('')
  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios
        .post('http://localhost:8000/user/verify', {
          token: localStorage.getItem('token')
        })
        .then(({ data }) => {
          console.log(data)
        })
    }
  })

  return (
    <div>
      <h1>Hello {username}</h1>
    </div>
  )
}

export default Anilist

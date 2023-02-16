import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// const initialList = [
//   { id: 1, title: 'Anime 1', imageUrl: '' },
//   { id: 2, title: 'Anime 2', imageUrl: '' },
//   { id: 3, title: 'Anime 3', imageUrl: '' }
// ]

function Favorites () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [user, setUser] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [list, setList] = useState([])
  console.log(user, list)
  function getList () {
    if (localStorage.getItem('token')) {
      axios
        .post('http://localhost:8000/user/verify', {
          token: localStorage.getItem('token')
        })
        .then(({ data }) => {
          setUser(data)
          if (user._id) {
            axios
              .get('http://localhost:8000/anime/' + user._id + '/')
              .then(({ data }) => {
                setList(data.list)
              })
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    getList()
  }, [])

  function addAnime () {
    axios
      .post('http://localhost:8000/anime/', {
        title,
        description,
        genre,
        imageUrl,
        user: user._id
      })
      .then(({ data }) => {
        console.log(data)
        setList(prevState => [...prevState, data])
      })
  }

  return (
    <section id='anime-items'>
      <div>
        <h1>Nothing to see here yet</h1>
        <input
          placeholder='title'
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <input
          placeholder='description'
          onChange={e => {
            setDescription(e.target.value)
          }}
        />
        <input
          placeholder='genre'
          onChange={e => {
            setGenre(e.target.value)
          }}
        />
        <input
          placeholder='imageUrl'
          onChange={e => {
            setImageUrl(e.target.value)
          }}
        />
        {/* <input
        onChange={e => {
          setUser(e.target.value)
        }}
      /> */}
        <button onClick={addAnime}>Add Anime</button>
        {list.map((item, index) => {
          return (
            <div key={item._id || index}>
              <img src={item.imageUrl} alt='' />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>{item.genre}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Favorites

// '63e94af3df49704aa42e6fda'

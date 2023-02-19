import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Pagination from 'pagination-react-hooks';

function Favorites () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [user, setUser] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [list, setList] = useState([])

//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(12);

  function getList (id) {
    axios
    .get('http://localhost:8000/anime/' + id)
    .then((m) => {
      setList(m.data)
      
    })

  }

  useEffect(() => {
        if (localStorage.getItem('token')) {
      axios
        .post('http://localhost:8000/user/verify', {
          token: localStorage.getItem('token')
        })
        .then(({ data }) => {
          var m = data 

          setUser(m)

         if(user._id){
          getList(user._id)
         }
        })
        .catch(error => {
          console.log(error)
        })
    }
   
  }, [user])

  function addAnime () {
    var newAnime = {
      title,
      description,
      genre,
      imageUrl,
      user: user._id
    }
    console.log("jkhajkajkajk",user._id)
    axios
      .post('http://localhost:8000/anime/', newAnime )
      .then(({ data }) => {
        getList(user._id)
      })
  }

  // Pagination
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = list.slice(firstItemIndex, lastItemIndex);

  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section id='anime-items'>
      <div className="form">
        <h1>Your Ani-List</h1>
        <p>Save here your favorite anime</p>
        <form className='form-2'>
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
        <button onClick={addAnime}>Add Anime</button>
        <div className='anime-grid'>
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
        {/* <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={list.length} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
        /> */}
        </form>
      </div> 
    </section>   
  )
}

export default Favorites


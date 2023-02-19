import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FavoritesListPagination from './FavoritesListPagination'
import Button from 'react-bootstrap/Button'

function Favorites () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState('')
  const [user, setUser] = useState({})
  const [imageUrl, setImageUrl] = useState('')
  const [list, setList] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const [searchValue, setSearchValue] = useState('')

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
    // console.log("jkhajkajkajk",user._id)
    axios
      .post('http://localhost:8000/anime/', newAnime )
      .then(({ data }) => {
        getList(user._id)
      })
  }

  function deleteAnime(id) {
    axios
      .delete(`http://localhost:8000/anime/${id}`)
      .then((res) => {
        getList(user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateAnime(id, title, description, genre, imageUrl) {
    const updatedAnime = {
      title,
      description,
      genre,
      imageUrl,
    };
    axios
      .put(`http://localhost:8000/anime/${id}`, updatedAnime)
      .then((res) => {
        getList(user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const totalPages = Math.ceil(list.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredItems = searchValue.length === 0
    ? list
    : list.filter(item => item.title.toLowerCase(). includes(searchValue.toLowerCase()))
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }



  return (
    <section className='anime-items'>
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
      <div className='search-container'>
      <input
        id='search-anime'
        placeholder='Search anime'
        value={searchValue}
        onChange={e => {
          setSearchValue(e.target.value)
        }}
        />
      </div>

      <div className='anime-table'>
        <table>
          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id || index}>
                  <td><img src={item.imageUrl} alt='' /></td>
                  <Button               
                  id='delete-button'
                  className='bi-trash">'
                  onClick={() => deleteAnime(item._id)}> Remove
                  </Button>
                  <td>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.genre}</p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
    </form>
    <div className='pagination-container'>
      <ul>
        <li>
          <FavoritesListPagination
            className="pagination-container"
            itemsPerPage={itemsPerPage}
            list={list}
            paginate={paginate}
            currentPage={currentPage}
          />
        </li>
      </ul>
    </div>
  </div> 
</section>
   
  )
  
}

export default Favorites


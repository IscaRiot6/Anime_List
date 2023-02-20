import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FavoritesListPagination from './FavoritesListPagination'
import Button from 'react-bootstrap/Button'
// import { useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import FavoritesNavBar from './FavoritesNavBar'

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

  const [selectedItem, setSelectedItem] = useState(null)
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false)

  const [successMessage, setSuccessMessage] = useState(null);

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
    
    axios
      .post('http://localhost:8000/anime/', newAnime )
      .then(({ data }) => {
        getList(user._id)
        setSuccessMessage(`Anime "${title}" has been added successfully in your list.`);
        // toast.success('Your anime has been added successfully!'); 
        console.log("Success message set!");
      })
      .catch(error => {
        console.log(error)
        setSuccessMessage('')
      })
  }

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  }, [successMessage]);



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

  function updateHandler(id, title, description, genre, imageUrl) {
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
        setIsUpdateFormVisible(false); // Set isUpdateFormVisible to false
        setSelectedItem(null);

        // updateFormRef.current.scrollIntoView({ behavior: 'smooth' });
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

  // function handleUpdateClick(event) {
  //   const animeId = event.target.getAttribute('data-id');
  //   window.location.href = `update-anime.html?id=${animeId}`
  // }

  // const handleRedirect = (animeId) => {
  //   window.location.href = `update-anime.html?id=${animeId}`
  // }
  // const updateButtons = document.querySelectorAll('.update-button');

  // updateButtons.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     const animeId = button.id.split('-')[1]
  //     window.location.href = `update-anime.html?id=${animeId}`;
  //     window.scrollTo(0, document.body.scrollHeight)
  //   })
  // })
  // const updateFormRef = useRef(null);

  // useEffect(() => {
  //   if (isUpdateFormVisible && updateFormRef.current) {
  //     updateFormRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [isUpdateFormVisible]);

  


  return (
    <section>
      
    

  <section className='anime-items'>
    {successMessage && (
      <div className='success-message'>{successMessage}</div>
    )}
    <div className="form">
    
      <h1>Your Ani-List</h1>
      <nav>
        <FavoritesNavBar>
          
        </FavoritesNavBar>
      </nav>
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
    
      <main className='anime-table'>
        <table className='basic-table'>
          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={item._id || index}>
                  <td><img src={item.imageUrl} alt='' /></td>
                  <td>
                  
                  <div id='delete-button-div'>
                    
                    <Button               
                    id='delete-button'
                    className='bi-trash">'
                    onClick={() => deleteAnime(item._id)}> Remove
                    </Button>
                    
                  </div>
                  
                  
                  <div id='update-button-div'>
                    <Button
                    id='update-button'
                    className='bi-pencil-square'
                    onClick={() => {
                      setSelectedItem(item) // set the selected anime's id
                      // updateFormRef.current.scrollIntoView({ behavior: 'smooth' });
                      setIsUpdateFormVisible(true)
                      }}>
                      Up-date
                    </Button>
                  </div>
                  
                  </td>
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
      </main>
      {isUpdateFormVisible && selectedItem && (
        <div className='update-form'>
          <h2>Update Anime</h2>
          <input
          defaultValue={selectedItem.title}
          onChange={e => {
            setSelectedItem({...selectedItem, title: e.target.value})
          }}
          />
          <input
          defaultValue={selectedItem.description}
          onChange={e => {
            setSelectedItem({...selectedItem, description: e.target.value})
          }}
          />
          <input
          defaultValue={selectedItem.genre}
          onChange={e => {
            setSelectedItem({...selectedItem, genre: e.target.value})
          }}
          />
          <input
          defaultValue={selectedItem.imageUrl}
          onChange={e => {
            setSelectedItem({...selectedItem, imageUrl: e.target.value})
          }}
          />
          <Button
            onClick={() => {
              updateHandler(
                selectedItem._id,
                selectedItem.title,
                selectedItem.description,
                selectedItem.genre,
                selectedItem.imageUrl
              )
              setIsUpdateFormVisible(false)
              setSelectedItem(null)
              // handleRedirect(selectedItem._id)
            }}>
              Update
            </Button>
            <Button
              onClick={() => {
                setIsUpdateFormVisible(false)
                setSelectedItem(null)
                // updateFormRef.current.scrollIntoView({ behavior: 'smooth' });
              }}>
                Cancel
              </Button>
        </div>
      )}
      
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

</section>



   
  )
  
}

export default Favorites


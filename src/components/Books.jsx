import axios from 'axios'
import { useEffect, useState } from 'react'
import '../assets/style/books.css'
import { useLocation, useNavigate } from 'react-router'

const Books = () => {
    let location = useLocation()
  let path = location.pathname
  let bool = path.startsWith('/adminportal')


    let [books,setBooks] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/books')
    .then((resp) => {
        // console.log(resp)
        setBooks(resp.data)
    })
    },[books])
    // console.log(books)
    let navigate = useNavigate()
    let readBook = (id) =>{
        navigate(`/adminportal/readbook/${id}`)
    }

    function handleDelete(id) {
        fetch(`http://localhost:4000/books/${id}`, { 
           // Assuming 'id' is the identifier for the item to delete
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            alert("Item deleted successfully");
            // Optionally, update the state to remove the deleted item from the UI
            // Example:
            setBooks(books.filter(item => item.id !== id));
          } else {
            alert("Failed to delete the item");
          }
        })
        .catch(error => console.error('Error:', error));
      }
  return (
    <>
        <div className="books">
            {
                books.map((elem) =>{
                    let {id,title,isbn,pageCount,status,authors,categories,thumbnailUrl} = elem
                    return(
                        <>
                    <div className="cards">
                        <div className="image">
                            <div className="img">
                                <img src={thumbnailUrl} alt="" />
                            </div>
                            <div className="title">{title}</div>
                        </div>
                        <div className="info">
                            <table>
                                <tr>
                                    <td>id</td>
                                    <td>{id}</td>
                                </tr>
                                <tr>
                                    <td>isbn</td>
                                    <td>{isbn}</td>
                                </tr>
                                <tr>
                                    <td>categories</td>
                                    <td>{categories}</td>
                                </tr>
                                <tr>
                                    <td>status</td>
                                    <td>{status}</td>
                                </tr>
                                <tr>
                                    <td>pageCount</td>
                                    <td>{pageCount}</td>
                                </tr>
                                <tr>
                                    <td>authors</td>
                                    <td>{authors}</td>
                                </tr>
                            </table>
                            <div className="btns">
                                {
                                    bool ?
                                        <>
                                        <button id='read' onClick={()=>readBook(id)}>Read Book</button>
                                        <button id='delete'onClick={() => handleDelete(id)}>Delete Book</button>
                                        </>
                                    :
                                    <button id='read' onClick={()=>readBook(id)}>Read Book</button>
                                // <button id='delete'onClick={() => handleDelete(id)}>Delete Book</button>
                                }
                                
                            </div>
                        </div>
                    </div>

                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Books
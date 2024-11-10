import { useRef } from "react"
import '../../assets/style/adddata.css'

const AddBooks = () => {

  let addbookForm = useRef()

  let addBooks = (e) =>{
    e.preventDefault()

    console.log(addbookForm)

    let newBook = {
      id : addbookForm.current[0].value,
      title : addbookForm.current[1].value,
      isbn : addbookForm.current[2].value,
      pageCount : addbookForm.current[3].value,
      publishedDate : addbookForm.current[4].value,
      shortDescription : addbookForm.current[5].value,
      longDescription : addbookForm.current[6].value,
      status : addbookForm.current[7].value,
      authors : addbookForm.current[8].value,
      categories : addbookForm.current[9].value
    }

    fetch(`http://localhost:4000/books`,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBook)
    })

  }

  return (
    <>

        <div className="addbook">
          <form action="" onSubmit={addBooks} ref={addbookForm} >
          <input type="text" placeholder="id"/>
          <input type="text" placeholder="title"/>
          <input type="text" placeholder="isbn"/>
          <input type="text" placeholder="pagecount"/>
          <input type="text" placeholder="published date"/>
          <input type="text" placeholder="short description"/>
          <input type="text" placeholder="long description"/>
          <input type="text" placeholder="status"/>
          <input type="text" placeholder="authors"/>
          <input type="text" placeholder="category"/>
          <button type="submit">submit</button>
            </form>
          
        </div>

    </>
  )
}

export default AddBooks
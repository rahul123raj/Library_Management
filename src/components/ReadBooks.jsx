import { useEffect, useState } from "react"
import { useParams } from "react-router"
import '../assets/style/readbook.css'

const ReadBooks = () => {
    let params = useParams()
    let bookId = params.id

    let [book , setBook] = useState({})
    useEffect(() => {
        let fetchapi = async () =>{
    
            let singlebookData = await fetch(`http://localhost:4000/books/${bookId}`)
            let resp = await singlebookData.json()
            setBook(resp)
        }

        fetchapi()
    },[book])

    let {id,title,isbn,pageCount,status,authors,categories,thumbnailUrl,longDescription,shortDescription}  = book



  return (
    <>
        <div className="read-card">
            <div className="image">
                <img src={thumbnailUrl} alt="" />
                <p>{title}</p>
            </div>
            <div className="read-info">
                <h3>{title}</h3>
                <p>{shortDescription}</p>
                <h1>long des</h1>
                <p>{longDescription}</p>

                <div className="infos">
                    <p>{status}</p>
                    <p>{authors}</p>
                    <p>{categories}</p>
                    {/* <p>{$date}</p>  */}
                </div>
            </div>
        </div>
    </>
  )
}

export default ReadBooks
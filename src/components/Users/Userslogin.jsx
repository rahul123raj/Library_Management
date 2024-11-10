import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"


const Userslogin = () => {
 let navigate =  useNavigate()

  let emailField = useRef()
  let passField = useRef()

  let [users, setUsers] = useState([])

  useEffect(()=>{
    let fetchUserApi = async () =>{
      await axios
      .get('http://localhost:4000/users')
      .then(resp => setUsers(resp.data))
    }
    fetchUserApi()

  },[users])

  // console.log(users)

  //! collecting all users address from users API and store in array

  let allUserEmail = users.map(elem => elem.email)
  // console.log(allUserEmail)

  //! collecting values from input
  let emailinput = emailField.current
  let pwdinput = passField.current

  // console.log(emailinput,pwdinput)

  let handlesubmit = (e) => {
    e.preventDefault()

    // console.log(emailinput.value , pwdinput.value)
    let email = allUserEmail.includes(emailinput.value)
    let password = (pwdinput.value === 'user123')
    console.log(email , password)

    let err = 'border : solid 1px red'
    if(email && password){
      navigate('/usersportal')
    }else{
      // alert('credentials are wrong')
      if(!email){
      emailinput.style.cssText = err;
      }else if(!password){
      pwdinput.style.cssText = err;
      }
    }
  }

  return (
    <>
    <div className="form">
                <form action="" onSubmit={handlesubmit}>
                    <input ref={emailField} type="text" placeholder='enter users email' />
                    <input ref={passField} type="text" placeholder='enter  users password'/>
                    <button>users login</button>
                </form>
            </div>
    </>
  )
}

export default Userslogin
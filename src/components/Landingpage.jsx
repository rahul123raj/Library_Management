import { useRef, useState } from 'react'
import Adminlogin from './Admin/Adminlogin'
import Userslogin from './Users/Userslogin'

const Landingpage = () => {
    let [bool,setBool] = useState(true)
    let btn = useRef()
    
    let togglebtn = () =>{
        setBool(!bool)

        bool ? btn.current.innerText='users login' : btn.current.innerText = 'admin login'
    }



  return (
    <>
    <div className="main">
    <div className="container">
        <div className="btns-container" onClick={togglebtn} >
            {/* <p id='admin'>admin login</p>
            <p id='users'>users login</p> */}
            
        <button onClick={togglebtn} className={bool ? 'admin-login' : 'users-login'} ref={btn}>admin login</button>

        </div>
        
        {bool ? <p>admin login</p> : <p>users login</p>}
        <div className="form-container">
            
            {bool ? <Adminlogin /> : <Userslogin />}

        </div>
    </div>
    </div>

    </>
  )
}

export default Landingpage
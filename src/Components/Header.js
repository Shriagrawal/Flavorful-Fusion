import { useContext, useState } from 'react'
import {LOGO_URL} from '../Utils/constants.js'
import {Link} from "react-router-dom"
import Usercontext from "../Utils/UserContext.js"
import {useSelector} from 'react-redux'
const Header = () => {
  const[flag,setflag] = useState(false)

  const userdata = useContext(Usercontext)
  const cart = useSelector((store) => store.cart.items)
    return (
        <div className="flex justify-between bg-slate-100 shadow-lg">
            <div >
                <img className="w-40" alt='' src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
              <ul className="flex font-bold">
                <li className='px-2 text-lg'><Link to='http://localhost:3000/'>Home</Link></li>
                <li className='px-2 text-lg'><Link to='http://localhost:3000/cart'>Cart({cart.length})</Link></li>
                <li className='px-2 text-lg'><Link to='http://localhost:3000/contact_us'>Contact Us</Link></li>
                <li className='px-2 text-lg'><Link to='http://localhost:3000/about_us'>About us</Link></li>
                <button className="mx-10 bg-blue-200 px-2 rounded-lg text-lg" onClick={()=>{
                  setflag(!flag);
                  }}>{flag ? "LOGOUT" : "LOGIN"}</button>
                <li className='px-2 text-lg'>{userdata.loggedinuser}</li>
              </ul>
            </div>
        </div>
    )
}
export default Header

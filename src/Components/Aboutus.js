import React, { useContext } from 'react'
import User from './User'
import Userclass from './Userclass'
import  Usercontext from '../Utils/UserContext'
export default function Aboutus() {
    const userdata = useContext(Usercontext)
  return (
    <div>
      <User/>
      <Userclass name={userdata.loggedinuser}/>
    </div>
  )
}

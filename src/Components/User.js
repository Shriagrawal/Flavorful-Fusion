import React, { useState } from 'react'

 const User = () => {
  const[count] = useState(1);
  return (
    <div>
    <h1>HI I AM A USER</h1>
    <p>Name:Shriti Agrawal</p>
    <p>count:{count}</p>
    </div>
  )
}
export default User;
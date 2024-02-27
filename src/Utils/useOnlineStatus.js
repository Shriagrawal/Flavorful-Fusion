import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const[onlinestatus,setonlinestatus] = useState(true)
   useEffect(()=>{
    window.addEventListener("online",()=>{
        setonlinestatus(true);
        console.log(true);
    })

    window.addEventListener("offline",()=>{
        setonlinestatus(false);
        console.log(false);
    })
   },[])
   return onlinestatus;
}

export default useOnlineStatus;
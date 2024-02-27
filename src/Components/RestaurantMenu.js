import React,{useEffect, useState} from 'react'
import { json, useParams } from 'react-router-dom'
import {Res_URL} from '../Utils/constants'
import RestaurantCategory from './RestaurantCategory'
const RestaurantMenu = () => {
  const[resdata,setresdata] = useState([])
  const[Recommendedlist,setRecommendedlist] = useState([])
    useEffect(()=>{
      fetchdata();
    },[])

    const {resID} = useParams();

    const fetchdata = async () =>{
      const data = await fetch(Res_URL + resID);
      const jsondata = await data.json();
      setresdata(jsondata);
      setRecommendedlist(jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    const categories = resdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    if(resdata.length === 0|| Recommendedlist  === 0)
    {
      return(
        <h1>LOADING</h1>
      )
    }
  return (
    <div>
       
        <h2 className='font-bold text-xl'>{resdata?.data?.cards[0]?.card?.card?.text}</h2>
        {categories.map((cat,index) =>  <RestaurantCategory key={index} data={cat?.card?.card}/>
        )} 
        </div>
  )
}
export default RestaurantMenu;
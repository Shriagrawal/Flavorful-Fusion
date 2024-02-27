import RestaurantCard , {PromotedCard} from "./RestaurantCard"
import {useState,useEffect, useContext} from 'react'
import {Link} from "react-router-dom";
import useOnlineStatus from '../Utils/useOnlineStatus'
import Usercontext from '../Utils/UserContext'
const Body = () =>{
    const[listofrescards,setlistofrescards] = useState([]);
    const[flag,setflag] = useState(false);
    const[inputvalue,setinputvalue] = useState("");
    const[originallist,setoriginallist] = useState([]);

    const PromotedRestaurantCard  = PromotedCard(RestaurantCard);
    const userdata = useContext(Usercontext)
    // console.log(userdata);
    useEffect( ()=>{
        fetchdata();
    },[])


    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const new_data = await data.json();
        setlistofrescards(new_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setoriginallist(new_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const online_status = useOnlineStatus()
    if(online_status === false)
    {
      return <h1>YOU ARE OFFLINE ! Check your internet connection</h1>
    }

    if (!listofrescards || listofrescards.length === 0) {
        return <h1>Loading</h1>;
    }
    
    return(
        <div>
            <div className="flex m-4 p-4">
             <div className="flex border-2 border-black rounded-lg"> 
            <input value={inputvalue} onChange={(e)=>{
                setinputvalue(e.target.value)
                setlistofrescards(originallist);
                }}></input>
                </div> 
                <div className="px-2 mx-2 bg-blue-200 hover:bg-blue-300 rounded-lg text-lg">
            <button onClick={()=>
            {   const filtered_data = listofrescards.filter(res => res.info.name.toLowerCase().includes(inputvalue.toLowerCase()))
                setlistofrescards(filtered_data);
                console.log(listofrescards);
            }}>SEARCH</button>
              </div>
            <div className="mx-8 px-2 bg-blue-200 hover:bg-blue-300 rounded-lg text-lg">
                <button onClick={()=>{
                    if (flag){
                        setlistofrescards(originallist);
                        setflag(!flag);
                    }
                    else
                    {
                         const filteredlist = listofrescards.filter(res => res.info.avgRating > 4.3);
                         setlistofrescards(filteredlist);
                         setflag(!flag);
                    }
                     }}>{flag? 'show all' : 'Top rated'}</button>
            </div>

            <label className="font-bold">User Name</label>
            <input className="border border-black" value={userdata.loggedinuser} onChange={(e) => userdata.setusername(e.target.value)} ></input>

            </div>
            <div className="flex flex-wrap mx-[12.5rem]">
            {
                listofrescards.map(each_res => <Link key={each_res.info.id} to={"/restaurants/"+each_res.info.id} >
                    {/* {console.log(each_res.loyaltyDiscoverPresentationInfo)} */}
                    {/* hoc */}
                   {each_res.info.loyaltyDiscoverPresentationInfo === "FREE DELIVERY" ? <PromotedRestaurantCard resdata={each_res}/> : <RestaurantCard  resdata={each_res}/> } 
                    </Link>)
            }
            </div>
        </div>
    )
}

export default Body
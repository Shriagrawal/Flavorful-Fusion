import { useState } from "react";
import {CDN_URl} from '../Utils/constants'
import {addItem} from '../Utils/cartSlice' 
import { useDispatch } from "react-redux";
const RestaurantCategory = (props) => {
    const[showitems,setshowitems] = useState(false);
    const[dropbutton,setdropbutton] = useState("⬇️")
    const Catdata = props;
    const Catlist = props.data.itemCards;
    const toggle = () =>{
        setshowitems(!showitems);
        if(dropbutton === "⬇️")
        {
            setdropbutton("⬆️")
        }
        else{
            setdropbutton("⬇️")
        }
    }
    const dipatch = useDispatch()
    const additem  = (item) =>{
       //dispatch an action 
        dipatch(addItem(item))
    }

   return(
    <div className="">
    <div className="flex flex-col w-6/12 bg-blue-50 mx-auto shadow-lg">
     <div className="flex flex-row h-10 justify-between">
     <h1 className="font-extrabold text-xl ">{Catdata.data.title}({Catdata.data.itemCards.length})</h1>
    <button className="ml-6" onClick={toggle}>{dropbutton}</button>
     </div>

    { 
      showitems && Catlist.map((cat)=>
          <div key={cat.card.id} className="flex flex-row mx-auto py-4 px-8 border-b-2 border-slate-400 text-left">

           <div className="mr-40">
           <p className="text-lg font-bold">{cat?.card?.info?.name}</p>
           <p>₹{cat.card.info.price/100}</p>
           <p className="font-thin flex flex-wrap text-xs">{cat?.card?.info?.description}</p>
           <br></br>
            </div>
            <div className="w-3/12">
                <div className="absolute">
            <button className="bg-green-200 rounded-lg  font-bold" onClick={() => {additem(cat)}}>ADD+</button>
            </div>
            <img className="rounded-lg m-auto h-[150px] w-[200px]" src={CDN_URl + cat?.card?.info?.imageId}></img>
            </div>

            </div>
        )
    }
    </div>
    <br></br>
    </div>
   )
}

export default RestaurantCategory;
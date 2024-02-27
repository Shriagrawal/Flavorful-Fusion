import {CDN_URl} from '../Utils/constants.js';

const RestaurantCard = ({resdata}) =>{

    const {cloudinaryImageId,name,cuisines,avgRating} = resdata?.info 
    return(
         <div className="m-2 l-[400px] w-[260px] hover:bg-slate-300 flex flex-col items-center justify-center">
        <img className=" rounded-lg h-60 w-60 shadow-2xl" alt='Somephot' src={CDN_URl + cloudinaryImageId}></img>
        <h2 className="font-bold">{name}</h2>
        <p className="px-2">{cuisines.join(", ")}</p>
        <p>⭐{avgRating}</p>
        </div>
    )
    }

export const PromotedCard = (RestaurantCard) => {
  return (props) => {
     return(
        <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
        </>
     )
  }
}

export default RestaurantCard; 
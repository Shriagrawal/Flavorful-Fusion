import {useSelector} from 'react-redux'
import { clearCart ,removeItem} from '../Utils/cartSlice'
import { useDispatch } from "react-redux";

const Cart = () =>{
    const cartdata = useSelector((store) => store.cart.items)
    console.log(cartdata)
    const dispatch = useDispatch()
    const removeitemfromcart = (Id) => {
      dispatch(removeItem(Id))
    }
    const cleancart = () => {
        dispatch(clearCart())
    }
    return(
        <div className='flex flex-col text-center'>
        <h1 className='flex text-center font-bold'>Order summary</h1>
        <div className='mx-auto my-[50px]'>
        {   cartdata.length === 0 ? <p>your cart is empty!</p> :
            cartdata.map((item) => 
                <div key={item?.card?.info?.id} className='py-2'>
                {item?.card?.info?.name}
                <button className='border border-black px-2 bg-green-200 rounded-lg ml-4' onClick={() => removeitemfromcart(item?.card?.info?.id)}>-</button>
                </div>       
            )
        }
        </div>
        <div>
        <button className='bg-green-200 rounded-lg font-bold px-2' onClick={cleancart}> {cartdata.length === 0 ? "": "Clear cart"}</button>
        </div>
        </div>
    )
}
export default Cart
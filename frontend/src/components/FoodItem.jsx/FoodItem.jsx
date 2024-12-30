import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext';

export const FoodItem = ({ id, name, price, description, image }) => {
  //const [itemCount,setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {(!cartItems[id])
          ? <img className='add' src={assets.add_icon_white} onClick={()=> addToCart(id)} alt="" />
          : <div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={()=> removeFromCart(id)} alt="" />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} onClick={()=> addToCart(id)} alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

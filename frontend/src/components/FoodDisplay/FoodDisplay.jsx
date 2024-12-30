import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { FoodItem } from '../FoodItem.jsx/FoodItem';
import './FoodDisplay.css'
export const FoodDisplay = ({category}) => {
    const food_list = useContext(StoreContext);
    //console.log(category)
    //console.log("food_list",food_list.food_list)

  return (
    <div className='food-display'>
        <h2>Top Dishes near you.</h2>
        <div className='food-display-list'>
            {food_list.food_list.map((item,index)=>{
              if(category==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}

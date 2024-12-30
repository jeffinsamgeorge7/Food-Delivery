import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets'
export const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Hello guys you can find taste food coletion here , order now!. New special seasonal offer time. Buy 2 get 1 free offer. The offer end soon..... </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category=== item.menu_name?"active": ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name} </p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

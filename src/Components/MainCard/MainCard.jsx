import React from 'react';
import './MainCard.css'
import {NavLink} from "react-router-dom";


const MainCard = (props) => {
    let colorClass=props.isTrain?'card blue':'card red'
  return (
     <NavLink to={props.href} className={colorClass}>
         <img className='avatar'alt="Remy Sharp" src={props.url}/>
         {props.title}
     </NavLink>
  )
}
export default MainCard;

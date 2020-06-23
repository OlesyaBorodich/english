import React from 'react';
import './Card.css'
import {NavLink} from "react-router-dom";


const Card = (props) => {
    let colorClass=props.isTrain?'blue':'red'
  return (
     <NavLink to={props.href} className="card">
         <img className='avatar'alt="Remy Sharp" src={props.url}/>
         {props.title}
     </NavLink>
  )
}
export default Card;

import React from 'react';
import './WordCard.css'
import {NavLink} from "react-router-dom";


const WordCard = (props) => {
    let colorClass=props.isTrain?'card blue':'card red'
  return (
     <NavLink to={props.href} className={colorClass}>
         <img className='avatar'alt="Word" src={props.url}/>
         {props.title}
     </NavLink>
  )
}
export default WordCard;

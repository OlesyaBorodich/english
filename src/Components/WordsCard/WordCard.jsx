import React from 'react';
import './WordCard.css'


const WordCard = (props) => {
    let colorClass=props.isTrain?'card blue':'card red'
  return (

      <div className='card-container'>
     <div to={props.href} className='card'>
         <img  src={props.url}/>
         {props.title}
         <div className='rotate'></div>
     </div>
         </div>

  )
}
export default WordCard;

import React from 'react';
import '../App.css'

const Button = (props) => {
    let changeButton=()=>{
        props.changeButtonMood()
    }

  return (
      <div>
          <button onClick={changeButton} >{props.buttonMood}</button>
      </div>
  )
}

export default Button;

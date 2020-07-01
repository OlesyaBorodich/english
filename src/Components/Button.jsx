import React from 'react';
import '../App.css'

const Button = (props) => {
    let changeButton=()=>{
        props.changeButtonMood()
    }
  return (
      <div>
          <label className='switch' onClick={changeButton} >
              <input type='checkbox' className='switch-input' >

              </input>
              <span className='switch-label' data-on='Train' data-off='Play'>

              </span>
              <span className='switch-handle'>
              </span>
          </label>
      </div>
  )
}

export default Button;

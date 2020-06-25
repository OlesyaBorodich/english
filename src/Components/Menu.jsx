import React from 'react';
import '../App.css'
import {NavLink} from "react-router-dom";

const Menu = (props) => {
  return (
      <div>
        <div className="App">
          <input type="checkbox" id="hmt" className="hidden-menu-ticker"/>
            <label className="btn-menu" htmlFor="hmt">
              <span className="first"></span>
              <span className="second"></span>
              <span className="third"></span>
            </label>
          <div className='hidden-menu'>
              <div className='item'><NavLink to='/' activeClassName='active'>Main Page</NavLink></div>
              <div className='item'><NavLink to='/countries' activeClassName='active'>Countries</NavLink></div>
              <div className='item'><NavLink to='/clothes' activeClassName='active'>Clothes</NavLink></div>
              <div className='item'><NavLink to='/food' activeClassName='active'>Food</NavLink></div>
              <div className='item'><NavLink to='/emotions' activeClassName='active'>Emotions</NavLink></div>
              <div className='item'><NavLink to='/animals' activeClassName='active'>Animals</NavLink></div>
              <div className='item'><NavLink to='/sport' activeClassName='active'>Sport</NavLink></div>
              <div className='item'><NavLink to='/weather' activeClassName='active'>Weather</NavLink></div>
              <div className='item'><NavLink to='/card' activeClassName='active'>Card</NavLink></div>

              <div className='item'><NavLink to='/entertainment' activeClassName='active'>Entertainment</NavLink></div>
          </div>
        </div>
      </div>
  )
}

export default Menu;

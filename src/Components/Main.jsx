import React from 'react';
import '../App.css'
import Card from "./Card/Card";


const Main = (props) => {
    let mainCards=props.cards.map(c=><Card title={c.title} url={c.url} href={c.href}/>);
  return (
      <div className='all-cards'>
          {mainCards}
      </div>
  )
}

export default Main;

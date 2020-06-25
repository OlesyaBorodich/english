import React from 'react';
import '../App.css'
import {NavLink} from "react-router-dom";
import MainCard from "./MainCard/MainCard";

const WordCards = (props) => {
    let wordCards=props.cards.map(c=><WordCard title={c.title}
                                               url={c.url}
                                               href={c.href}
                                               isTrain={props.isTrain}/>);
    return (
        <div className='all-cards'>

        </div>
    )
}

export default WordCards;

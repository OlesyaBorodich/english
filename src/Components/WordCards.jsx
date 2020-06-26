import React from 'react';
import '../App.css'
import   './WordsCard/WordCard.css'
import WordCard from "./WordsCard/WordCard";


const WordCards = (props) => {
    let wordCards=props.cards.map(c=><WordCard title={c.title}
                                               url={c.url}
                                               isTrain={props.isTrain}/>);
    return (
        <div className='all-cards'>
            {wordCards}
        </div>
    )
}

export default WordCards;

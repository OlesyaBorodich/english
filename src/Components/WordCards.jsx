import React from 'react';
import '../App.css'
import   './WordsCard/WordCard.css'
import WordCard from "./WordsCard/WordCard";
import StartGame from "./StartGame";


const WordCards = (props) => {
    let wordCards=props.cards.map(c=><WordCard word={c.word}
                                               url={c.url}
                                               isTrain={props.isTrain}/>);
    return (
        <div className='all-cards'>
            {wordCards}
            {props.isTrain?null:<StartGame/>}
        </div>
    )
}

export default WordCards;

import React from 'react';
import '../App.css'
import   './WordsCard/WordCard.css'
import StartGame from "./StartGame";
import WordCard from "./WordsCard/WordCard";



const WordCards = (props) => {
    let wordCards=props.cards.map(c=><WordCard word={c.word}
                                               translate={c.translate}
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

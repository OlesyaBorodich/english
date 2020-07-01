import React from 'react';
import '../App.css'
import './WordsCard/WordCard.css'
import StartGame from "./StartGame";
import WordCard from "./WordsCard/WordCard";
import Star from "./Star";
import End from "./End";


const WordCards = (props) => {
    let allStars = props.arrayStars.map(s => <Star/>);

    let wordCards = props.cards.map(c => <WordCard word={c.word}
                                                   translate={c.translate}
                                                   url={c.url}
                                                   audioId={c.audioId}
                                                   audioArr={props.audioArr}
                                                   isTrain={props.isTrain}
                                                   checkAudio={props.checkAudio}/>);
    return (
        <div>
            {props.end ? <End/> : <div className='all-cards'>
                        {wordCards}
                        {props.isTrain ? null : <div className='starts'>{allStars}<StartGame audioArr={props.audioArr}
                                                           playRandom={props.playRandom}
                                                           setCurrentAudio={props.setCurrentAudio}
                                                           currentAudioId={props.currentAudioId}/>
                            </div>}
                    </div>}</div>
    )
}

export default WordCards;

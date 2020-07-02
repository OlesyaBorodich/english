import React from 'react';
import '../App.css'
import './WordsCard/WordCard.css'
import StartGame from "./StartGame";
import WordCard from "./WordsCard/WordCard";
import Star from "./Star";
import End from "./End";


const WordCards = (props) => {
    let allStars = props.arrayStars.map((s,index) => <Star el={props.arrayStars[index]}/>);
    let wordCards = props.cards.map(c => <WordCard word={c.word}
                                                   translate={c.translate}
                                                   url={c.url}
                                                   audioId={c.audioId}
                                                   audioArr={props.audioArr}
                                                   isTrain={props.isTrain}
                                                   checkAudio={props.checkAudio}
                                                   audioArr={props.audioArr}/>);
    return (
        <div>
            {props.isStart?<div className='starts'>{allStars}</div>:null}
            {props.end ? <End count={props.count}/> : <div className='all-cards'>
                        {wordCards}
                        {props.isTrain ? null : <StartGame audioArr={props.audioArr}
                                                           playRandom={props.playRandom}
                                                           isStart={props.isStart}
                                                           changeStart={props.changeStart}
                                                           setCurrentAudio={props.setCurrentAudio}
                                                           currentAudioId={props.currentAudioId}/>
                            }
                    </div>}</div>
    )
}

export default WordCards;

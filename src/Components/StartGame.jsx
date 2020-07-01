import React from 'react';
import './StartGame.css'

class Button extends React.Component {
    state = {
        isRepeat: true,
        number: null
    }
    startGame = () => {
        this.setState({
            isRepeat: false
        })
        this.playRandom();
    }
    playRandom = () => {
       this.props.playRandom();
    }
    repeatAgain=()=>{
        new Audio(this.props.audioArr[this.props.currentAudioId].audio).play();
    }

    render() {
        return (
            <div>
                {this.state.isRepeat ?
                    <div className='buttonContainer'>
                        <button className='button1' onClick={this.startGame}>Start game</button>
                    </div>
                    :
                    <div className='buttonContainer'>
                        <button className='repeat' onClick={this.repeatAgain}><span className='buttonImg'></span></button>
                    </div>}
            </div>
        )
    }
}

export default Button;

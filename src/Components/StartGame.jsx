import React from 'react';
import './StartGame.css'

class Button extends React.Component {
    state = {
        isRepeat: true,
        number: 1
    }
    startGame = () => {
        this.setState({
            isRepeat: false
        })
        this.playRandom();
    }
    playRandom = () => {
        let numberR = Math.floor(Math.random() * Math.floor(8));
        this.setState({
            number: numberR
        })
        const audioId = this.props.audioArr[this.state.number].id;
        new Audio(this.props.audioArr[this.state.number].audio).play();
        this.props.setCurrentAudio(audioId)
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
                        <button className='repeat'><span className='buttonImg'></span></button>
                    </div>}
            </div>
        )
    }
}

export default Button;

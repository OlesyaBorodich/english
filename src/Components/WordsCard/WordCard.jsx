import React from 'react';
import './WordCard.css'
import WordCardStatic from "./WordCardStatic";

class WordCard extends React.Component {
    state = {
        isOverturn: true
    }
    changeIsOverturn=()=>{
        console.log('changeIsOverturn')
        this.setState({
            isOverturn: !this.state.isOverturn
        })
    }

    handleMouseOut = () => {
        this.changeIsOverturn()
    }
    onSound=()=>{
        if(this.props.isTrain) {
            new Audio(this.props.audioArr.find(a => a.id === this.props.audioId).audio).play()
        }
    }
    render() {
        return (
            <div className={'flip-container'} >
                <div className={'flipper'} >
                    {this.state.isOverturn ?
                      <div className="front " onClick={this.onSound} >
                            <WordCardStatic  word={this.props.word}
                                            translate={this.props.translate}
                                            url={this.props.url}
                                            audioId={this.props.audioId}
                                            isTrain={this.props.isTrain}
                                            isOverturn={this.state.isOverturn}
                                             audioArr={this.props.audioArr}
                                            changeIsOverturn={this.changeIsOverturn}
                                             checkAudio={this.props.checkAudio}
                            />
                      </div>:
                      <div className="back" onMouseOut={this.handleMouseOut}  >
                            <WordCardStatic word={this.props.translate}
                                            url={this.props.url}
                                            isTrain={this.props.isTrain}
                                            isOverturn={this.state.isOverturn}
                                            checkAudio={this.props.checkAudio}

                            />
                      </div>}
                  </div>
          </div>


        )
    }
}

export default WordCard;

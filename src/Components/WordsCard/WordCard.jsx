import React from 'react';
import './WordCard.css'
import WordCardStatic from "./WordCardStatic";

class WordCard extends React.Component {
    state = {
        isOverturn: true
    }
    changeIsOverturn=()=>{
        this.setState({
            isOverturn: !this.state.isOverturn
        })
    }
    render() {
        // let classFlipper = this.state.isOverturn? 'flipper': '';
        // let classContainer = this.state.isOverturn? 'flip-container': '
        return (
              <div className='flipper'>
                  <div className='flip-container'>
                      <div className="front">
                            <WordCardStatic word={this.props.word}
                                            translate={this.props.translate}
                                            url={this.props.url}
                                            isTrain={this.props.isTrain}
                                            changeIsOverturn={this.changeIsOverturn}/>
                      </div>
                      <div className="back"  onMouseOut={this.changeIsOverturn}>
                            <WordCardStatic word={this.props.translate}
                                            url={this.props.url}
                                            isTrain={this.props.isTrain}/>
                      </div>
                  </div>
          </div>

        )
    }
}

export default WordCard;

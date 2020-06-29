import React from 'react';
import './WordCard.css'
import WordCardStatic from "./WordCardStatic";

class WordCard extends React.Component {
    state = {
        isHover: false
    }
    render() {
        return (
              <div className="flip-container">
                  <div className="flipper">
                      <div className="front">
                            <WordCardStatic word={this.props.word}
                                            translate={this.props.translate}
                                            url={this.props.url}
                                            isTrain={this.props.isTrain}/>
                      </div>
                      <div className="back">
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

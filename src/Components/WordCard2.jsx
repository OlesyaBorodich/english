import React from 'react';
import './WordCard.css'


class WordCard extends React.Component {
    state = {
        isHover: true
    }

  setIsHover = () => {
       this.setState({isHover: !this.state.isHover})
    }
    lala = () => {
        alert('lalala');
    }

    render() {

        return (

                    <div className='flip-container'>
                        <div className='flipper'>
                            {
                                this.state.isHover ?
                                    <div className='front'>
                                        <div className='card-block'>
                                            <div className='flip-container'>
                                            <div className='shadow'>
                                                <div to={this.props.href} className='cardword'>
                                                    <div style={{
                                                        backgroundImage: `url(${this.props.url})`,
                                                        height: 200,
                                                        width: 300,
                                                        backgroundPosition: " center "
                                                    }}/>
                                                    {this.props.isTrain ? <div className='word'>
                                                            {this.props.word}
                                                            <div className='rotate' onClick={this.setIsHover}></div>
                                                        </div>
                                                        : null}
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                    : <div className='back' onMouseOut={this.setIsHover} >
                                        <div className='card-container'>
                                            <div className='shadow'>
                                                <div to={this.props.href} className='cardword' onClick={this.lala}>
                                                    <div style={{
                                                        backgroundImage: `url(${this.props.url})`,
                                                        height: 200,
                                                        width: 300,
                                                        backgroundPosition: " center "
                                                    }}/>
                                                    {this.props.isTrain ? <div className='word'>

                                                        </div>

                                                        : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>
            )
    }
}

export default WordCard;

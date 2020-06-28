import React from 'react';
import './WordCard.css'


class WordCard extends React.Component {
    lala = () => {
        alert('lalala');
    }

    render() {
        return (
            <div className='flip-container' ontouchstart="this.classList.toggle('hover');">
                <div className='flipper'>
                    <div className='front'>
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
                                            {this.props.word}
                                            <div className='rotate'></div>
                                        </div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='back'>
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
                                            {this.props.word}
                                            <div className='rotate'></div>
                                        </div>

                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default WordCard;

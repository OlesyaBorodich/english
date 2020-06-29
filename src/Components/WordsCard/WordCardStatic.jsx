import React from 'react';
import './WordCard.css'


class WordCardStatic extends React.Component {
    render() {
        return (
            <div>
                <div to={this.props.href} className='cardword'>
                    {this.props.isTrain ?
                        <div style={{
                            backgroundImage: `url(${this.props.url})`,
                            height: 200,
                            width: 300,
                            backgroundPosition: " center ",
                        }}/> :
                        <div style={{
                            backgroundImage: `url(${this.props.url})`,
                            height: 250,
                            width: 300,
                            backgroundPosition: " center ",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}/>}
                    {this.props.isTrain ? <div className='word'>
                            {this.props.word}
                            <div className='rotate'></div>
                        </div>
                        : null}
                </div>
            </div>

        )
    }
}

export default WordCardStatic;

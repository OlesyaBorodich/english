import React from 'react';
import './WordCard.css'


class WordCardStatic extends React.Component {
    changeIsOverturn=()=>{
        this.props.changeIsOverturn();
    }
    checkResponse=()=>{
        debugger;
        this.props.checkAudio(this.props.audioId)
    }
    render() {

        return (
            <div className='shadow'>
                <div to={this.props.href} className='cardword'>
                    {this.props.isTrain ?
                        <div  style={{
                            backgroundImage: `url(${this.props.url})`,
                            height: 200,
                            backgroundPosition: "center ",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}/> :
                        <div onClick={this.checkResponse} style={{
                            backgroundImage: `url(${this.props.url})`,
                            height: 250,
                            backgroundPosition: " center ",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}/>}
                    {this.props.isTrain ? <div className='word'>
                            {this.props.word}
                            {this.props.isOverturn && <div className='rotate' onClick={this.changeIsOverturn}/>}
                        </div>
                        : null}
                </div>
            </div>

        )
    }
}

export default WordCardStatic;

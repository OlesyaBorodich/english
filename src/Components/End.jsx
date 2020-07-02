import React from 'react';
import '../App.css'
import './End.css'
import {withRouter} from "react-router-dom";
import win from '../audio/winner.png'
import fail from '../audio/fail.png'
class End extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.updateState();
            this.props.history.push('/')
        }, 2000)
    }
    render() {
        return (
            <div className='end-content'>
                {this.props.count===0?<span className='image'><img src={win}/><p>Вы победили!</p></span>
                    :<span><img className='image' src={fail}/><p>{this.props.count} error </p></span>}
            </div>

        )
    }
}

export default withRouter(End);




import React from 'react';
import '../App.css'
import {withRouter} from "react-router-dom";

class End extends React.Component {
    componentDidMount() {
        debugger
        setTimeout(() => {
            this.props.history.push('/')
        }, 2000)
    }


    render() {
        return (
            <h1>end</h1>
        )
    }
}

export default withRouter(End);




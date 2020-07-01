import React from 'react';
import '../App.css'
import {Redirect, withRouter} from "react-router-dom";

class End extends React.Component {

    // state = {
    //     redirect: false
    // }


    componentDidMount() {
        debugger
        setTimeout(() => {
            // this.setState({redirect: true})
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




import React from 'react';
import '../App.css'
import starT from '../audio/starT.png'
import starF from '../audio/starF.png'

const Star = (props) => {

    const ingStles = {
        display: "inline",
        height:30,
        width:30
    }

    return (
        <img style={ingStles} src={starT} alt=""/>
    )
}

export default Star;

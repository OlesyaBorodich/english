import React from 'react';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./Components/Menu";
import Countries from "./Components/Countries";
import Clothes from "./Components/Clothes";
import Food from "./Components/Food";
import Emotions from "./Components/Emotions";
import Animals from "./Components/Animals";
import Sport from "./Components/Sport";
import Weather from "./Components/Weather";
import Entertainment from "./Components/Entertainment";
import Main from "./Components/Main";
import Card from "./Components/Card/Card";
const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-container'>

                <div className='header'>
                    <Menu/>
                </div>
                <div className='content'>
                    <Route path='/' render={()=>< Main/>}/>
                    <Route path='/countries' render={()=>< Countries/>}/>
                    <Route path='/clothes' render={()=>< Clothes/>}/>
                    <Route path='/food' render={()=><Food/>}/>
                    <Route path='/emotions' render={()=><Emotions/>}/>
                    <Route path='/animals' render={()=><Animals/>}/>
                    <Route path='/sport' render={()=><Sport/>}/>
                    <Route path='/weather' render={()=><Weather/>}/>
                    <Route path='/entertainment' render={()=><Entertainment/>}/>
                </div>

            </div>
        </BrowserRouter>)

}


export default App;

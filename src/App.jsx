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
import Button from "./Components/Button";

class App extends React.Component {
    state = {
        cardsCategory: [
            {
                title: 'Countries',
                url: 'https://sun9-21.userapi.com/c850136/v850136968/d1b2b/TiPdxf2idwM.jpg?ava=1',
                href: '/countries'
            },
            {title: 'Clothes', url: '', href: '/clothes'},
            {title: 'Food', url: '', href: '/food'},
            {title: 'Emotions', url: '', href: '/emotions'},
            {title: 'Animals', url: '', href: '/animals'},
            {title: 'Sport', url: '', href: '/sport'},
            {title: 'Weather', url: '', href: '/weather'},
            {title: 'Entertainment', url: '', href: '/entertainment'}
        ],
        buttonMood: 'TRAIN',
        isTrain: true

    }
    changeButtonMood = () => {
        if (this.state.buttonMood === 'TRAIN') {
            this.setState({buttonMood: 'PLAY',isTrain:false})
        }
        else{
            this.setState({buttonMood:'TRAIN',isTrain:true})
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-container'>

                    <div className='header'>
                        <Menu/>
                        <Button buttonMood={this.state.buttonMood}
                                isTrain={this.isTrain}
                                changeButtonMood={this.changeButtonMood}/>
                    </div>
                    <div className='content'>
                        <Route path='/' render={() => < Main cards={this.state.cardsCategory}/>}/>
                        <Route path='/countries' render={() => < Countries/>}/>
                        <Route path='/clothes' render={() => < Clothes/>}/>
                        <Route path='/food' render={() => <Food/>}/>
                        <Route path='/emotions' render={() => <Emotions/>}/>
                        <Route path='/animals' render={() => <Animals/>}/>
                        <Route path='/sport' render={() => <Sport/>}/>
                        <Route path='/weather' render={() => <Weather/>}/>
                        <Route path='/entertainment' render={() => <Entertainment/>}/>
                    </div>

                </div>
            </BrowserRouter>)
    }
}


export default App;

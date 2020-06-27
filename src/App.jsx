import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./Components/Menu";
import WordCards from "./Components/WordCards";
import Main from "./Components/Main";
import Button from "./Components/Button";

class App extends React.Component {
    state = {
        cardsCategory: [
            {
                title: 'WordCards',
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
        cardsCountries:[
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
            {word:'',url:'',audio:''},
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
                                isTrain={this.state.isTrain}
                                changeButtonMood={this.changeButtonMood}/>
                    </div>
                    <div className='content'>
                        <Route exact path='/' render={() => < Main cards={this.state.cardsCategory}
                                                             isTrain={this.state.isTrain}/>}/>
                        <Route path='/countries' render={() => <WordCards cards={this.state.cardsCategory}
                                                                           isTrain={this.state.isTrain}/>}/>
                        <Route path='/clothes' render={() => <WordCards cards={this.state.cardsCategory}
                                                                         isTrain={this.state.isTrain}/>}/>
                        <Route path='/food' render={() => <WordCards cards={this.state.cardsCategory}
                                                                     isTrain={this.state.isTrain}/>}/>
                        <Route path='/emotions' render={() => <WordCards cards={this.state.cardsCategory}
                                                                         isTrain={this.state.isTrain}/>}/>
                        <Route path='/animals' render={() => <WordCards cards={this.state.cardsCategory}
                                                                        isTrain={this.state.isTrain}/>}/>
                        <Route path='/sport' render={() => <WordCards cards={this.state.cardsCategory}
                                                                      isTrain={this.state.isTrain}/>}/>
                        <Route path='/weather' render={() => <WordCards cards={this.state.cardsCategory}
                                                                        isTrain={this.state.isTrain}/>}/>
                        <Route path='/card' render={() => <WordCards cards={this.state.cardsCategory}
                                                                     isTrain={this.state.isTrain}/>}/>
                        <Route path='/entertainment' render={() => <WordCards cards={this.state.cardsCategory}
                                                                              isTrain={this.state.isTrain}/>}/>
                        {/*тут тебе нжуно сделать одну компоненту Words с разными словами картинкой и аудио и понять как потом ъодить по ссылкам*/}
                    </div>

                </div>
            </BrowserRouter>)
    }
}


export default App;

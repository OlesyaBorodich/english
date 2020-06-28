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
                url: 'http://afisha.nyc/wp-content/uploads/2016/03/World___USA___New_York_Rockefeller_Center__New_York_058462_700.jpg',
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
            {word:'Brazil', translate:'Бразилия',url:'https://c.wallhere.com/photos/4f/bf/2048x1365_px_Bay_brazil_city_clouds_De_Evening_Janeiro-1762589.jpg!s',audio:''},
            {word:'Italy',url:'https://roma-turismo.com/wp-content/uploads/2014/12/Foro-romano101-e1418819754847.jpg',audio:''},
            {word:'China',url:'https://stroyobzor.ua/assets/styles/large/public/files/%D1%84%D0%BE%D1%82%D0%BE%20WWW/%D0%9D%D0%9E%D0%92%D0%90%D0%AF/%D0%B3%D0%BE%D0%BD%D0%BA%D0%BE%D0%BD%D0%B3.jpg?itok=137Qos72',audio:''},
            {word:'USA',url:'https://usa.one/wp-content/uploads/2017/08/7-New-York-City-Attractions.jpg',audio:''},
            {word:'France',url:'http://internationalhitradio.com/wp-content/uploads/2015/03/Sunset-from-top-of-Arc-close-up-The-Glittering-Unknown-300x200.jpg',audio:''},
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
                        <Route path='/countries' render={() => <WordCards cards={this.state.cardsCountries}
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

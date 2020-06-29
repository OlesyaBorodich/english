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
            {word:'Italy',translate:'Италия',url:'https://c.wallhere.com/photos/02/a1/italy_italia_venezia_hdr_canalgrande_giuseppemoscato-762484.jpg!s',audio:''},
            {word:'China',translate:'Китай',url:'https://stroyobzor.ua/assets/styles/large/public/files/%D1%84%D0%BE%D1%82%D0%BE%20WWW/%D0%9D%D0%9E%D0%92%D0%90%D0%AF/%D0%B3%D0%BE%D0%BD%D0%BA%D0%BE%D0%BD%D0%B3.jpg?itok=137Qos72',audio:''},
            {word:'USA',translate:'США',url:'https://usa.one/wp-content/uploads/2017/08/7-New-York-City-Attractions.jpg',audio:''},
            {word:'France',translate:'Франция',url:'http://internationalhitradio.com/wp-content/uploads/2015/03/Sunset-from-top-of-Arc-close-up-The-Glittering-Unknown-300x200.jpg',audio:''},
            {word:'Hungary',translate:'Венгрия',url:'https://img-fotki.yandex.ru/get/32/165220252.d/0_11362f_1ce31dc_M.jpg',audio:''},
            {word:'Spain',translate:'Испания',url:'http://alicantecosta.ru/wp-content/uploads/2016/08/Kartinka2091-300x200.jpg',audio:''},
            {word:'Russia',translate:'Россия',url:'https://glavguide.com/wp-content/uploads/2019/11/vid-na-isakiy-300x200.jpg',audio:''},
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

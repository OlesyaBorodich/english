import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./Components/Menu";
import WordCards from "./Components/WordCards";
import Main from "./Components/Main";
import Button from "./Components/Button";
import B from './audio/Brazil.mp3';
import C from './audio/China.mp3';
import F from './audio/France.mp3';
import H from './audio/Hungary.mp3';
import I from './audio/Italy.mp3';
import R from './audio/Russia.mp3';
import S from './audio/Spain.mp3';
import U from './audio/USA.mp3';
import Right from './audio/Right.mp3'
import Wrong from './audio/Wrong.mp3'

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
        cardsCountries: [
            {
                word: 'Brazil',
                translate: 'Бразилия',
                url: 'https://c.wallhere.com/photos/4f/bf/2048x1365_px_Bay_brazil_city_clouds_De_Evening_Janeiro-1762589.jpg!s',
                audioId: 0
            },
            {
                word: 'Italy',
                translate: 'Италия',
                url: 'https://c.wallhere.com/photos/02/a1/italy_italia_venezia_hdr_canalgrande_giuseppemoscato-762484.jpg!s',
                audioId: 1
            },
            {
                word: 'China',
                translate: 'Китай',
                url: 'https://stroyobzor.ua/assets/styles/large/public/files/%D1%84%D0%BE%D1%82%D0%BE%20WWW/%D0%9D%D0%9E%D0%92%D0%90%D0%AF/%D0%B3%D0%BE%D0%BD%D0%BA%D0%BE%D0%BD%D0%B3.jpg?itok=137Qos72',
                audioId: 2
            },
            {
                word: 'USA',
                translate: 'США',
                url: 'https://usa.one/wp-content/uploads/2017/08/7-New-York-City-Attractions.jpg',
                audioId: 3
            },
            {
                word: 'France',
                translate: 'Франция',
                url: 'http://internationalhitradio.com/wp-content/uploads/2015/03/Sunset-from-top-of-Arc-close-up-The-Glittering-Unknown-300x200.jpg',
                audioId: 4
            },
            {
                word: 'Hungary',
                translate: 'Венгрия',
                url: 'https://img-fotki.yandex.ru/get/32/165220252.d/0_11362f_1ce31dc_M.jpg',
                audioId: 5
            },
            {
                word: 'Spain',
                translate: 'Испания',
                url: 'http://alicantecosta.ru/wp-content/uploads/2016/08/Kartinka2091-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Russia',
                translate: 'Россия',
                url: 'https://glavguide.com/wp-content/uploads/2019/11/vid-na-isakiy-300x200.jpg',
                audioId: 7
            },
        ],
        audioArr: [
            {id: 0, audio: B},
            {id: 1, audio: I},
            {id: 2, audio: C},
            {id: 3, audio: U},
            {id: 4, audio: F},
            {id: 5, audio: H},
            {id: 6, audio: S},
            {id: 7, audio: R},
        ],
        buttonMood: 'TRAIN',
        isTrain: false,
        currentAudioId: 6,
        count: 0,
        arrayStars: [],
        numbers: [9],
        numberRandom: 8,
        end:false,
        isStart:false
    }
    playRandom = () => {
        debugger
        let a = 0;
        let numberR = Math.floor(Math.random() * Math.floor(this.state.numberRandom));
        this.state.numbers.forEach((n) => {
            if (n !== numberR) {
                a = a + 1
            }
        })
        if (a === this.state.numbers.length) {
            new Audio(this.state.audioArr[numberR].audio).play();
            this.setState({
                numbers: [...this.state.numbers, numberR],
                currentAudioId: numberR
            })
        } else {
            if (this.state.numbers.length === 9) {
                this.setState({
                    end:true
                });
                return
            }
            this.playRandom()
        }
    }
    setCurrentAudio = (audioId) => {
        debugger
        this.setState({
            currentAudioId: audioId
        })
    }
    checkAudio = (audioId) => {
        debugger;
        if (this.state.currentAudioId === audioId) {
            new Audio(Right).play();
            this.playRandom();
        } else {
            new Audio(Wrong).play();
        }
        this.setState({
            count: this.state.count + 1
        });
        this.state.arrayStars.push(1)
    }
    changeButtonMood = () => {

            this.setState({isTrain: !this.state.isTrain,
            arrayStars:[]})
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
                                                                          isTrain={this.state.isTrain}
                                                                          setCurrentAudio={this.setCurrentAudio}
                                                                          checkAudio={this.checkAudio}
                                                                          end={this.state.end}
                                                                          audioArr={this.state.audioArr}
                                                                          playRandom={this.playRandom}
                                                                          arrayStars={this.state.arrayStars}
                                                                          isTrain={this.state.isTrain}
                                                                          currentAudioId={this.state.currentAudioId}
                                                                          count={this.state.count}/>}/>


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

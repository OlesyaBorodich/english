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

import B1 from './audio/skirt.mp3';
import I1 from './audio/blouse.mp3';
import C1 from './audio/shoes.mp3';
import H1 from './audio/dress.mp3';
import M1 from './audio/suit.mp3';
import R1 from './audio/jeans.mp3';
import S1 from './audio/pajamas.mp3';
import U1 from './audio/tshirt.mp3';
import Right from './audio/Right.mp3'
import Wrong from './audio/Wrong.mp3'


import B2 from './audio/ice.mp3';
import I2 from './audio/pine.mp3';
import C2 from './audio/banana.mp3';
import H2 from './audio/cake.mp3';
import M2 from './audio/coo.mp3';
import R2 from './audio/pizza.mp3';
import S2 from './audio/meat.mp3';
import U2 from './audio/waterm.mp3';


import B3 from './audio/sad.mp3';
import I3 from './audio/angry.mp3';
import C3 from './audio/happy.mp3';
import H3 from './audio/tired.mp3';
import M3 from './audio/laugh.mp3';
import R3 from './audio/smile.mp3';
import S3 from './audio/scares.mp3';
import U3 from './audio/surpr.mp3';

import B4 from './audio/tiger.mp3';
import I4 from './audio/eleph.mp3';
import C4 from './audio/fox.mp3';
import H4 from './audio/panda.mp3';
import M4 from './audio/horse.mp3';
import R4 from './audio/cat.mp3';
import S4 from './audio/dog.mp3';
import U4 from './audio/rabbit.mp3';


import B5 from './audio/run.mp3';
import I5 from './audio/tennis.mp3';
import C5 from './audio/swim.mp3';
import H5 from './audio/skii.mp3';
import M5 from './audio/ska.mp3';
import R5 from './audio/acrob.mp3';
import S5 from './audio/walk.mp3';
import U5 from './audio/figh.mp3';

import B6 from './audio/rainy.mp3';
import I6 from './audio/could.mp3';
import C6 from './audio/snow.mp3';
import H6 from './audio/sanny.mp3';
import M6 from './audio/windy.mp3';
import R6 from './audio/rainb.mp3';
import S6 from './audio/cloudy.mp3';
import U6 from './audio/shtorm.mp3';

import B7 from './audio/car.mp3';
import I7 from './audio/watpa.mp3';
import C7 from './audio/billi.mp3';
import H7 from './audio/bowl.mp3';
import M7 from './audio/diving.mp3';
import R7 from './audio/zoo.mp3';
import S7 from './audio/museum.mp3';
import U7 from './audio/park.mp3';


class App extends React.Component {
    state = {
        cardsCategory: [
            {
                title: 'WordCards',
                url: 'http://afisha.nyc/wp-content/uploads/2016/03/World___USA___New_York_Rockefeller_Center__New_York_058462_700.jpg',
                href: '/countries'
            },
            {title: 'Clothes', url: 'https://avatars.mds.yandex.net/get-zen_doc/1602486/pub_5ce00cf96d578000b24007c0_5ce012b1ba8e4d00b241035f/scale_1200', href: '/clothes'},
            {title: 'Food', url: 'https://images.lady.mail.ru/454764/', href: '/food'},
            {title: 'Emotions', url: 'https://a-static.besthdwallpaper.com/goluboglazaya-devushka-v-goluboy-sviter-oboi-26638_L.jpg', href: '/emotions'},
            {title: 'Animals', url: 'https://lh3.googleusercontent.com/proxy/dCBU9_hF3VKVIp0MH9idh_5O4W9VVpiVHqr253328Di8AljHDyzyAviwrgSF6eV82KZaaalTjtjuNWA9MVXd7Bw1H6FCqV67_iPhpMzjlrgYfxdQUb-4p0Q0IdbVbuUrj54B5KF3hyXkP10', href: '/animals'},
            {title: 'Sport', url: 'https://img-cdn6.business-gazeta.ru/images/91/41930.jpg', href: '/sport'},
            {title: 'Weather', url: 'https://miro.medium.com/max/5540/1*h3iMqsZ4X9Z_k7GKX2h7cA.jpeg', href: '/weather'},
            {title: 'Entertainment', url: 'https://i1.wp.com/pictoday.ru/wp-content/uploads/2016/06/karuseli-loshadki-1.jpg', href: '/entertainment'}
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
        cardsClothes: [
            {
                word: 'Skirt',
                translate: 'Юбка',
                url: 'https://emmajhill.com/wp-content/uploads/2016/07/File-29-07-2016-10-20-03-300x200.jpeg',
                audioId: 0
            },
            {
                word: 'Blouse',
                translate: 'Блузка',
                url: 'https://i.pinimg.com/736x/8d/a9/4a/8da94ae7a227a7f64482200a01d5fcd4.jpg',
                audioId: 1
            },
            {
                word: 'Shoes',
                translate: 'Туфли',
                url: 'https://www.schoenen.org/wp-content/uploads/2012/09/schoenen-org-300x200.jpg',
                audioId: 2
            },
            {
                word: 'Dress',
                translate: 'Платье',
                url: 'http://weddingco.ru/wp-content/uploads/2019/09/GetPhoto-13-300x200.jpeg',
                audioId: 3
            },
            {
                word: 'Suit',
                translate: 'Костюм',
                url: 'https://www.emtecpestcontrol.com/wp-content/uploads/2020/03/SuitCloset200.jpg',
                audioId: 4
            },
            {
                word: 'Jeans',
                translate: 'Джинсы',
                url: 'https://mtdata.ru/u26/photo0062/20750788089-0/original.jpg',
                audioId: 5
            },
            {
                word: 'Pajamas',
                translate: 'Пижама',
                url: 'http://followyournature.blog/wp-content/uploads/2015/12/011-300x200.jpg',
                audioId: 6
            },
            {
                word: 'T-shirt',
                translate: 'Футболка',
                url: 'https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/VWWAFy05eikrfulkr/storyblocks-young-handsome-smiling-brunette-in-a-gray-t-shirt-listens-to-music-and-checks-his-messages-in-smartphone-his-friend-invites-him-to-come-over-to-eat-pizza-and-play-video-games_HCl1vkJoKG_thumb.jpg',
                audioId: 7
            },
        ],
        cardsFood: [
            {
                word: 'Ice-cream',
                translate: 'Мороженое',
                url: 'https://i.ebayimg.com/00/s/NjgxWDEwMjQ=/z/X60AAOSwdGFY4XOg/$_35.JPG',
                audioId: 0
            },
            {
                word: 'Pineapple',
                translate: 'Ананас',
                url: 'https://static.passeportsante.net/i35620-des-astuces-naturelles-contre-la-sinusite.jpg',
                audioId: 1
            },
            {
                word: 'Bananas',
                translate: 'Бананы',
                url: 'https://cosmo.kz/wp-content/goodhouse/uploads/2019/09/shutterstock_375477457-300x200.jpg',
                audioId: 2
            },
            {
                word: 'Cake',
                translate: 'Пирог',
                url: 'http://tvoikylinar.ru/wp-content/public_images2/1e0f060b1746b4746011e692185d3e90-300x200.jpg',
                audioId: 3
            },
            {
                word: 'Cookie',
                translate: 'Печенье',
                url: 'https://i.pinimg.com/736x/db/24/5a/db245a3809946452d6044079266a996c.jpg',
                audioId: 4
            },
            {
                word: 'Pizza',
                translate: 'Пицца',
                url: 'https://c.wallhere.com/photos/8e/37/food_pizza_cheese_tomatoes_olives-1739499.jpg!s',
                audioId: 5
            },
            {
                word: 'Meat',
                translate: 'Мясо',
                url: 'https://www.event-metzger.de/wp-content/uploads/Grillplatte-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Watermelon',
                translate: 'Арбуз',
                url: 'https://restorewellness.com.au/wp-content/uploads/2015/10/Dollarphotoclub_84737670-300x200.jpg',
                audioId: 7
            },
        ],
        audioArr2: [
            {id: 0, audio: B2},
            {id: 1, audio: I2},
            {id: 2, audio: C2},
            {id: 3, audio: H2},
            {id: 4, audio: M2},
            {id: 5, audio: R2},
            {id: 6, audio: S2},
            {id: 7, audio: U2},
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
        audioArr1: [
            {id: 0, audio: B1},
            {id: 1, audio: I1},
            {id: 2, audio: C1},
            {id: 3, audio: H1},
            {id: 4, audio: M1},
            {id: 5, audio: R1},
            {id: 6, audio: S1},
            {id: 7, audio: U1},
        ],
        cardsEmotions: [
            {
                word: 'Sad',
                translate: 'Грустный',
                url: 'https://mma-spb.ru/wp-content/uploads/2019/10/nvu0do0k.jpg',
                audioId: 0
            },
            {
                word: 'Angry',
                translate: 'Сердитый',
                url: 'http://1.bp.blogspot.com/_tqoPTzWU76A/TM20mTKCY8I/AAAAAAAAABk/AAS1Tst_cw8/s1600/izmena.jpg',
                audioId: 1
            },
            {
                word: 'Happy',
                translate: 'Счастливый',
                url: 'https://rusradio.ru/resize_752x752/uploads/ac/54/c4cbc55f0d4f8ca6ae6e7b64e507.jpg',
                audioId: 2
            },
            {
                word: 'Tired',
                translate: 'Уставший',
                url: 'http://www.funofis.net/wp-content/uploads/2017/09/iste-uykusuzluk-300x200.jpg',
                audioId: 3
            },
            {
                word: 'Laugh',
                translate: 'Смех',
                url: 'http://molodej.org/wp-content/uploads/2016/09/smeh-300x200.jpg',
                audioId: 4
            },
            {
                word: 'Smile',
                translate: 'Улыбка',
                url: 'https://www.sunnyviewdental.ca/wp-content/uploads/2018/09/tips-for-good-oral-health-300x200-1.jpg',
                audioId: 5
            },
            {
                word: 'Scares',
                translate: 'Испуганный',
                url: 'https://www.floraqueen.com/blog/wp-content/uploads/2016/02/Hombre-olvida-SV-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Surprised',
                translate: 'Удивленный',
                url: 'http://images-on-off.com/images/151/kakispravittorchashieikriviekliki-4d7b9a75.jpg',
                audioId: 7
            }
        ],
        cardsAnimals: [
            {
                word: 'Tiger',
                translate: 'Тигр',
                url: 'https://c.wallhere.com/photos/b8/96/1920x1200_px_cats_Cub_cute_eyes_face_Tiger-1640863.jpg!s',
                audioId: 0
            },
            {
                word: 'Elephant',
                translate: 'Слон',
                url: 'https://s8.travelask.ru/system/images/files/001/351/555/facebook/%D0%A1%D0%BB%D0%BE%D0%BD%D0%B5%D0%BD%D0%BE%D0%BA.jpg?1570534197',
                audioId: 1
            },
            {
                word: 'Fox',
                translate: 'Лиса',
                url: 'https://c.wallhere.com/photos/58/9b/fox_animals_wildlife-147721.jpg!s',
                audioId: 2
            },
            {
                word: 'Panda',
                translate: 'Панда',
                url: 'https://wallup.net/wp-content/uploads/2018/10/06/364460-panda-pandas-baer-bears-baby-cute-33-300x200.jpg',
                audioId: 3
            },
            {
                word: 'Horse',
                translate: 'Лошадь',
                url: 'https://million-wallpapers.ru/wallpapers/0/0/small/504784672984455.jpg',
                audioId: 4
            },
            {
                word: 'Cat',
                translate: 'Кот',
                url: 'https://c.wallhere.com/photos/b0/c5/kitty_furry_grass_sunlight-1061760.jpg!s',
                audioId: 5
            },
            {
                word: 'Dog',
                translate: 'Собака',
                url: 'https://decordog.ru/wp-content/uploads/2017/03/ushi-francuzskogo-buldoga-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Rabbit',
                translate: 'Кролик',
                url: 'https://thewallpaper.co/wp-content/uploads/2016/10/Animal-rabbit-best-desktop-hd-photos-desktop-wallpapers-hd-images-background-images-mac-desktop-wallpapers-free-4k-hd-pictures-2560x1600-300x200.jpg',
                audioId: 7
            }
        ],
        audioArr3: [
            {id: 0, audio: B3},
            {id: 1, audio: I3},
            {id: 2, audio: C3},
            {id: 3, audio: H3},
            {id: 4, audio: M3},
            {id: 5, audio: R3},
            {id: 6, audio: S3},
            {id: 7, audio: U3},
        ],
        cardsSport: [
            {
                word: 'Run',
                translate: 'Бег',
                url: 'https://avatars.mds.yandex.net/get-pdb/163339/4181d480-1c59-4b0f-8f67-79fa01106fe5/s1200?webp=false',
                audioId: 0
            },
            {
                word: 'Tennis',
                translate: 'Теннис',
                url: 'https://c.wallhere.com/photos/68/c7/1920x1080_px_Maria_Sharapova_tennis-587053.jpg!s',
                audioId: 1
            },
            {
                word: 'Swimming',
                translate: 'Плавание',
                url: 'https://pregactivepregnancy.com/wp-content/uploads/2015/04/Pregnancy-Swimming.jpg',
                audioId: 2
            },
            {
                word: 'Skiing',
                translate: 'Лыжный спорт',
                url: 'https://sport-51.ru/uploads/posts/2018-04/thumbs/1523035074_1.jpg',
                audioId: 3
            },
            {
                word: 'Skating ',
                translate: 'Фигурное катание',
                url: 'http://a3.espncdn.com/photo/2014/0220/oly_g_gracie-gold2_mb_300x200.jpg',
                audioId: 4
            },
            {
                word: 'Acrobatics',
                translate: 'Акробатика',
                url: 'https://c.wallhere.com/photos/4e/57/women_women_outdoors_gymnastics_flexible-1203853.jpg!s',
                audioId: 5
            },
            {
                word: 'Walking',
                translate: 'Ходьба',
                url: 'https://tipsforhealthyliving.site/wp-content/uploads/2019/03/hiking-outside-GettyImages-184115499-57967e3e5f9b58461ff167dd-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Fight',
                translate: 'Борьба',
                url: 'http://wrest55.ru/files/products/429_2018-03-24_00045.300x300.jpg?f5d5e29bf4f9c14cb3b67840bc49c3fb',
                audioId: 7
            }
        ],
        audioArr4: [
            {id: 0, audio: B4},
            {id: 1, audio: I4},
            {id: 2, audio: C4},
            {id: 3, audio: H4},
            {id: 4, audio: M4},
            {id: 5, audio: R4},
            {id: 6, audio: S4},
            {id: 7, audio: U4},
        ],
        cardsWeather: [
            {
                word: 'Rainy',
                translate: 'Дождь',
                url: 'http://ugpss48.ru/media/k2/items/cache/6c16f95e5837b7a15cc22a32eb72fad8_Generic.jpg',
                audioId: 0
            },
            {
                word: 'Cold',
                translate: 'Холодно',
                url: 'https://rs.img.com.ua/crop?v2=1&w=300&h=200&url=%2F%2Fbm.img.com.ua%2Fberlin%2Fstorage%2Fnews%2Forig%2F1%2F56%2F3e3326f724e9d931d854d066e5fb0561.jpg',
                audioId: 1
            },
            {
                word: 'Snowy',
                translate: 'Снежно',
                url: 'https://million-wallpapers.com/wallpapers/4/92/small/13896342427505736241.jpg',
                audioId: 2
            },
            {
                word: 'Sanny',
                translate: 'Солнечно',
                url: 'https://c.wallhere.com/photos/3d/91/beams_sun_light_slope_meadow_landscape-672547.jpg!s',
                audioId: 3
            },
            {
                word: 'Windy',
                translate: 'Ветрено',
                url: 'https://simg.sputnik.ru/?key=04c011ea3e25b28f6dedf2d07b73bf80d16f499c',
                audioId: 4
            },
            {
                word: 'Rainbow',
                translate: 'Радуга',
                url: 'https://i0.wp.com/tonas.lt/wp-content/uploads/2019/08/papr02.jpg?fit=300%2C200&amp;ssl=1',
                audioId: 5
            },
            {
                word: 'Cloudy',
                translate: 'Облачно',
                url: 'https://www.ino1.ru/wp-content/uploads/2019/02/foto_neba_s_oblakami_121-e1571785622642-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Storm',
                translate: 'Шторм',
                url: 'http://odpublic.net/uploads/files/content_thumbs/2015/07/805451/805452.jpg',
                audioId: 7
            }
        ],
        audioArr5: [
            {id: 0, audio: B5},
            {id: 1, audio: I5},
            {id: 2, audio: C5},
            {id: 3, audio: H5},
            {id: 4, audio: M5},
            {id: 5, audio: R5},
            {id: 6, audio: S5},
            {id: 7, audio: U5},
        ],
        cardsEntertainment: [
            {
                word: 'Carousels',
                translate: 'Карусели',
                url: 'https://c.wallhere.com/photos/35/c8/old_nightshot_carousel_hdr-762512.jpg!s',
                audioId: 0
            },
            {
                word: 'Water park',
                translate: 'Аквапарк',
                url: 'http://vizhevske.ru/uploads/images/akvapark12.jpg',
                audioId: 1
            },
            {
                word: 'Billiard',
                translate: 'Бильярд',
                url: 'https://c.wallhere.com/photos/fb/1c/billiards_table_colorful_game-634516.jpg!s',
                audioId: 2
            },
            {
                word: 'Bowling',
                translate: 'Боулинг',
                url: 'https://c.wallhere.com/photos/a8/b8/urban_bowling-93741.jpg!s',
                audioId: 3
            },
            {
                word: 'Diving',
                translate: 'Дайвинг',
                url: 'http://hostelsiniran.com/images/Kish-tourist-attractions-Thumbnail-5.jpg',
                audioId: 4
            },
            {
                word: 'Zoo',
                translate: 'Зоопарк',
                url: 'https://spainbook.net/wp-content/uploads/2019/04/6545673099_f7a1e9532a_b-min-300x200.jpg',
                audioId: 5
            },
            {
                word: 'Museum',
                translate: 'Музей',
                url: 'http://vigoda.org/wp-content/uploads/2020/03/8b64a824ee9ec219b5048599c0e4b351-300x200.jpg',
                audioId: 6
            },
            {
                word: 'Park',
                translate: 'Парк',
                url: 'https://choose-best.ru/wp-content/uploads/2017/04/sokolniki.jpg',
                audioId: 7
            }
        ],
        audioArr6: [
            {id: 0, audio: B6},
            {id: 1, audio: I6},
            {id: 2, audio: C6},
            {id: 3, audio: H6},
            {id: 4, audio: M6},
            {id: 5, audio: R6},
            {id: 6, audio: S6},
            {id: 7, audio: U6},
        ],
        audioArr7: [
            {id: 0, audio: B7},
            {id: 1, audio: I7},
            {id: 2, audio: C7},
            {id: 3, audio: H7},
            {id: 4, audio: M7},
            {id: 5, audio: R7},
            {id: 6, audio: S7},
            {id: 7, audio: U7},
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
    changeStart=()=>{
        this.setState({
            isStart:!this.state.isStart
        })
    }
    playRandom = (audioArr) => {
        let a = 0;
        let numberR = Math.floor(Math.random() * Math.floor(this.state.numberRandom));
        this.state.numbers.forEach((n) => {
            if (n !== numberR) {
                a = a + 1
            }
        })
        if (a === this.state.numbers.length) {
            debugger
            new Audio(audioArr[numberR].audio).play();
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
            this.playRandom(audioArr)
        }
    }
    setCurrentAudio = (audioId) => {
        debugger
        this.setState({
            currentAudioId: audioId
        })
    }
    checkAudio = (audioId,audioArr) => {
       if(this.state.isStart===true){
        if (this.state.currentAudioId === audioId) {
            new Audio(Right).play();
            this.playRandom(audioArr);
            this.state.arrayStars.push(1)
        } else {
            new Audio(Wrong).play();
            this.state.arrayStars.push(0)
            this.setState({
                count: this.state.count + 1
            });
        }}

    }
    changeButtonMood = () => {

            this.setState({isTrain: !this.state.isTrain,
            arrayStars:[]});
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
                                                                          isStart={this.state.isStart}
                                                                          changeStart={this.changeStart}
                                                                          currentAudioId={this.state.currentAudioId}
                                                                          count={this.state.count}/>}/>


                        <Route path='/clothes' render={() => <WordCards      cards={this.state.cardsClothes}
                                                                             isTrain={this.state.isTrain}
                                                                             setCurrentAudio={this.setCurrentAudio}
                                                                             checkAudio={this.checkAudio}
                                                                             end={this.state.end}
                                                                             audioArr={this.state.audioArr1}
                                                                             playRandom={this.playRandom}
                                                                             arrayStars={this.state.arrayStars}
                                                                             isTrain={this.state.isTrain}
                                                                             isStart={this.state.isStart}
                                                                             changeStart={this.changeStart}
                                                                             currentAudioId={this.state.currentAudioId}
                                                                             count={this.state.count}/>}/>


                        <Route path='/food' render={() => <WordCards      cards={this.state.cardsFood}
                                                                          isTrain={this.state.isTrain}
                                                                          setCurrentAudio={this.setCurrentAudio}
                                                                          checkAudio={this.checkAudio}
                                                                          end={this.state.end}
                                                                          audioArr={this.state.audioArr2}
                                                                          playRandom={this.playRandom}
                                                                          arrayStars={this.state.arrayStars}
                                                                          isTrain={this.state.isTrain}
                                                                          isStart={this.state.isStart}
                                                                          changeStart={this.changeStart}
                                                                          currentAudioId={this.state.currentAudioId}
                                                                          count={this.state.count}/>}/>


                        <Route path='/emotions' render={() => <WordCards  cards={this.state.cardsEmotions}
                                                                          isTrain={this.state.isTrain}
                                                                          setCurrentAudio={this.setCurrentAudio}
                                                                          checkAudio={this.checkAudio}
                                                                          end={this.state.end}
                                                                          audioArr={this.state.audioArr3}
                                                                          playRandom={this.playRandom}
                                                                          arrayStars={this.state.arrayStars}
                                                                          isTrain={this.state.isTrain}
                                                                          isStart={this.state.isStart}
                                                                          changeStart={this.changeStart}
                                                                          currentAudioId={this.state.currentAudioId}
                                                                          count={this.state.count}/>}/>

                        <Route path='/animals' render={() => <WordCards cards={this.state.cardsAnimals}
                                                                        isTrain={this.state.isTrain}
                                                                        setCurrentAudio={this.setCurrentAudio}
                                                                        checkAudio={this.checkAudio}
                                                                        end={this.state.end}
                                                                        audioArr={this.state.audioArr4}
                                                                        playRandom={this.playRandom}
                                                                        arrayStars={this.state.arrayStars}
                                                                        isTrain={this.state.isTrain}
                                                                        isStart={this.state.isStart}
                                                                        changeStart={this.changeStart}
                                                                        currentAudioId={this.state.currentAudioId}
                                                                        count={this.state.count}/>}/>


                        <Route path='/sport' render={() => <WordCards cards={this.state.cardsSport}
                                                                      isTrain={this.state.isTrain}
                                                                      setCurrentAudio={this.setCurrentAudio}
                                                                      checkAudio={this.checkAudio}
                                                                      end={this.state.end}
                                                                      audioArr={this.state.audioArr5}
                                                                      playRandom={this.playRandom}
                                                                      arrayStars={this.state.arrayStars}
                                                                      isTrain={this.state.isTrain}
                                                                      isStart={this.state.isStart}
                                                                      changeStart={this.changeStart}
                                                                      currentAudioId={this.state.currentAudioId}
                                                                      count={this.state.count}/>}/>


                        <Route path='/weather' render={() => <WordCards cards={this.state.cardsWeather}
                                                                        isTrain={this.state.isTrain}
                                                                        setCurrentAudio={this.setCurrentAudio}
                                                                        checkAudio={this.checkAudio}
                                                                        end={this.state.end}
                                                                        audioArr={this.state.audioArr6}
                                                                        playRandom={this.playRandom}
                                                                        arrayStars={this.state.arrayStars}
                                                                        isTrain={this.state.isTrain}
                                                                        isStart={this.state.isStart}
                                                                        changeStart={this.changeStart}
                                                                        currentAudioId={this.state.currentAudioId}
                                                                        count={this.state.count}/>}/>



                        <Route path='/entertainment' render={() => <WordCards cards={this.state.cardsEntertainment}
                                                                              isTrain={this.state.isTrain}
                                                                              setCurrentAudio={this.setCurrentAudio}
                                                                              checkAudio={this.checkAudio}
                                                                              end={this.state.end}
                                                                              audioArr={this.state.audioArr7}
                                                                              playRandom={this.playRandom}
                                                                              arrayStars={this.state.arrayStars}
                                                                              isTrain={this.state.isTrain}
                                                                              isStart={this.state.isStart}
                                                                              changeStart={this.changeStart}
                                                                              currentAudioId={this.state.currentAudioId}
                                                                              count={this.state.count}/>}/>

                    </div>

                </div>
            </BrowserRouter>)
    }
}


export default App;

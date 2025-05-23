import React from 'react';
import { Link } from 'react-router-dom';
import './styleDesing.css';


export function Desing() {
    return (
        <div id='wrappDesing-DD'>
            <div id='divForBgImg-DD'>
                <div id='heroImg-DD'>
                    <h1 id='titleDesing-DD'>Створи дизайн своєї мрії</h1>
                    <div id='divForThreeCards-DD'>
                        <div className='card-DD'>
                            <img src='photo for first card desing.png' alt='' className='imgForCard-DD' />
                            <hr className='hrForCard-DD' />
                            <h4 className='miniH4ForCard-DD'>створи дизайн</h4>
                            <p className='textFor Card-DD'>Habitasse consequat egestas lectus blandit </p>
                        </div>
                        <div className='card-DD'>
                            <img src='photo for second card desing.png' alt='' className='imgForCard-DD' />
                            <hr className='hrForCard-DD' />
                            <h4 className='miniH4ForCard-DD'>Комбінуй ідеї</h4>
                            <p className='textFor Card-DD'>Habitasse consequat egestas </p>
                        </div>
                        <div className='card-DD'>
                            <img src='photo for third card desing.png' alt='' className='imgForCard-DD' />
                            <hr className='hrForCard-DD' />
                            <h4 className='miniH4ForCard-DD'>результат</h4>
                            <p className='textForCard-DD'>Habitasse tus consequat egestas lectus blandit tus </p>
                        </div>
                    </div>

                    <div id='boddomHeroImh-DD'>
                        <h1>втілюй свої ідеї</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam </p>
                    </div>

                </div>
            </div>

            <div id='firstSec-DD'>
                <div id='upFirstSec-DD'>
                    <div id='threeCards-DD'>
                        <div className='cardsInFirstSec-DD'>
                            <img src='photoForFirstCardSection1.png' alt='' className='photoForCardInSection-DD' />
                            <h1 className='h1InCardFirstSec-DD'>Як обрати стиль</h1>
                            <p className='pInCardFirstSec-DD'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. A sed  blandit consequat. A sed placerat sapien amet...</p>
                        </div>
                        <div className='cardsInFirstSec-DD'>
                            <img src='photoForSecondCardSection1.jpg' alt='' className='photoForCardInSection-DD' />
                            <h1 className='h1InCardFirstSec-DD'>наші поради</h1>
                            <p className='pInCardFirstSec-DD'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus  placerat sapien amet...</p>
                        </div>
                        <div className='cardsInFirstSec-DD'>
                            <img src='photoForThirdCardSection1.jpg' alt='' className='photoForCardInSection-DD' />
                            <h1 className='h1InCardFirstSec-DD'>як спланувати</h1>
                            <p className='pInCardFirstSec-DD'>Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus consequat egestas lectus blandit consequat. A sed  blandit consequat. A sed
                                Lorem ipsum dolor sit amet consectetur. Habitasse
                                Lorem ipsum dolor sit amet consectetur. Habitasse  placerat sapien amet...</p>
                        </div>
                    </div>
                </div>
                <div id='downFirstSec-DD'>
                    <img src='photoForThirdIn1Sec.jpg' alt='' id='a-DD' />
                    <div id='rightDivInFouesCard-DD'>
                        <h1 id='h1InFoursCard-DD'>інформація</h1>
                        <p id='pInFoursCard-DD'>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus
                            Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
            </div>

            <div id='secindSec-DD'>
                <h1 id='h1ForSecondSec-DD'>варіанти оформлення</h1>
                {/* Слайдер */}
            </div>

            <div id='thirdSec-DD'>
                <h1>Поради</h1>
                <div className='cardInThirdSec-DD'>
                    <img src='imgForFirstCardInThirdSec.jpg' alt='' id='imgInCardThirdSec-DD' />
                    <div id='divInCardThirdSec-DD'>
                        <h1 id='h1InCardThirdSec-DD'>інформація</h1>
                        <p id='pInCardTrirdSec-DD'>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et.

                            Оrnare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
                <div className='cardInThirdSec-DD'>
                    <img src='imgForSecondCardInThirdSec.jpg' alt='' id='imgInCardThirdSec-DD' />
                    <div id='divInCardThirdSec-DD'>
                        <h1 id='h1InCardThirdSec-DD'>інформація</h1>
                        <p id='pInCardTrirdSec-DD'>Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et.

                            Оrnare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.Lorem ipsum dolor sit amet consectetur. Bibendum neque at em integer integer. Tempus a mi in enim dui rhoncus vulputate nulla et. Ornare sed cursus sed viverra.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
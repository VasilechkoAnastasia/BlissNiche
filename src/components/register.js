import React from "react";
import './styleRegister.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div id="wrappRegister-DD">
            <div id="left-DD">
                {/* <button id="backBnt-DD"> <img src="backBtn-DD.png" alt=""></img></button> */}
                <Link id='backBnt-DD' to='/'><img src="backBtn-DD.png" alt=""/></Link>
            </div>

            <div id="right-DD">
                <form class="main-DD">

                    <div className="divForInfoRegister-DD" id="divName-DD">
                        <label class="inp-DD">Ім'я</label> <br />
                        <input type="text" class="inputInfo-DD" /><br />
                    </div>

                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">Фамілія</label> <br />
                        <input type="text" class="inputInfo-DD" /><br />
                    </div>
                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">Дата народження</label> <br />
                        <input type="date" class="inputInfo-DD" /><br />
                    </div>
                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">Країна</label> <br />
                        <input type="text" class="inputInfo-DD" /><br />
                    </div>
                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">Адреса</label> <br />
                        <input type="text" class="inputInfo-DD" /><br />
                    </div>
                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">мобільний номер</label> <br />
                        <input type="text" class="inputInfo-DD" /><br />
                    </div>
                    <br />
                    <p class="text-DD">By entering your mobile number and one-time code sign-in option, <br />
                        you agree to receive a one-time verification coe via SMS from IKEA. <br />
                        Message and data rates may apply.</p>
                    <p class="text2-DD">More info about Private Policy</p>
                    <div className="divForInfoRegister-DD">
                        <label class="inp-DD">Електронна пошта або мобільний номер:</label> <br />
                        <input type="text" class="first-DD" /><br />
                    </div>
                    <div className="divForInfoRegister-DD" id="divForPass-DD">
                        <label class="inp-DD">Пароль:</label> <br />
                        <div id="pass-DD">
                            <input type="password" id="inputPass-DD" /><br />
                        </div>
                    </div>
                    <div id="divForAgree-DD">
                        <div id="divForCheckboxSaveInfo-DD">
                            <input type="checkbox" value='1' id="saveInfo-DD" />
                        </div>
                        <div id="divForTextIAgree-DD">
                            <p id="iAgree-DD">Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних</p>
                        </div>
                    </div>
                    <br />

                    <button class="Akk-DD" href="#">Продовжити</button>

                </form>
            </div>
        </div>
    );
}
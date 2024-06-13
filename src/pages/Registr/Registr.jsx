import React from 'react'
import '../Registr/Registr.css'
import email from '../../components/assets/email.png'
import password from '../../components/assets/password.png'

const Registr = () => {
  return (
    <div>
      <div className="container">
        <div className="box">
            <div className="form sign_in">
                <h3>Регистрация</h3>
                <span className='forgot'>Зполните поле ввода</span>

                <form action="#" id="form_input">
                    <div className="type">
                        <img id='emaill' src={email} alt="" />
                        <input type="email" placeholder="Емейл" name="" id="email" />

                    </div>

                    <div className="type">
                        <img id='emaills' src={email} alt="" />
                        <input type="email" placeholder="Повторите емейл" name="" id="email" />

                    </div>

                    <div className="type">
                        <img id='passwordd' src={password} alt="" />
                        <input type="password" placeholder="Пароль" name="" id="password" />

                    </div>
                    <div className="type">
                        <img id='passworddd' src={password} alt="" />
                        <input type="password" placeholder="Повторите пароль" name="" id="password" />

                    </div>

                    

                    <button id='btnn'>Зарегистрироваться</button>

                    <a className='reg' href="/login">Уже есть аккаунт</a>
                    <a className='help' href="https://support.google.com/accounts/answer/27441?hl=ru">Помощь</a>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Registr



import '../Login/Login.css'
import email from '../../components/assets/email.png'
import password from '../../components/assets/password.png'

const Login = () => {
  return (
    <div>
      <div className="containers">
        <div className="boxx">
            <div className="form sign_in">
                <h3>Войти</h3>
                <span className='forgots'>Зполните поле ввода</span>

                <form action="#" id="form_inputs">
                    <div className="types">
                        <img id='emaillss' src={email} alt="" />
                        <input type="email" placeholder="Емейл" name="" id="emails" />

                    </div>
                    <div className="type">
                        <img id='passwordds' src={password} alt="" />
                        <input type="password" placeholder="Пароль" name="" id="password" />

                    </div>

                    <div className="forgot">
                        <button><a className='pass' href="https://support.google.com/accounts/answer/41078?hl=ru&co=GENIE.Platform%3DAndroid">Забыли Пароль?</a></button>
                    </div>

                    <button id='btnns'>Войти</button>

                    <a className='regs' href="/registr">Ещё не зарегистрированы?</a>
                    <a className='helps' href="https://support.google.com/accounts/answer/27441?hl=ru">Помощь</a>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
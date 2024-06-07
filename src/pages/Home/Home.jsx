import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import culture from '../../components/assets/Kyrgyz-woman.jpg'
import jigit from '../../components/assets/jigit.jpeg';
// import mountains from '../../components/assets/mountins.jpeg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import karakol from '../../components/assets/karakol.jpg';
import suleimanToo from '../../components/assets/suleiman-too.jpg';
import ik from '../../components/assets/ik.jpg'
import arslanbob from '../../components/assets/arslanbob.jpg'
import img1 from '../../components/assets/img1.jpg'
import img2 from '../../components/assets/img2.jpg'
import img3 from '../../components/assets/10.jpg'
import Toast from 'react-bootstrap/Toast';
import ava from '../../components/assets/avatar1.jpg'
import ava2 from '../../components/assets/avatar2.jpg'
import ava3 from '../../components/assets/avatar3.jpg'
import key from '../../components/assets/key.png';
import slider from '../../components/assets/slider.png';
import card from '../../components/assets/card.png';
import support from '../../components/assets/support.png';
import guarantee from '../../components/assets/guarantee.png';
import pig from '../../components/assets/piggybank.png';
import Form from 'react-bootstrap/Form';

import { useState, useEffect} from 'react';
import CurrencyDropdown from "../dropdown.jsx";
import {HiArrowsRightLeft} from "react-icons/hi2";
import logo from '../../components/assets/logo.jpg'

import '../Home/Home.css'



function Home() {
  
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KGS");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["KGS", "EUR"]
  );

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();

      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);
  const convertCurrency = async () => {
    if (!amount) return;
    setConverting(true);
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();

      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.error("Error Fetching", error);
    } finally {
      setConverting(false);
    }
  };

  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];
    if (favorites.includes(currency)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
    } else {
      updatedFavorites.push(currency);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="Home">
      <section>
        
      <Carousel data-bs-theme="dark" style={{marginTop: '100px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={culture}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 style={{color: 'white', fontSize:"40px"}}>Кыргызстан-место, где встретят тебя как семью...</h1>
          <p style={{color: 'white', fontSize:"25px"}}>Уже сегодня тур в прекрасные горы Чункурчак, обязательно забронируй и насладись природой!</p>
          <Link as={Link} to='/turs' style={{backgroundColor: 'rgb(51, 51, 190)', textDecoration:"none", borderRadius: '10px', padding: '15px', color: "white", fontSize:"20px"}}>Бронируй!</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jigit}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{color: 'rgb(130, 18, 13)', fontSize:"40px"}}>Через 2 дня начнутся долгожданные игры кочевников!</h1>
          <p style={{color: 'white', fontSize:"30px"}}>Забронируй для себя и для своего близкого тур в ущелье Григорьева, чтобы посмотреть игры кочевников.</p>
          <button as={Link} to='turs' style={{backgroundColor: 'rgb(51, 51, 190)', borderRadius: '10px', padding: '15px', color:"white", fontSize:"20px"}}>Бронируй!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src={mountains}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 style={{color: 'white', fontSize:"40px"}}>Прокатитесь на лошадях в Семёновском ущелье с семьей!</h1>
          <p style={{color: 'white', fontSize:"30px"}}>
            Действует акция специально для людей с семьей. <br />Успей забронировать первым!
          </p>
          <button as={Link} to='turs' style={{backgroundColor: 'rgb(51, 51, 190)', borderRadius: '10px', padding: '15px', fontSize:"20px"}}>Бронируй!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <br />
    <br />
    <br />
    
    <section>
        <h1 className="title">Идеи для отдыха</h1>
          <section className="card-area">
            <section classNameName="card-section">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div className="card-front__tp card-front__tp--city">
                        

                        <h2 className="card-front__heading">
                          Городские приключения
                        </h2>
                        <p className="card-front__text-price">
                          От 100$
                        </p>
                    </div>

                    <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--city">
                            Посмотри меня
                        </p>
                    </div>
                </div>
                <div className="card-back">
                    <img src={suleimanToo} alt="" />
                </div>
            </div>
        </div>

        <div className="inside-page">
            <div className="inside-page__container">
                <h3 className="inside-page__heading inside-page__heading--city">
                    Сулейман-Too
                </h3>
                <p className="inside-page__text ">
                   Не пропусти тур в город Ош, а отправляемся мы в гору Сулейман Тоо
                </p>
                <a href="#" className="inside-page__btn inside-page__btn--city">Подробнее</a>
            </div>
        </div>
    </div>
</section>


<section class="card-section">
    <div class="card">
        <div class="flip-card">
            <div class="flip-card__container">
                <div class="card-front">
                    <div class="card-front__tp card-front__tp--ski">
                         <h2 class="card-front__heading">
                            Лыжние приключения
                         </h2>
                           <p class="card-front__text-price">
                              От 500$
                           </p>
                    </div>

                    <div class="card-front__bt">
                        <p class="card-front__text-view card-front__text-view--ski">
                            Посмотри меня
                        </p>
                    </div>
                </div>

                <div class="card-back">
                    <img src={karakol} alt="" />
                </div>
            </div>
        </div>

        <div class="inside-page">
            <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--ski">
                    Каракол 
                </h3>
                <p class="inside-page__text">
                   Любишь лыжи? Тогда отправляйся на 3 дня в снежный Каракол
                </p>
                <a href="#" class="inside-page__btn inside-page__btn--ski">Подробнее</a>
            </div>
        </div>
    </div>
</section>

<section class="card-section">
    <div class="card">
        <div class="flip-card">
            <div class="flip-card__container">
                <div class="card-front">
                    <div class="card-front__tp card-front__tp--beach">
                        
                   
                                   <h2 class="card-front__heading">
                                       Пляжные приключения
                                   </h2>
                                   <p class="card-front__text-price">
                                       От 560$
                                   </p>
                    </div>

                    <div class="card-front__bt">
                        <p class="card-front__text-view card-front__text-view--beach">
                            Посмотри меня
                        </p>
                    </div>
                </div>
                <div class="card-back">
                    <img src={ik} alt="" />
                </div>
            </div>
        </div>

        <div class="inside-page">
            <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--beach">
                    Иссык-Куль
                </h3>
                <p class="inside-page__text">
                   Ура лето! Время для отдыха на кайфовом пляже Иссык-Куля.
                </p>
                <Link to="turs"><a href="#" class="inside-page__btn inside-page__btn--beach"> Подробнее</a></Link>
            </div>
        </div>
    </div>
</section>

<section class="card-section">
    <div class="card">
        <div class="flip-card">
            <div class="flip-card__container">
                <div class="card-front">
                    <div class="card-front__tp card-front__tp--camping">
                        
                                   <h2 class="card-front__heading">
                                       Кэмпинг приключения
                                   </h2>
                                   <p class="card-front__text-price">
                                       От 200$
                                   </p>
                    </div>

                    <div class="card-front__bt">
                        <p class="card-front__text-view card-front__text-view--camping">
                            Посмотри меня
                        </p>
                    </div>
                </div>
                <div class="card-back">
                  <img src={arslanbob} alt="" />
                </div>
            </div>
        </div>

        <div class="inside-page">
            <div class="inside-page__container">
                <h3 class="inside-page__heading inside-page__heading--camping">
                    Арсланбоб
                </h3>
                <p class="inside-page__text">
                   Чудесный, древний и ореховый лес- Арсланбоб!
                </p>
                <a href="#" class="inside-page__btn inside-page__btn--camping">Подробнее </a>
            </div>
        </div>
    </div>
</section>

</section>
</section>
    
    <section>
        <div className="container">
        <h1 className="title1">Наша природа вас обязательно удивит</h1>
        <div className="img-flex">
            <div class="container-img">
              <img src={img3} alt="" className="image" />
                <div class="middle">
                  <h4 className="title1">Чатыр-Куль</h4>
                  <p className="text2">Озеро Чатыр-Куль расположено между хребтами Ат-Баши и Торугарт-Тоо на высоте 3530 м. Находясь высоко в горах, озеро оправдывает свое название – «небесное озеро».</p>
                  <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Подробнее</Button>
                </div>
            </div>
            <div class="container-img">
              <img src={img2} alt="" className="image" />
                <div class="middle">
                <h4 className="title1">Предгорье Ала-Тоо</h4>
                  <p className="text2">Кыргызстан славится маковыми полями, в том числе расположенными совсем рядом со столицей.Обычно маки расцветают в мае. Земли в предгорьях Ала-Тоо окрашиваются в ярко-красный цвет.</p>
                  <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Подробнее</Button>
                </div>
            </div>
            <div class="container-img">
              <img src={img1} alt="" className="image" />
                <div class="middle">
                <h4 className="title1">Башня "Бурана"</h4>
                  <p className="text2">Башня Бурана находится в 10 км к югу от Токмака.  Считается, что башня являлась частью минарета, и прежде была выше, чем в настоящее время... </p>
                  <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Подробнее</Button>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section>
      <div className="container">
        <h1 className="title">Отзывы</h1>
        <div className="flex-container">
        <Toast>
      <Toast.Header>
        <img src={ava} className="svg" alt="" />
        <strong className="list-title">Emily Johns</strong>
        <small className='text'>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className='text2'>Мне очень понравилось озеро Сон-Куль, отправилась туда на 2 дня и это было просто незабываемо. Хорошие отели и хороший гид.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src={ava2} className="svg" alt="" />
        <strong className="list-title">Анна Ким</strong>
        <small className='text'> 2 days ago</small>
      </Toast.Header>
      <Toast.Body className='text2'>Поехали с мамой в Каракол и хочу сказать, что здесь очень красиво и весело. Отель 9/10, Обслуживание 10/10 цена соответствует.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src={ava3} className="svg" alt="" />
        <strong className="list-title">Abu Khalih</strong>
        <small className='text'>1 week ago</small>
      </Toast.Header>
      <Toast.Body className='text2'>It was amazing! The forest "Arslanbab" is very adorable and beautiful. I never will forget this place!</Toast.Body>
    </Toast>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h1 className="title">Почему мы лучшие?</h1>
        <div className="section-flex">
          <div className="flex">
            <div className="img-box">
              <img src={support} alt="" />
            </div>
            <div className="right-text">
              <div className="list-title">Поддержка</div>
               <p className="text2">Ответим на ваши вопросы по телефону, e-mail и в мессенджерах </p>
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={pig}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Выгодные цены </div>
               <p className="text2">Бронирование любых тур. услуг по выгодным ценам </p>
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={guarantee}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Качество и надежность</div>
               <p className="text2">За 25 лет нашей работы мы отправили на отдых более 2 млн. туристов</p>
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={key}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Хорошие отели по всему Кыргызстану</div>
               <p className="text2">Более 10 000 отелей по всему Кыргызстану. В любой сезон вы найдете то, что подходит именно вам </p>
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={card}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Гибкая оплата</div>
                <p className="text2">Вы сами выбираете подходящий способ оплаты из множества вариантов, включая бесплатную рассрочку и кредит </p>
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={slider}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Гибкий поиск и умные фильтры</div>
               <p className="text2">Возможность подобрать отдых максимально отвечающий вашим предпочтениям </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="container-info">
          <h1 className="title">Вы готовы отправиться?</h1>
          <Link to="search" style={{textDecoration:"none"}}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Куда хотите отправиться?"
              className="me-1"
              aria-label="Search"
              style={{fontSize:"20px"}}
            />
            <Button variant="outline-success" style={{backgroundColor: 'rgb(30, 30, 150)'}}>Отправиться!</Button>
          </Form>
          </Link>
          <br />
          <br />
          <h3 className="title1">Желаем вам незабываемой поездки от нашей команды!</h3>
        </div>
      </div>
    </section>
    <footer>
      <section>
        <div className="container">
          <div className="footer-info">
            <div className="img-f">
            <img style={{maxHeight: '200px', maxWidth: '200px', borderRadius: "50px"}} src={logo} alt="" />
            </div>
            <div className="first-list">
            <div className="list-title">Туристам</div>
              <a className='a text' href="#">Новости</a>
              <a className='a text' href="#">Наши Контакты</a>
              <a className='a text' href="#">О нас</a>
              <a className='a text' href="#">Отзывы</a>
            </div>
            <div className="second-list">
            <div className="list-title">Агенствам</div>
              <a className='a text' href="#">Сотруднечество</a>
              <a className='a text' href="#">Выдача документов</a>
              <a className='a text' href="#">Вопросы и ответы</a>
              <a className='a text' href="#">Нам пишут</a>
            </div>
            <div className="third-list">
            <div className="list-title">О компании</div>
              <a className='a text' href="#">О нас</a>
              <a className='a text' href="#">Контакты</a>
              <a className='a text' href="#">Наши партнеры</a>
              <a className='a text' href="#">Вакансии</a>
              <a className='a text' href="#">Новостной центр</a>
            </div>
            <div className="container-currency">
            <div className="list-title">Курсы Валют</div>
      <div className="currency">
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
          handleFavorite={handleFavorite}
        />
        {/* swap currency button */}
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <CurrencyDropdown
          favorites={favorites}
          currencies={currencies}
          currency={toCurrency}
          setCurrency={setToCurrency}
          title="To:"
          handleFavorite={handleFavorite}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={convertCurrency}
          className={`${converting ? "animate-pulse" : ""}`} style={{backgroundColor: "rgb(30, 30, 140)", borderRadius:"10px", paddingTop:"10px", color:"white", paddingLeft:"10px", paddingBottom: "10px", paddingRight: "10px", marginTop:"20px"}}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="mt-4 text-lg font-medium text-right text-green-600">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
          </div>
        </div>
      </section>
    </footer>
    </div>


  );
}

export default Home;
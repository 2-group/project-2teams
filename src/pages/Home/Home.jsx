import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import culture from '../../components/assets/Kyrgyz-woman.jpg'
import jigit from '../../components/assets/jigit.jpeg';
import mountains from '../../components/assets/mountins.jpeg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import karakol from '../../components/assets/karakol.jpg';
import sonkol from '../../components/assets/son-kol.jpg';
import pikLenina from '../../components/assets/Pik-Lenina.webp';
import arslanbob from '../../components/assets/arslanbob.jpg'
import svg1 from '../../components/assets/tea.svg';
import svg2 from '../../components/assets/building.svg';
import svg3 from '../../components/assets/bus.svg';
import svg4 from '../../components/assets/shorts.svg'
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
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["INR", "EUR"]
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

      <Carousel data-bs-theme="dark" style={{marginTop: '200px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={culture}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 style={{color: 'white'}}>Кыргызстан-место, где встретят тебя как семью...</h4>
          <p style={{color: 'white', fontSize:"30px"}}>Уже сегодня тур в прекрасные горы Чункурчак, обязательно забронируй и насладись природой!</p>
          <Link as={Link} to='/turs' style={{backgroundColor: 'rgb(51, 51, 190)', textDecoration:"none", borderRadius: '10px', padding: '15px', color: "white"}}>Бронируй!</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jigit}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 style={{color: 'rgb(130, 18, 13)'}}>Через 2 дня начнутся долгожданные игры кочевников!</h3>
          <p style={{color: 'white'}}>Забронируй для себя и для своего близкого тур в ущелье Григорьева, чтобы посмотреть игры кочевников.</p>
          <button as={Link} to='turs' style={{backgroundColor: 'rgb(51, 51, 190)', borderRadius: '10px', padding: '10px'}}>Бронируй!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mountains}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 style={{color: 'white'}}>Прокатитесь на лошадях в Семёновском ущелье с семьей!</h4>
          <p style={{color: 'white'}}>
            Действует акция специально для людей с семьей. <br />Успей забронировать первым!
          </p>
          <button as={Link} to='turs' style={{backgroundColor: 'rgb(51, 51, 190)', borderRadius: '10px', padding: '10px'}}>Бронируй!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    <br />
    <br />
    <br />
    <section>
      <h1 className="title">Идеи для отдыха</h1>
      <div className="flex-card" style={{display: 'flex', justifyContent: "space-around", gap: "10px"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={arslanbob} />
      <Card.Body>
        <Card.Title>Ореховый лес "Арсланбаб"</Card.Title>
        <Card.Text className='text'>
        Арсланбоб — это ореховый лес, возникший в далекой древности, который состовляет 3000 лет.
        <p className='text2'>Цена за человека: 300$</p>
        <p className='text2'>В стоимость входит:</p>
        <p className='text'><img className='svg' src={svg1} alt="" />Питание</p>
        <p className='text'><img className='svg' src={svg2} alt="" />Отель</p>
        <p className='text'><img className='svg' src={svg3} alt="" />Транспорт</p>
        </Card.Text>
        <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Забронировать</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={pikLenina} />
      <Card.Body>
        <Card.Title>Пик Ленина</Card.Title>
        <Card.Text className='text'>
        Пик Ленина – это наивысшая точка Заалайского хребта, протяженность которого около 150 километров, а средняя высота на значительном протяжении превышает 6000 метров.
        </Card.Text>
        <p className='text2'>Цена за человека: 400$</p>
        <p className='text2'>В стоимость входит:</p>
        <p className='text'><img className='svg' src={svg1} alt="" />Питание</p>
        <p className='text'><img className='svg' src={svg3} alt="" />Транспорт</p>
        <p className='text'><img className='svg' src={svg4} alt="" />Специальный костюм</p>
        <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Забронировать</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sonkol} />
      <Card.Body>
        <Card.Title>Озеро "Сон-куль"</Card.Title>
        <Card.Text className='text'>
          Озеро Сон-Кель, жемчужина среди кыргызских гор, является местом невероятной красоты и спокойствия. Вознесенное на высоте более трех тысяч метров, оно предлагает посетителям уникальное сочетание природного великолепия и глубокой истории.
        </Card.Text>
        <p className='text2'>Цена за человека: 100$</p>
        <p className='text2'>В стоимость входит:</p>
        <p className='text'><img className='svg' src={svg1} alt="" />Питание</p>
        <p className='text'><img className='svg' src={svg3} alt="" />Транспорт</p>
        <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Забронировать</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={karakol} />
      <Card.Body>
        <Card.Title>Горнолыжная База "Каракол"</Card.Title>
        <Card.Text className='text'>
        Горнолыжный курорт Каракол в Кыргызстане - это уникальное место, сочетающее в себе природную красоту и отличные условия для катания. 
        </Card.Text>
        <p className='text2'>Цена за человека: 300$</p>
        <p className='text2'>В стоимость входит:</p>
        <p className='text'><img className='svg' src={svg1} alt="" />Питание</p>
        <p className='text'><img className='svg' src={svg2} alt="" />Отель</p>
        <p className='text'><img className='svg' src={svg3} alt="" />Транспорт</p>
        <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Забронировать</Button>
      </Card.Body>
    </Card>
      </div>
    </section>
    <section>
        <div className="container">
        <h1 className="title1">Наша природа вас обязательно удивит</h1>
        <div className="img-flex">
            <div class="container-img">
              <img src={img3} alt="" className="image" />
                <div class="middle">
                  <h4 className="title1">Чатыр-Куль</h4>
                  <p className="text">Озеро Чатыр-Куль расположено между хребтами Ат-Баши<br /> и Торугарт-Тоо на высоте 3530 м. Находясь высоко в горах,<br /> озеро оправдывает свое название – «небесное озеро».</p>
                  <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Подробнее</Button>
                </div>
            </div>
            <div class="container-img">
              <img src={img2} alt="" className="image" />
                <div class="middle">
                <h4 className="title1">Предгорье Ала-Тоо</h4>
                  <p className="text">Кыргызстан славится маковыми полями, в том <br /> числе расположенными совсем рядом со столицей. <br /> Обычно маки расцветают в мае. Земли в предгорьях Ала-Тоо <br />окрашиваются в ярко-красный цвет.</p>
                  <Button variant="primary" style={{backgroundColor:"rgb(30, 30, 131"}}>Подробнее</Button>
                </div>
            </div>
            <div class="container-img">
              <img src={img1} alt="" className="image" />
                <div class="middle">
                <h4 className="title1">Башня "Бурана"</h4>
                  <p className="text">Башня Бурана находится в 10 км к югу от Токмака. <br /> Считается, что башня являлась частью минарета, <br />и прежде была выше, чем в настоящее время... </p>
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
        <strong className="me-auto">Emily Johns</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Мне очень понравилось озеро Сон-Куль, отправилась туда на 2 дня и это было просто незабываемо. Хорошие отели и хороший гид.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src={ava2} className="svg" alt="" />
        <strong className="me-auto">Анна Ким</strong>
        <small>2 days ago</small>
      </Toast.Header>
      <Toast.Body>Поехали с мамой в Каракол и хочу сказать, что здесь очень красиво и весело. Отель 9/10, Обслуживание 10/10 цена соответствует.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header>
        <img src={ava3} className="svg" alt="" />
        <strong className="me-auto">Abu Khalih</strong>
        <small>1 week ago</small>
      </Toast.Header>
      <Toast.Body>It was amazing! The forest "Arslanbab" is very adorable and beautiful. I never will forget this place!</Toast.Body>
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
               Ответим на ваши вопросы по телефону, e-mail и в мессенджерах 
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={pig}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Выгодные цены </div>
               Бронирование любых тур. услуг по выгодным ценам 
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={guarantee}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Качество и надежность</div>
               За 25 лет нашей работы мы отправили на отдых более 2 млн. туристов
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={key}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Хорошие отели по всему Кыргызстану</div>
               Более 10 000 отелей по всему Кыргызстану. В любой сезон вы найдете то, что подходит именно вам 
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={card}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Гибкая оплата</div>
                Вы сами выбираете подходящий способ оплаты из множества вариантов, включая бесплатную рассрочку и кредит 
            </div>
          </div>
          <div className="flex">
            <div className="img-box">
              <img src={slider}></img>
            </div>
            <div className="right-text">
              <div className="list-title">Гибкий поиск и умные фильтры</div>
               Возможность подобрать отдых максимально отвечающий вашим предпочтениям 

            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="container-info">
          <h1 className="title">Вы готовы отправиться?</h1>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Куда хотите отправиться?"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor: 'rgb(30, 30, 150)'}}>Отправиться!</Button>
          </Form>
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
              <a className='a' href="#">Новости</a>
              <a className='a' href="#">Наши Контакты</a>
              <a className='a' href="#">О нас</a>
              <a className='a' href="#">Отзывы</a>
            </div>
            <div className="second-list">
            <div className="list-title">Агенствам</div>
              <a className='a' href="#">Сотруднечество</a>
              <a className='a' href="#">Выдача документов</a>
              <a className='a' href="#">Вопросы и ответы</a>
              <a className='a' href="#">Нам пишут</a>
            </div>
            <div className="third-list">
            <div className="list-title">О компании</div>
              <a className='a' href="#">О нас</a>
              <a className='a' href="#">Контакты</a>
              <a className='a' href="#">Наши партнеры</a>
              <a className='a' href="#">Вакансии</a>
              <a className='a' href="#">Новостной центр</a>
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
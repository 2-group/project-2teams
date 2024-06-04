import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import culture from '../../components/assets/Kyrgyz-woman.jpg';
// import jigit from '../../components/assets/jigit.jpeg';
// import mountains from '../../components/assets/mountins.jpeg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import karakol from '../../components/assets/karakol.jpg';
import sonkol from '../../components/assets/son-kol.jpg';
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
// import s from '../components/styles/stylemodule.css'


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
        {/* <img className="d-block w-100" src={culture} alt="First slide"/> */}
        <Carousel.Caption>
          <h1 style={{color: 'white', fontSize:"40px"}}>Кыргызстан-место, где встретят тебя как семью...</h1>
          <p style={{color: 'white', fontSize:"25px"}}>Уже сегодня тур в прекрасные горы Чункурчак, обязательно забронируй и насладись природой!</p>
          <Link as={Link} to='/turs' style={{backgroundColor: 'rgb(51, 51, 190)', textDecoration:"none", borderRadius: '10px', padding: '15px', color: "white", fontSize:"20px"}}>Бронируй!</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={jigit} alt="Second slide"/> */}
        <Carousel.Caption>
          <h1 style={{color: 'rgb(130, 18, 13)', fontSize:"40px"}}>Через 2 дня начнутся долгожданные игры кочевников!</h1>
          <p style={{color: 'white', fontSize:"30px"}}>Забронируй для себя и для своего близкого тур в ущелье Григорьева, чтобы посмотреть игры кочевников.</p>
          <button as={Link} to='turs' style={{backgroundColor: 'rgb(51, 51, 190)', borderRadius: '10px', padding: '15px', color:"white", fontSize:"20px"}}>Бронируй!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img className="d-block w-100" src={mountains} alt="Third slide"/> */}
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
      <div className="flex-card" style={{display: 'flex', justifyContent: "space-around", gap: "10px"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={arslanbob} />
      <Card.Body>
        <Card.Title>Ореховый лес "Арсланбаб"</Card.Title>
        <Card.Text className='text'>
        Арсланбоб — это естественный лес, возникший в далекой древности. Некоторые ученые утверждают, что его возраст может превышать 50 миллионов лет. Здесь растут многочисленные деревья грецкого ореха, фисташки, миндаля, алычи, груши и многие другие 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={suleimanToo} />
      <Card.Body>
        <Card.Title>Гора "Сулейман-Тоо"</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sonkol} />
      <Card.Body>
        <Card.Title>Озеро "Сон-куль"</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={karakol} />
      <Card.Body>
        <Card.Title>Горнолыжная База "Каракол"</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </section>
    </div>


  );
}

export default Home;
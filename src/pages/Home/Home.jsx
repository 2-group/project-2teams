import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import culture from '../../components/assets/Kyrgyz-woman.jpg';
// import jigit from '../../components/assets/jigit.jpeg';
// import mountains from '../../components/assets/mountins.jpeg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import karakol from '../../components/assets/karakol.jpg';
// import sonkol from '../../components/assets/son-kol.jpg';
import suleimanToo from '../../components/assets/suleiman-too.jpg';
import arslanbob from '../../components/assets/arslanbob.jpg'
import '../Home/Home.css'
import CurrencyDropdown from '../dropdown';
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
      {/* <Card.Img variant="top" src={sonkol} /> */}
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
    <footer>
      <section>
        <div className="container">
          <div className="footer-info">
            <div className="img-f">
            {/* <img style={{maxHeight: '200px', maxWidth: '200px', borderRadius: "50px"}} src={logo} alt="" /> */}
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
            {/* <HiArrowsRightLeft className="text-xl text-gray-700" /> */}
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
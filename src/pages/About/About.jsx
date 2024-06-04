import React, { useState, useEffect } from 'react';
import img from '../../components/assets/img.png';
import img2 from '../../components/assets/imgg.png';
import '../About/About.css';
import lenin from '../../components/assets/Pik-Lenina.webp';
import CurrencyDropdown from "../dropdown.jsx";
import logo from '../../components/assets/logo.jpg';
import up from '../../components/assets/up.png'

function About() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KGS");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || ["KGS", "EUR"]
  );
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="About">
      <section>
        <div className="container">
          <div className="container1-flex">
            <img src={img2} alt="" className="img" />
            <img src={img} alt="" className="img" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="button-flex">
            <button className="btns">Контакты</button>
            <button className="btns">Благодарности</button>
            <button className="btns">Наши Награды</button>
            <button className="btns">Вакансии Компании</button>
            <button className="btns">Пресса О Нас</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container first">
          <h1 className="title">Деятельность Компании</h1>
          <p className="text2">
            Бренд Kyrgyz Tourism представлен на рынке с 1995 года...
          </p>
          {/* Rest of the content */}
        </div>
      </section>
      <section>
        <div className="container">
          <button className="btns" href="../Home/Home.jsx">Назад</button>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="title">Комментарии</h2>
          <form style={{display:'flex'}} onSubmit={handleCommentSubmit}>
            <textarea
          
            style={{width:'1230px', height:'50px', borderRadius:'50px', textAlign:'center', fontSize:'30px'}}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Оставьте свой комментарий"
              className="title"
              rows="4"
            ></textarea>
            <button style={{borderRadius:'20px'}} type="submit" className="btns">Отправить</button>
          </form>
          <div className="title" style={{fontSize:'25px'}}>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="comment">
                  {comment}
                </div>
              ))
            ) : (
              <h3>Пока нет комментариев. Будьте первым!</h3>
            )}
          </div>
        </div>
      </section>

      <button className='title' style={{width:'64px', height:'64px', borderRadius:'50px', marginLeft:'10px', marginTop:''}}>  
       <a href="#">
         <img src={up} alt="" />
        </a>  
      </button>

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

export default About;

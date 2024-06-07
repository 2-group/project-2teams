import React from 'react';
import img from '../../components/assets/img.png'
import img2 from '../../components/assets/imgg.png'
import '../About/About.css'
import lenin from '../../components/assets/Pik-Lenina.webp'
import { Link } from 'react-router-dom'

import { useState, useEffect} from 'react';
import CurrencyDropdown from "../dropdown.jsx";
import {HiArrowsRightLeft} from "react-icons/hi2";
import logo from '../../components/assets/logo.jpg'

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
              <Link to='/contacts'><button className="btns">Контакты</button></Link>
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
            Бренд Kyrgyz Tourism представлен на рынке с 1995 года. Сегодня оператор занимает лидирующие позиции в туристической отрасли <br /> и позиционируется как марка надежности и качества. Наши клиенты из Турции, Египта, Испании, ОАЭ, Таиланда, России, Украины, США, <br /> Китая  и тд.Туроператор организует групповые и индивидуальные туры FIT на базе собственных чартерных программ и регулярных <br /> рейсов, занимается развитием инсентив-, конгресс-, спортивного и других видов туризма, а также активно <br /> продает авиабилеты в онлайн.
            </p>
            <h1 className="title">Цель и миссия</h1>
            <p className="text2">
            Миссия Kyrgyz Tourism заключается в том, чтобы максимально способствовать созданию цивилизованного туристского рынка, где <br /> отношения в цепочке клиент — агент — оператор основаны на взаимном доверии и уважении. Конечная цель деятельности компании — сделать качественный отдых доступным для всех категорий населения страны.
            <div className="flex-about">
              <div className="text-center">
              <h1 className="titleK">Kyrgyz <br /> Tourism</h1>
              </div>
            <img className='image-about' src={lenin} alt="" />
            </div>
 <br />
<br />
Основная цель Kyrgyz Tourism — дальнейшее повышение эффективности деятельности компании и ее конкурентоспособности на рынке, что предполагает целенаправленную работу по четырем направлениям:
<br /> <br />
-управление ожиданиями рынка посредством укрепления лояльности к продукту компании и проведения эффективных мероприятий по дальнейшему повышению узнаваемости бренда Coral;
<br /><br />
-улучшение показателей деятельности компании за счет более высоких объемов продаж и дифференциации турпродукта, постоянного мониторинга текущего положения дел на рынке и оперативной корректировки планов;
<br /><br />
-повышение качества управления компанией путем эффективного планирования и повышения точности прогнозов результатов деятельности;
<br /><br />
-работа по самым высоким мировым стандартам, внедрение инновационных туристских технологий, без которых невозможно поступательное движение вперед.
 

В дальнейших планах Kyrgyz Tourism — увеличение доли, занимаемой компанией на рынке, расширение бизнеса за счет повышения качества, развития новых направлений и расширения ассортимента предоставляемых услуг.
            </p>
            <h1 className="title">
            Перспективы развития
            </h1>
            <p className="text2">
            Cпециалисты компании тщательно изучают рынок и прогнозируют дальнейшие направления развития спроса. Работа планируется на основе полученных данных с тем, чтобы направлять объемы продаж в необходимое русло. Долгосрочные планы и планы на ближайшие 3, 5 и 10 лет постоянно обновляются и дополняются с учетом анализа тенденций на рынке мирового туризма и международной политики.

Чартерные и регулярные рейсы выполняются из всех крупнейших городов Кыргызстана. <br /><br /> Компания является многопрофильном туроператором и предлагает не только отдых по массовым, экзотическим и экскурсионным направлениям, но и организацию деловых корпоративных мероприятий, спортивных сборов и тематических выездов.

В целях Kyrgyz Tourism — закрепление лидерских позиций как ведущего кыргызского туроператора и увеличение занимаемой компанией доли рынка с одновременным повышением качества предлагаемого турпродукта. А также дальнейшее внедрение инновационных технологий, без которых невозможно динамичное развитие современного турбизнеса. <br /><br /> Компания стала примером для многих кыргызских турфирм, которые перенимают опыт Kyrgyz Tourism. Это, в свою очередь, является стимулом для дальнейшего развития компании.
            </p>
            <h1 className="title">Социальная ответственность</h1>
            <p className="text2">
            Компания намерена способствовать повышению престижа российской туристской отрасли, установлению честной конкуренции и цивилизованных отношений между участниками рынка. Coral Travel вносит деятельный вклад в реализацию федеральных программ в сфере туризма. <br /><br />
            Компания ясно осознает свою ответственность перед обществом в целом. Многочисленные благотворительные акции компании направлены на поддержку малоимущих и нуждающихся слоев населения. Компания оказывает помощь детским домам, тесно взаимодействует с различными благотворительными фондами, уделяя особое внимание детям-сиротам и ветеранам.
            </p>
          </div>
        </section>
        <section>
          
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
  
  export default About;
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
import suleimanToo from '../../components/assets/suleiman-too.jpg';
import arslanbob from '../../components/assets/arslanbob.jpg'
import '../Home/Home.css'
// import s from '../components/styles/stylemodule.css'


function Home() {
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
          <p style={{color: 'white'}}>Уже сегодня тур в прекрасные горы Чункурчак, обязательно забронируй и насладись природой!</p>
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
          <h4 style={{color: 'white'}}>Прокатитесь на лошадях в Семьенвском ущелье с семьей!</h4>
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
import React from 'react';
import '../Hotels/Hotels.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import lovers from '../../components/assets/lovers.jpg'
import Card from 'react-bootstrap/Card';
import rich from '../../components/assets/rich.jpg';
import sheraton from '../../components/assets/sheraton.jpg';
import resident from '../../components/assets/resident.jpg';
import orion from '../../components/assets/orion.jpg';
import plaza from '../../components/assets/plaza.jpg';
import parkHotel from '../../components/assets/park-hotel.jpg';
import jannat from '../../components/assets/jannat.jpg';
import hyatt from '../../components/assets/hyatt.jpg';
import goldenDragon from '../../components/assets/golden-dragon.jpg';
import goldenTulip from '../../components/assets/golden-tulip.jpg';
import damas from '../../components/assets/damas.jpg';
import garden from '../../components/assets/garden.jpg';
import svg from '../../components/assets/location-pin.svg'

function Hotels(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="Hotels">
            <section>
                <div className="container1">
                <Button  variant="primary" onClick={handleShow}>
        Нажми на меня!
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title ><h1 className='title'>СКИДКА "ДЕНЬ ВЛЮБЛЕННЫХ"</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="flex-body">
            <img src={lovers} alt="" className="imgg" />
            <h3 className="title1">Cкорей успей! <br /> Только сегодня тебе и твоему любимому</h3>
            <p className="tetx2">Скидка предостовляется в поездку с любимым в ущелье Ала-Арчи. <br /> В стоимость входит домик, транспорт и питание в лучшем ресторане.</p>
            <button className="btns">Отправиться!</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex-cards">
                        <div className="cards">
                        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={rich} />
        <Card.Body>
          <Card.Title>Отель "Rich"</Card.Title>
          <Card.Text>
            <img src={svg} alt="" className="svg" />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                        </div>
                        <div className="cards">
                        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                        </div>
                        <div className="cards">
                        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                        </div>
                        <div className="cards">
                        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hotels;
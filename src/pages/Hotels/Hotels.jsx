import React from 'react';
import '../Hotels/Hotels.css'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import lovers from '../../components/assets/lovers.jpg'
import Card from 'react-bootstrap/Card';
import {hotels} from '../../db.js'
import svg from '../../components/assets/location-pin.svg'
import stars4 from '../../components/assets/4stars.svg'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Hotels(){
  
  //search

  const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
//advertisment
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="Hotels">
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
            <section>
            <Container>
        <h1 className='title'>Hotels</h1>
        <Form>
          <InputGroup>

            
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search names'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <tbody className='flex-cards'>
            {hotels.filter((item) => {
                return search.toLowerCase() === ' '
                  ? item
                  : item.name.toLowerCase().includes(search);
              }).map((item, index) => (
                <Card key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} alt="" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <div className="street">
            <img src={svg} className="svg" /><p>{item.street}</p>
            </div>
            <div className="flex-rating">
            <img className='svg-rating' src={stars4} alt="" /><div className="center">{item.feedback}<p>{item.feedbackText}</p></div>
            </div>
          </Card.Text>
          <h4 className='text-hotel'><strong>{item.price}</strong></h4>
          <Button variant="primary">Забронировать</Button>
        </Card.Body>
      </Card>
              ))}
          </tbody>
        </Table>
      </Container>
            </section>
            
        </div>
    )
}

export default Hotels;
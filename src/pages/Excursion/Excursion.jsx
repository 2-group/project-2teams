import React from 'react';
import '../Excursion/Excursion.css'
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {excursions} from '../../db.js'
import svg from '../../components/assets/location-pin.svg'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Excursion(){
  
  //search

  const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);

    return(
        <div  className="Excursion">
            <section>
            <Container>
            <h1 className='title'>Экскурсии по Бишкеку!</h1>
            <Form>
                <InputGroup>

            
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search excursion'
                        style={{fontSize:"14px"}}
                    />
                </InputGroup>
        </Form>
        <Table striped bordered hover>
          <tbody className='flex-cards'>
            {excursions.filter((item) => {
                return search.toLowerCase() === ' '
                  ? item
                  : item.title.toLowerCase().includes(search);
              }).map((item, index) => (
                <Card key={index} style={{ width: '24rem' }}>
        <Card.Img variant="top" src={item.img} alt="" />
        <Card.Body>
          <Card.Title style={{fontSize:"20px", fontWeight:"600"}}>{item.title}</Card.Title>
          <Card.Text>
            <div className="street">
            <img src={svg} className="svg" /><p style={{fontSize:"14px"}}>{item.street}</p>
            </div>
            <div className="flex-rating">
            <div className="center"><p>{item.city}</p>{item.feedback}</div>
            </div>
          </Card.Text>
          <h3 style={{color:"rgb(231, 204, 25"}}><strong>{item.price}</strong></h3>
          <Button style={{fontSize:"16px"}} variant="primary">Отправиться</Button>
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

export default Excursion;
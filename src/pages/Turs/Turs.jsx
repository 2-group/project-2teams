import React from 'react';
import '../Excursion/Excursion.css'
import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {turs} from '../../db'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Turs(){
  
  //search

  const [search, setSearch] = useState('');
    

    return(
        <div  className="Excursion">
            <section>
            <Container>
            <h1 className='title'>Туры по Бишкеку!</h1>
            <Form>
                <InputGroup>

            
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search turs'
                        style={{fontSize:"14px"}}
                    />
                </InputGroup>
        </Form>
        <Table striped bordered hover>
          <tbody className='flex-cards'>
            {turs.filter((item) => {
                return search.toLowerCase() === ' '
                  ? item
                  : item.name.toLowerCase().includes(search);
              }).map((item, index) => (
                <Card key={index} style={{ width: '24rem' }}>
        <Card.Img variant="top" src={item.img} alt="" />
        <Card.Body>
          <Card.Title style={{fontSize:"20px", fontWeight:"600"}}>{item.name}</Card.Title>
          <Card.Text>
            <div className="street">
            <p style={{fontSize:"14px"}}>{item.about}</p>
            </div>
            <div className="flex-rating">
            <div className="center"><p>{item.feedback}</p>{item.feedbackText}</div>
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

export default Turs;
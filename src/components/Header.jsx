import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import logo from '../components/assets/logo.jpg'
import { Link } from 'react-router-dom'
import style from '../components/styles/styles.moduls.css'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to='home'href="#">
          <img style={{maxHeight: '150px', maxWidth: '150px'}} src={logo} alt="" />
          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='about' href="Что вас ждет">Что вас ждет</Nav.Link>
            <Nav.Link as={Link} to='contacts' href="contacts">Контакты</Nav.Link>
            <NavDropdown style={{color:'grey'}} title="Поездка" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='https://beket.kg/?ysclid=lvj2qkk66w314817953' href="tickets">Билеты</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='https://101hotels.com/kyrgyzstan/bishkek/best?ysclid=lvj2kqgz9i953328585' href="hotels">
                Отели
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to='https://experience.tripster.ru/destinations/kyrgyzstan/' as={Link} href="excursions">
                Экскурсии
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='turs'  href="#" >
              Горящие туры
            </Nav.Link>
          </Nav>



          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Куда хотите отправиться?"
              className="me-1"
              aria-label="Search"
            />
            <Button variant="outline-success">Поиск</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
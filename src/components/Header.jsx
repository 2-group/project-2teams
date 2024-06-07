import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../components/assets/logo.jpg'
import { Link } from 'react-router-dom'
import '../components/Search/SearchList';
import React from 'react';
import telephone1 from '../components/assets/telephone1.png'
import search2 from '../components/assets/search2.png'
import telegram from '../components/assets/telegram.png'


function Header() {
  // document.querySelector('#elastic').oninput = function () {
  //   let val = this.value.trim();
  //   let elasticItems = document.querySelectorAll('.elastic li');
  //   if (val != '') {
  //     elasticItems.forEach(function (elem) {
  //       if (elem.innerText.search(val) === -1) {
  //         elem.classList.add('hide');
  //         elem.innerHTML = elem.innerText;
  //       } else {
  //         elem.classList.remove('hide');
  //         let str = elem.innerText;
  //         elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
  //       }
  //     });
  //   }
  //   else {
  //     elasticItems.forEach(function (elem) {
  //       elem.classList.remove('hide');
  //       elem.innerHTML = elem.innerText;
  //     })
  //   }
  // }

  // function insertMark(string, pos, len) {
  //   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
  // }
  return (

    
    <Navbar style={{position:'fixed', top: "0px", zIndex: "20", backdropFilter: 'blur(200px)', borderRadius: '70px', fontSize:'20px',  width: "100%", height: "150px"}} expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Brand as={Link} to='/'>
          <img style={{maxHeight: '150px', maxWidth: '150px', borderRadius: "50px"}} src={logo} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ gap: '250px' }} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='about'>O нас</Nav.Link>
            <Nav.Link as={Link} to='contacts'>Контакты</Nav.Link>
            <NavDropdown style={{color:'grey'}} title="Поездка" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='https://beket.kg/?ysclid=lvj2qkk66w314817953'>Билеты</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='https://101hotels.com/kyrgyzstan/bishkek/best?ysclid=lvj2kqgz9i953328585' href="hotels">
                Отели
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to='https://experience.tripster.ru/destinations/kyrgyzstan/' as={Link}>
                Экскурсии
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/Turs'>
              Горящие туры
            </Nav.Link>
          </Nav>

          <div style={{ display: 'flex', marginRight: '50px' }} className="telephone_search">
            
            <div className="search" >{/*search-box*/}
            <button>
            <Link to='/search'>
              <img  style={{  width: '45px', borderRadius: '50px', marginRight:'400' }} src={search2} alt="" />
              </Link>
            </button>
            </div>

            <div className="telephone02">
              <Link to='/Contacts'>
                <a href=""><img style={{ width: '45px', marginLeft: '10px' }} src={telephone1} alt="" /></a>
                </Link>
            </div>

            

            <div className="tg">
              <a title='telegram' href="https://t.me/jusupaiz">
              <img style={{ width: '45px', marginLeft: '10px' }} src={telegram} alt="" /></a>
            </div>

          </div>

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
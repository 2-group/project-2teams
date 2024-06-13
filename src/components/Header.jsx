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
import Registr from '../components/assets/Registr.png';
import telephone1 from '../components/assets/telephone.png';
import search from '../components/assets/search.jpg';

function Header() {
  return (
    
    <Navbar style={{position:'fixed', top: "0px", zIndex: "20",  borderRadius: '70px', fontSize:'20px',  width: "100%", height: "150px"}} expand="lg" className="bg-body-tertiary">
      <Container fluid >
        <Navbar.Brand as={Link} to='/'>
          <img style={{maxHeight: '100px', maxWidth: '100px', borderRadius: "50px"}} src={logo} alt="" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{gap: '250px'}} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='about'>O нас</Nav.Link>
            <Nav.Link as={Link} to='contacts'>Контакты</Nav.Link>
            <NavDropdown style={{color:'grey'}} title="Поездка" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{fontSize:"20px"}}  as={Link} to='https://beket.kg/?ysclid=lvj2qkk66w314817953'>Билеты</NavDropdown.Item>
              <NavDropdown.Item style={{fontSize:"20px"}}  as={Link} to='hotels' href="hotels">
                Отели
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item style={{fontSize:"20px"}}  to='/excursion' as={Link}>
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
              <img title='Search'  style={{  width: '45px', borderRadius: '50px', marginRight:'400' }} src={search} alt="" />
              </Link>
            </button>
            </div>

            <div className="telephone02">
              <Link to='/contacts'>
                <img title='Telephone' style={{ width: '45px', marginLeft: '10px' }} src={telephone1} alt="" />
                </Link>
            </div>

            

            <div className="Registr">
              <Link to='/registr'>
              <img title='Registr' style={{ width: '45px', marginLeft: '10px' }} src={Registr} alt="" />
              </Link>
            </div>

          </div>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default Header;
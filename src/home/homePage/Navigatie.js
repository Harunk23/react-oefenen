import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, NavLink } from 'react-bootstrap';
import Logo from "./images/logo.png";
import { FaSearch } from 'react-icons/fa';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Auto from '../autoPage/index';

function Navigatie() {
  return (
    <div className="navFont">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="index.js"><img className="fotoOpmaak" src={Logo} /></Nav.Link><span className="logo-tekst">Opmaatvergelijken</span>
          </Nav>
          <Form inline className="navColor">

          <Router>
            <NavDropdown title="VERZEKERINGEN" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/autoverzekering">AUTOVERZEKERING</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ZORGVERZEKERING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">WOONZEKERING</NavDropdown.Item>
            </NavDropdown>

            <Switch>
              <Route path="/autoverzekering" component={Auto}></Route>
            </Switch>
          </Router>

            <NavDropdown title="INTERNET & BELLEN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MOBIELE ABONNEMENTEN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">THUIS INTERNET, TV EN BELLEN</NavDropdown.Item>
            </NavDropdown>
            <NavLink>ENERGIE</NavLink>
            <NavDropdown title="DIVERSE AANVRAGEN" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">...</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">...</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/autoPage/index.js">SHOP</NavLink>
            <NavLink>CONTACT</NavLink>
            <NavLink>OVER ONS</NavLink>
            <NavLink><FaSearch style={{width: "2.5rem"}}/></NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigatie;
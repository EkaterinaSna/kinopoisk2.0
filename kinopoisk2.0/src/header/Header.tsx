import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import User from "../user/User";
import { Search } from "../search/Search";

function NavbarDarkExample() {
    return (
        <div className='header-wrapper'>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">pixema</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title=" "
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1"> <p><i className="bi bi-house"></i> Home</p></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><p><i className="bi bi-fire"></i> Trends</p>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><p><i className="bi bi-bookmark"></i> Favorites</p></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4"><p><i className="bi bi-gear"></i> Settings</p>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                <Search />
                <User />
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarDarkExample;
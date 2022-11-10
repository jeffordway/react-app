import React, { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ProductContext from '../Utilities/ProductContext';
import style from './Navigation.module.css'


function Navigation() {

    const { setQuery, refreshQuery } = useContext(ProductContext)
    const navigate = useNavigate()

    
    function handleChange(event) {
        const result = encodeURI(event.target.value)
        setQuery(result)
    }

    function handleSubmit(event) {
        event.preventDefault()
        refreshQuery()
        navigate(`/products/search`)
    }


    return (
        <>
        <Navbar bg="light" variant="light" expand="lg" className="p-4 sticky-top">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        alt="Montclaire Farms Logo"
                        src={"/Assets/Brand/logo.svg"}
                        width="80"
                        height="80"
                        className={style.brandLogo}
                    />
                    <div className="mx-3 text-uppercase">
                        <h2 className={style.brandName}>Montclaire Farms</h2>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/products" className="nav-link">Products</Link>
                    </Nav>
                    <Form onSubmit={handleSubmit} className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2 rounded-0"
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="outline-success rounded-0">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );

}


export default Navigation;
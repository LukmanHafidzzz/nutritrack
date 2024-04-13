import React from 'react'

// Css
import '../assets/App.css'

// Library
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function MainNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-dark-gr-15 p-3 fixed-top" data-bs-theme="dark">
                <Container className='gap-3'>
                    <Navbar.Brand href="#home" className='text-white'><span className='text-gr-70 fw-medium'>Nutri</span>track</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='gap-3'>
                            <Link to={'/'} className='text-white me-3 text-decoration-none'>Cek Status Gizi</Link>
                            <Link to={'/'} className='text-white me-3 text-decoration-none'>Marketplace</Link>
                            <Link to={'/'} className='text-white me-3 text-decoration-none'>Daftar Kontak</Link>
                            {/* <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

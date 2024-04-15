import React, { useState, useEffect } from 'react';

// Css
import '../assets/App.css'

// Library
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function MainNavbar() {
    const [activePage, setActivePage] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-dark-gr-15 p-3 fixed-top" data-bs-theme="dark">
                <Container className='gap-3'>
                    <Navbar.Brand href="#home" className='text-white'>
                        <Image src='/images/logo.png' className='me-1' width={30} />
                        <span className='text-gr-70 fw-medium'>Nutri</span>track
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='gap-3'>
                            <Link to={'/'} className={`me-3 text-decoration-none ${activePage === '/' ? 'text-active' : 'text-white'}`}>Home</Link>
                            <Link to={'/cek-nutrisi'} className={`me-3 text-decoration-none ${activePage === '/cek-nutrisi' ? 'text-active' : 'text-white'}`}>Cek Status Nutrisi</Link>
                            <Link to={'/marketplace'} className={`me-3 text-decoration-none ${activePage === '/marketplace' ? 'text-active' : 'text-white'}`}>Marketplace</Link>
                            <Link to={'/daftar-kontak'} className={`me-3 text-decoration-none ${activePage === '/daftar-kontak' ? 'text-active' : 'text-white'}`}>Daftar Kontak</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

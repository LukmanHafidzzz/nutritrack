import React from 'react'

// Css
import '../assets/App.css'
import '../assets/Landingpage.css'

// Library
import { Col, Container, Row } from 'react-bootstrap';
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function MainFooter() {
    return (
        <>
            <Container className='p-4'>
                <Row className=''>
                    <Col className="text-white">
                        <div className='fw-semibold fs-5'>
                            <span className='text-gr-70'>Nutri</span>track
                        </div>
                        <p className='fs-7'>Nutrition tracking for better living</p>
                    </Col>
                    <Col className="text-white fw-semibold fs-5">
                        <div className='mb-2 d-flex justify-content-end'>Contact us</div>
                        <Row className="d-flex justify-content-end gap-3 pe-2">
                            <Link to={''} className='text-decoration-none contact-icon d-flex justify-content-center align-items-center'><MdEmail /></Link>
                            <Link to={''} className='text-decoration-none contact-icon d-flex justify-content-center align-items-center'><RiInstagramFill /></Link>
                            <Link to={''} className='text-decoration-none contact-icon d-flex justify-content-center align-items-center'><FaTwitter /></Link>
                        </Row>
                    </Col>
                </Row>
                <span className="d-flex justify-content-center text-white fs-7 mt-5">
                    ©2024 · Nutritrack · All rights reserved
                </span>
            </Container>
        </>
    )
}

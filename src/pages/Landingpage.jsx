import React from 'react'

// Library
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import 'aos/dist/aos.css';
import AOS from 'aos';

// Css
import '../assets/App.css'
import '../assets/Landingpage.css'
import MainFooter from '../components/MainFooter';


export default function Landingpage() {
    
    return (
        <>
        <header>
            <MainNavbar />
        </header>

        <section className='pt-6 mb-5' data-aos="fade-up" data-aos-duration="1000">
            <Container className='p-5'>
                <Row className='section-1 d-flex justify-content-center align-items-center'>
                    <Col sm className='d-flex justify-content-center'>
                        <Image src='/images/Foto-3.png' className='w-75' />
                    </Col>
                    <Col sm className='left-content text-dark-gr-15'>
                        <div className=''>Selamat Datang di Nutritrack!</div>
                        <p className='fs-3 fw-bold mb-5'>
                            Memudahkan <span className='text-gr-70'>Anda</span> untuk memantau dan meningkatkan kesehatan <span className='text-gr-70'>balita</span> Anda.
                        </p>
                        <Button className='btn-start fw-semibold'>Mulai</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='bg-gr-85 mb-5' data-aos="fade-up" data-aos-duration="1000">
            <Container className='p-5 text-dark-gr-15'>
                <Row>
                    <Col></Col>
                    <Col xs={10}>
                        <p className='text-center fw-bold fs-3'  data-aos="fade-up" data-aos-duration="1000">Tentang Kita</p>
                        <p className='text-justify'  data-aos="fade-up" data-aos-duration="1000">
                            Berawal dari keinginan untuk memastikan balita tumbuh dengan gizi yang optimal, Nutritrack memberikan Anda kemudahan untuk memantau tingkat gizi balita Anda. Dengan Nutritrack, Anda bisa mendapatkan informasi yang Anda butuhkan tanpa kesulitan. Nutritrack membantu Anda mengambil langkah yang tepat untuk meningkatkan gizi balita Anda. Dengan pemantauan yang teratur dan saran yang disesuaikan, Anda dapat memastikan balita Anda mendapatkan nutrisi yang mereka butuhkan.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </section>

        <section>
            <Container className="p-5 text-dark-gr-15">
                <div className='text-center fw-bold fs-3'  data-aos="fade-up" data-aos-duration="1000">Fitur</div>
                <p className='text-center mb-5'  data-aos="fade-up" data-aos-duration="1000">Fitur yang tersedia pada website Nutritrack</p>
                <CardGroup>
                    <Row xl={2} className='g-3'>
                        <Col sm className=''>
                            <Card className='p-3 card-feature' data-aos="fade-up" data-aos-duration="1000">
                                <Card.Body className=''>
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='box-icon d-flex align-items-center justify-content-center text-dark-gr-15'>
                                            <FaCheck />
                                        </div>
                                        <div className='d-flex align-items-center text-dark-gr-15'>
                                            <Card.Title>Cek Status Gizi</Card.Title>
                                        </div>
                                    </div>
                                    <div className="text-justify mt-3 text-dark-gr-15">
                                        Fitur ini memungkinkan Anda untuk dengan mudah melihat tingkat gizi balita menggunakan kalkulator nutrisi. Dengan fitur ini anda dapat mengidentifikasi kekurangan nutrisi pada balita anda.
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm className=''>
                            <Card className='p-3 card-feature' data-aos="fade-up" data-aos-duration="1000">
                                <Card.Body>
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='box-icon d-flex align-items-center justify-content-center text-dark-gr-15'>
                                            <FaShoppingCart />
                                        </div>
                                        <div className='d-flex align-items-center text-dark-gr-15'>
                                            <Card.Title>Marketplace</Card.Title>
                                        </div>
                                    </div>
                                    <div className="text-justify mt-3 text-dark-gr-15">
                                        Fitur ini menyediakan berbagai produk yang mendukung kesehatan dan nutrisi balita. Anda dapat menemukan berbagai jenis makanan sehat, suplemen gizi, dan produk lainnya yang dapat membantu Anda memenuhi kebutuhan gizi balita Anda.
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm className=''>
                            <Card className='p-3 card-feature' data-aos="fade-up" data-aos-duration="1000">
                                <Card.Body>
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='box-icon d-flex align-items-center justify-content-center text-dark-gr-15'>
                                            <BsFillTelephoneFill />
                                        </div>
                                        <div className='d-flex align-items-center text-dark-gr-15'>
                                            <Card.Title>Daftar Kontak</Card.Title>
                                        </div>
                                    </div>
                                    <div className="text-justify mt-3 text-dark-gr-15">
                                        Fitur ini memberikan akses ke daftar nomor telepon puskesmas dan rumah sakit. Dengan daftar ini, Anda dapat dengan mudah menemukan dan menghubungi puskesmas atau rumah sakit untuk konsultasi atau keadaan darurat.
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Container>
        </section>

        <footer className='bg-dark-gr-15' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            <MainFooter />
        </footer>
        </>
    )
}

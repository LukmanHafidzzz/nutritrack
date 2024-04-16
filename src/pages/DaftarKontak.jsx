import React, { useState } from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Css
import '../assets/App.css'
import '../assets/DaftarKontak.css'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function DaftarKontak() {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6 mb-5'>
                <Container>
                    <div className='text-center fw-bold fs-3' data-aos="fade-up" data-aos-duration="1000">Daftar Kontak Puskesmas dan Rumah Sakit</div>
                    <p className='text-center mb-5' data-aos="fade-up" data-aos-duration="1000">
                        Berikut adalah list alamat dan kontak dari berbagai Puskesmas dan Rumah Sakit.
                    </p>
                    <Row className='d-flex justify-content-center'>
                        <Col xl={8} xs={12} className=''>
                            <Card className='rounded-2 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                                <div className="frame rounded-2">
                                    <Image variant="top" src="/images/Frame 12.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        <div className='fw-semibold text-rs mb-3'>
                                            RSUD Tidar Kota Magelang
                                        </div>
                                        <div className='text-desc mb-3'>
                                            <div><FaMapMarkedAlt /> Alamat</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'https://maps.app.goo.gl/obCCrVkkapyJhakR7'} target='_blank'>Jl. Tidar No.30 A, Kota Magelang</Link>
                                        </div>
                                        <div className='text-desc'>
                                            <div><BsFillTelephoneFill /> Telepon</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'tel:+62293362260'} target='_blank'>0293-362260</Link>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='rounded-2 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                                <div className="frame rounded-2">
                                    <Image variant="top" src="/images/Frame 14.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        <div className='fw-semibold text-rs mb-3'>
                                            RS Lestari Raharja
                                        </div>
                                        <div className='text-desc mb-3'>
                                            <div><FaMapMarkedAlt /> Alamat</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'https://maps.app.goo.gl/obCCrVkkapyJhakR7'} target='_blank'>Jl. Tidar No.30 A, Kota Magelang</Link>
                                        </div>
                                        <div className='text-desc'>
                                            <div><BsFillTelephoneFill /> Telepon</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'tel:+62293362260'} target='_blank'>0293-362260</Link>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='rounded-2 mb-4' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                                <div className="frame rounded-2">
                                    <Image variant="top" src="/images/Frame 13.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        <div className='fw-semibold text-rs mb-3'>
                                            RSI Kota Magelang
                                        </div>
                                        <div className='text-desc mb-3'>
                                            <div><FaMapMarkedAlt /> Alamat</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'https://maps.app.goo.gl/jeXXRwKDZyTYopbc8'} target='_blank'>Jl. Sutopo No.5, Kota Magelang</Link>
                                        </div>
                                        <div className='text-desc'>
                                            <div><BsFillTelephoneFill /> Telepon</div>
                                            <Link className='text-decoration-none text-dark-gr-15' to={'tel:+62293363223'} target='_blank'>0293-363223</Link>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <MainFooter />
            </footer>
        </>
    )
}

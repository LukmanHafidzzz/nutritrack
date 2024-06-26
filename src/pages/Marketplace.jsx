import React from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Css
import '../assets/App.css'
import '../assets/Marketplace.css'

export default function Marketplace() {
    const handleBeliClick = (product) => {
        const message = `Permisi, Saya melihat produk ${product} ini dari website Nutritrack`;
        const phoneNumber = '62887433065059';

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6 mb-5'>
                <Container>
                    <div className='text-center fw-bold fs-3' data-aos="fade-up" data-aos-duration="1000">Marketplace</div>
                    <p className='text-center mb-5' data-aos="fade-up" data-aos-duration="1000">
                        Anda dapat membeli produk berikut dengan menghubungi penjual.
                    </p>
                    <Row xl={3} xs={2} className='p-2'>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 6.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                NUTRILON ROYAL 3 ACTIDUOBIO+
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp210.275</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('NUTRILON ROYAL 3 ACTIDUOBIO+')}>Beli</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 7.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                Apialys Sirup suplemen makanan - 100ml
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp40.300</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('Apialys Sirup suplemen makanan - 100ml')}>Beli</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 8.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                Ayam Karkas Broiler Ayam Potong Utuh 0.6-0.7 Kg
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp32.500</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('Ayam Karkas Broiler Ayam Potong Utuh 0.6-0.7 Kg')}>Beli</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 9.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                MADU SARANG ASLI madu sarang/sarang madu 500 gram
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp25.000</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('MADU SARANG ASLI madu sarang/sarang madu 500 gram')}>Beli</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center align-items-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 10.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                Telur omega - protein, lemak, vitamin A, vitamin B. 30 butir
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp65.900</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('Telur omega - protein, lemak, vitamin A, vitamin B. 30 butir')}>Beli</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3} className='mb-3 d-flex justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                            <Card className='rounded-1 card-market'>
                                <div className='frame p-3 bg-gr-85 d-flex justify-content-center rounded-1'>
                                    <Image variant="top" src="/images/Frame 11.png" className='w-100' />
                                </div>
                                <Card.Body>
                                    <Row className='d-grid'>
                                        <Col>
                                            <Card.Text className='fs-7'>
                                                Blackmores Kids Fruity Fishies Omega 3 alami, EPA, DHA dan Vitamin E.
                                            </Card.Text>
                                        </Col>
                                        <Col className='position-absolute bottom-0 pb-3 pe-4'>
                                            <Card.Title className='mb-4 fw-semibold'>Rp240.000</Card.Title>
                                            <Button className='btn-buy' onClick={() => handleBeliClick('Blackmores Kids Fruity Fishies Omega 3 alami, EPA, DHA dan Vitamin E.')}>Beli</Button>{' '}
                                        </Col>
                                        <div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section >
            <footer data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <MainFooter />
            </footer>
        </>
    )
}

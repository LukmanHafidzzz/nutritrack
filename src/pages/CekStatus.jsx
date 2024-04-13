import React from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// Css
import '../assets/App.css'
import '../assets/CekStatus.css'

export default function CekStatus() {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6 mb-5'>
                <Container>
                    <Row  data-aos="fade-up" data-aos-duration="1000">
                        <Col></Col>
                        <Col xs={10} xl={6}>
                            <div className='text-center fw-bold fs-3'>Cek Status Nutrisi Balita</div>
                            <p className='text-center'>
                                Masukkan data balita anda untuk mengetahui status gizi.
                            </p>
                            <Form className='mt-5 mb-5'>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Usia Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7 fs-7' type="number" placeholder="Masukkan usia balita dalam bulan" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Berat Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7' type="number" placeholder="Masukkan berat balita dalam gram" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Tinggi Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7' type="number" placeholder="Masukkan tinggi balita dalam cm" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Jenis Kelamin</Form.Label>
                                    <Form.Select className='form-calc fs-7'>
                                        <option selected disabled value="" className=''>Pilih Jenis Kelamin</option>
                                        <option value="laki-laki">Laki - laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                            <Button className='btn-start fw-semibold w-100'>Hitung</Button>{' '}
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </section>
            <footer data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <MainFooter />
            </footer>
        </>
    )
}

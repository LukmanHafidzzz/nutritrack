import React from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// Css
import '../assets/App.css'
import '../assets/CekStatus.css'

export default function HasilStatus({ location }) {
    const hasil = location.state?.hasil || 'Hasil tidak ditemukan';
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6 mb-5'>
                <Container>
                    <Row data-aos="fade-up" data-aos-duration="1000">
                        <Col></Col>
                        <Col xs={10} xl={6}>
                            <div className='text-center fw-bold fs-3'>Cek Status Nutrisi Balita</div>
                            <p className='text-center'>
                                Masukkan data balita anda untuk mengetahui status gizi.
                            </p>
                            <h1>Hasil Perhitungan</h1>
                            
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

import React from 'react'

// Library
import { Button, Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter';

// Css
import '../assets/App.css'
import '../assets/Landingpage.css'

export default function Informasi() {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className="pt-6 mb-5">
                <Container>
                    <div className='text-center fw-bold fs-3' data-aos="fade-up" data-aos-duration="1000">Informasi Nutrisi</div>
                    <p className='text-center mb-5' data-aos="fade-up" data-aos-duration="1000">
                        Berisi informasi yang dibutuhkan untuk memenuhi nutrisi pada balita.
                    </p>
                    <Row>
                        <Col></Col>
                        <Col xs={10} xl={8} className='text-justify'>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Memasuki usia balita, si Kecil sudah bisa menyantap menu makanan keluarga di rumah, Bun. Ia tidak perlu lagi tekstur makanan yang dihaluskan.
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Ini sebenarnya sangat memudahkan Bunda dalam menyajikan menu makanan karena cukup melakukan satu kali proses memasak.
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Terlebih, pilihan makanan balita usia 1 tahun ke atas pun semakin bervariasi dan bisa mengikuti menu orang dewasa. Namun, Bunda tetap perlu berhati-hati dalam memilih agar tubuhnya mendapatkan nutrisi dan gizi seimbang demi tumbuh kembangnya. 
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                Untuk rekomendasi menu makanan untuk balita, Bunda perlu memastikan agar makanan yang dikonsumsi si Kecil mengandung nutrisi sebagai berikut.
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-bold fs-5'>1. Karbohidrat</p>
                                <p>
                                    Menu makanan si Kecil harus mengandung karbohidrat yang berfungsi sebagai energi, nutrisi, dan serat yang baik untuk balita.Ada dua jenis karbohidrat yang terkandung di dalam makanan, Bun, yakni karbohidrat kompleks dan sederhana. Karbohidrat kompleks adalah jenis karbohidrat yang cenderung lebih sulit dicerna dan membuat si Kecil lebih lama kenyang.
                                </p>
                                <p>
                                    Beberapa contoh makanan berkarbohidrat kompleks, yaitu roti, pasta, kentang, ubi, jagung, dan singkong. Sementara itu, karbohidrat sederhana atau yang biasa kita kenal dengan gula, bisa ditemukan pada gula putih, susu, buah-buahan, hingga permen. 
                                </p>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-bold fs-5'>2. Serat</p>
                                <p>
                                    Serat adalah salah satu asupan nutrisi yang dibutuhkan tubuh balita sehari-hari. Tak seperti nutrisi lain, serat merupakan jenis karbohidrat yang tidak dapat dicerna oleh tubuh, Bun. Mengonsumsi makanan kaya serat dapat membantu proses pencernaan dan melancarkan pengeluaran tinja si Kecil. Selain itu, masalah sembelit atau konstipasi pada balita juga dapat dihindari.
                                </p>
                                <p>
                                    Umumnya, pilihan makanan berserat bisa Bunda dapatkan secara alami melalui sayur-sayuran, buah-buahan, dan kacang-kacangan.
                                </p>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-bold fs-5'>3. Protein</p>
                                <p>
                                    Untuk memenuhi kebutuhan protein balita, Bunda bisa memenuhinya dari berbagai jenis makanan, seperti produk hewani dan nabati.
                                </p>
                                <p>
                                    Beberapa jenis makanan mengandung protein yang baik dikonsumsi balita, antara lain telur, daging ikan, daging ayam, daging merah, makanan laut, kacang-kacangan, sayuran, biji-bijian, tahu, dan tempe.
                                </p>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-bold fs-5'>4. Lemak</p>
                                <p>
                                    Untuk memenuhi kebutuhan gizi pada balita, Bunda jangan lupa menambahkan asupan lemak dalam menu makanan balita sehari-hari, ya. Namun, Bunda perlu memperhatikan apakah itu lemak sehat atau tidak. Lemak berfungsi sebagai energi, membuat tubuh tetap hangat, melindungi organ vital dalam tubuh, serta membantu menyerap sejumlah asupan vitamin. 
                                </p>
                                <p>
                                    Menurut American Heart Association, balita usia 2-3 tahun sebaiknya mengonsumsi lemak total sekitar 30 sampai 35 persen dari kalorinya. Asupan lemak bisa Bunda temukan dalam sejumlah produk hewani (daging dan susu) dan kacang-kacangan.
                                </p>
                            </p>
                            <p data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-bold fs-5'>5. Cairan</p>
                                <p>
                                    Selain nutrisi dari makanan, Bunda perlu mencukupi kebutuhan cairan tubuh balita. Sebab, balita usia 1-5 tahun sedang aktif-aktifnya sehingga membutuhkan banyak air untuk menggantikan cairan yang hilang. Terlebih, balita cenderung lebih mudah mengalami dehidrasi karena sering mengabaikan rasa haus ketika asyik bermain.
                                </p>
                                <p>
                                Adapun jumlah kebutuhan cairan balita tergantung pada usia, ukuran tubuh, kesehatan, tingkat aktivitas, sampai cuaca (suhu udara dan tingkat kelembapan). Tak hanya dari air putih atau air mineral, kebutuhan cairan pada balita bisa Bunda penuhi melalui pemberian susu formula. Susu merupakan sumber kalsium dan vitamin D yang utama bagi balita. Keduanya berfungsi untuk mendukung pertumbuhan tulang dan gigi.
                                </p>
                            </p>
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

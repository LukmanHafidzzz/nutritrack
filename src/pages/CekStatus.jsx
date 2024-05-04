import React, { useState } from 'react';

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

// Css
import '../assets/App.css'
import '../assets/CekStatus.css'

export default function CekStatus() {
    const [formData, setFormData] = useState({
        usia: '',
        berat: '',
        panjang: '',
        jenisKelamin: '',
    });
    const [usia, setUsia] = useState('');
    const [berat, setBerat] = useState('');
    const [panjang, setPanjang] = useState('');
    const [gender, setGender] = useState('');
    const [hasilBbU, setHasilBbU] = useState('');
    const [hasilTbU, setHasilTbU] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { jenisKelamin, usia, panjang, berat } = formData;
        let hasilBB_U = '';
        let hasilTB_U = ''
        let jenis_kelamin = '';
        if (jenisKelamin === 'laki-laki') {
            jenis_kelamin = 'Laki-laki'
            if (usia === '0') {
                if (berat >= 2.9 && berat <= 3.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 2.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 3.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '1') {
                if (berat >= 2.9 && berat <= 5.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 2.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 5.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '2') {
                if (berat >= 4.9 && berat <= 6.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 4.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 6.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '3') {
                if (berat >= 5.7 && berat <= 7.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 5.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 7.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '4') {
                if (berat >= 6.7 && berat <= 8.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 6.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 8.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '6') {
                if (berat >= 7.1 && berat <= 8.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 8.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '7') {
                if (berat >= 7.4 && berat <= 9.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '8') {
                if (berat >= 7.7 && berat <= 9.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '9') {
                if (berat >= 8 && berat <= 9.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '10') {
                if (berat >= 8.2 && berat <= 10.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '11') {
                if (berat >= 8.4 && berat <= 10.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '12') {
                if (berat >= 8.6 && berat <= 10.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '13') {
                if (berat >= 8.8 && berat <= 11) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '14') {
                if (berat >= 9 && berat <= 11.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '15') {
                if (berat >= 9.2 && berat <= 11.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '16') {
                if (berat >= 9.4 && berat <= 11.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '17') {
                if (berat >= 9.6 && berat <= 12) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '18') {
                if (berat >= 9.8 && berat <= 12.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '19') {
                if (berat >= 10 && berat <= 12.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '20') {
                if (berat >= 10.1 && berat <= 12.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '21') {
                if (berat >= 10.3 && berat <= 12.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '22') {
                if (berat >= 10.5 && berat <= 13.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '23') {
                if (berat >= 10.7 && berat <= 13.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '24') {
                if (berat >= 10.8 && berat <= 13.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '25') {
                if (berat >= 11 && berat <= 13.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '26') {
                if (berat >= 11.2 && berat <= 14.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '27') {
                if (berat >= 11.3 && berat <= 14.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '28') {
                if (berat >= 11.5 && berat <= 14.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '29') {
                if (berat >= 11.7 && berat <= 14.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '30') {
                if (berat >= 11.8 && berat <= 15) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '31') {
                if (berat >= 12 && berat <= 15.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '32') {
                if (berat >= 12.1 && berat <= 15.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '33') {
                if (berat >= 12.3 && berat <= 15.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '34') {
                if (berat >= 12.4 && berat <= 15.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '35') {
                if (berat >= 12.6 && berat <= 16) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '36') {
                if (berat >= 12.7 && berat <= 16.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '37') {
                if (berat >= 12.9 && berat <= 16.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '38') {
                if (berat >= 13 && berat <= 16.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '39') {
                if (berat >= 13.1 && berat <= 16.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '40') {
                if (berat >= 13.3 && berat <= 17) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '41') {
                if (berat >= 13.4 && berat <= 17.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '42') {
                if (berat >= 13.6 && berat <= 17.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '43') {
                if (berat >= 13.7 && berat <= 17.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '44') {
                if (berat >= 13.8 && berat <= 17.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '45') {
                if (berat >= 14 && berat <= 18) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '46') {
                if (berat >= 14.1 && berat <= 18.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '47') {
                if (berat >= 14.3 && berat <= 18.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '48') {
                if (berat >= 14.4 && berat <= 18.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '49') {
                if (berat >= 14.5 && berat <= 18.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '50') {
                if (berat >= 14.7 && berat <= 19) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '51') {
                if (berat >= 14.8 && berat <= 19.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '52') {
                if (berat >= 15 && berat <= 19.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '53') {
                if (berat >= 15.1 && berat <= 19.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '54') {
                if (berat >= 15.2 && berat <= 19.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '55') {
                if (berat >= 15.4 && berat <= 20) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '56') {
                if (berat >= 15.5 && berat <= 20.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '57') {
                if (berat >= 15.6 && berat <= 20.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '58') {
                if (berat >= 15.8 && berat <= 20.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '59') {
                if (berat >= 15.9 && berat <= 20.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '60') {
                if (berat >= 16 && berat <= 21) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 16) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 21) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }


            // ------------------ Panjang Badan Laki-laki -----------------
            if (usia === '0') {
                if (panjang > 48 && panjang < 51.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 48) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 51.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '1') {
                if (panjang > 52.8 && panjang < 56.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 52.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 56.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '2') {
                if (panjang > 56.4 && panjang < 60.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 56.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 60.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '3') {
                if (panjang > 59.4 && panjang < 63.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 59.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 63.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '4') {
                if (panjang > 61.8 && panjang < 66) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 61.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 66) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '5') {
                if (panjang > 63.8 && panjang < 68) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 63.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 68) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '6') {
                if (panjang > 65.5 && panjang < 69.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 65.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 69.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '7') {
                if (panjang > 67 && panjang < 71.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 67) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 71.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '8') {
                if (panjang > 68.4 && panjang < 72.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 68.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 72.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '9') {
                if (panjang > 69.7 && panjang < 74.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 69.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 74.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '10') {
                if (panjang > 71 && panjang < 75.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 71) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 75.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '11') {
                if (panjang > 72.2 && panjang < 76.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 72.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 76.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '12') {
                if (panjang > 73.4 && panjang < 78.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 73.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 78.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '13') {
                if (panjang > 74.5 && panjang < 79.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 74.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 79.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '14') {
                if (panjang > 75.6 && panjang < 80.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 75.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 80.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '15') {
                if (panjang > 76.6 && panjang < 81.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 76.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 81.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '16') {
                if (panjang > 77.6 && panjang < 82.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 77.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 82.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '17') {
                if (panjang > 78.6 && panjang < 83.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 78.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 83.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '18') {
                if (panjang > 79.6 && panjang < 85) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 79.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 85) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '19') {
                if (panjang > 80.5 && panjang < 86) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 80.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 86) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '20') {
                if (panjang > 81.4 && panjang < 87) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 81.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 87) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '21') {
                if (panjang > 82.3 && panjang < 88) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 82.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 88) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '22') {
                if (panjang > 83.1 && panjang < 89) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 83.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 89) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '23') {
                if (panjang > 83.9 && panjang < 89.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 83.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 89.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '24') {
                if (panjang > 84.8 && panjang < 90.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 84.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 90.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '25') {
                if (panjang > 84.9 && panjang < 91.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 84.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 91.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '26') {
                if (panjang > 85.6 && panjang < 92) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 85.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 92) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '27') {
                if (panjang > 86.4 && panjang < 92.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 86.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 92.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '28') {
                if (panjang > 87.1 && panjang < 93.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 87.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 93.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '29') {
                if (panjang > 87.8 && panjang < 94.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 87.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 94.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '30') {
                if (panjang > 88.5 && panjang < 95.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 88.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 95.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '31') {
                if (panjang > 89.2 && panjang < 96.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 89.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 96.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '32') {
                if (panjang > 89.9 && panjang < 96.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 89.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 96.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '33') {
                if (panjang > 90.5 && panjang < 97.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 90.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 97.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '34') {
                if (panjang > 91.1 && panjang < 98.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 91.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 98.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '35') {
                if (panjang > 91.8 && panjang < 99.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 91.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 99.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '36') {
                if (panjang > 92.4 && panjang < 99.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 92.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 99.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '37') {
                if (panjang > 93 && panjang < 100.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 93) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 100.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '38') {
                if (panjang > 93.6 && panjang < 101.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 93.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 101.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '39') {
                if (panjang > 94.2 && panjang < 101.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 94.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 101.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '40') {
                if (panjang > 94.7 && panjang < 102.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 94.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 102.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '41') {
                if (panjang > 95.3 && panjang < 103.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 95.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 103.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '42') {
                if (panjang > 95.9 && panjang < 103.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 95.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 103.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '43') {
                if (panjang > 96.4 && panjang < 104.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 96.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 104.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '44') {
                if (panjang > 97 && panjang < 105.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 97) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 105.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '45') {
                if (panjang > 97.5 && panjang < 105.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 97.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 105.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '46') {
                if (panjang > 98.1 && panjang < 106.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 98.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 106.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '47') {
                if (panjang > 98.6 && panjang < 106.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 98.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 106.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '48') {
                if (panjang > 99.1 && panjang < 107.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 99.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 107.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '49') {
                if (panjang > 99.7 && panjang < 108.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 99.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 108.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '50') {
                if (panjang > 100.2 && panjang < 108.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 100.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 108.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '51') {
                if (panjang > 100.7 && panjang < 109.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 100.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 109.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '52') {
                if (panjang > 101.2 && panjang < 109.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 101.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 109.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '53') {
                if (panjang > 101.7 && panjang < 110.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 101.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 110.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '54') {
                if (panjang > 102.3 && panjang < 111.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 102.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 111.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '55') {
                if (panjang > 102.8 && panjang < 111.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 102.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 111.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '56') {
                if (panjang > 103.3 && panjang < 112.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 103.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 112.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '57') {
                if (panjang > 103.8 && panjang < 112.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 103.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 112.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '58') {
                if (panjang > 104.3 && panjang < 113.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 104.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 113.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '59') {
                if (panjang > 104.8 && panjang < 114) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 104.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 114) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            } if (usia === '60') {
                if (panjang > 105.3 && panjang < 114.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 105.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 114.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
                
            }

            //--------------------------- PEREMPUAN --------------------------
        } else if (jenisKelamin === 'perempuan') {
            jenis_kelamin = 'Perempuan'
            if (usia === '0') {
                if (berat >= 2.8 && berat <= 3.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 2.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 3.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '1') {
                if (berat >= 3.6 && berat <= 4.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 3.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 4.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '2') {
                if (berat >= 4.5 && berat <= 5.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 4.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 5.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '3') {
                if (berat >= 5.2 && berat <= 6.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 5.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 6.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '4') {
                if (berat >= 5.7 && berat <= 7.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 5.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 7.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '5') {
                if (berat >= 6.1 && berat <= 7.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 6.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 7.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '6') {
                if (berat >= 6.5 && berat <= 8.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 6.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 8.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '7') {
                if (berat >= 6.8 && berat <= 8.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 6.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 8.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '8') {
                if (berat >= 7 && berat <=  9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >=  9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '9') {
                if (berat >= 7.3 && berat <= 9.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '10') {
                if (berat >= 7.5 && berat <= 9.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '11') {
                if (berat >= 7.7 && berat <= 9.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 9.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '12') {
                if (berat >= 7.9 && berat <= 10.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 7.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '13') {
                if (berat >= 8.1 && berat <= 10.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '14') {
                if (berat >= 8.3 && berat <= 10.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '15') {
                if (berat >= 8.5 && berat <= 10.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 10.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '16') {
                if (berat >= 8.7 && berat <= 11.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '17') {
                if (berat >= 8.9 && berat <= 11.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 8.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '18') {
                if (berat >= 9.1 && berat <= 11.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '19') {
                if (berat >= 9.2 && berat <= 11.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 11.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '20') {
                if (berat >= 9.4 && berat <= 12.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '21') {
                if (berat >= 9.6 && berat <= 12.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '22') {
                if (berat >= 9.8 && berat <= 12.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 9.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '23') {
                if (berat >= 10 && berat <= 12.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 12.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '24') {
                if (berat >= 10.2 && berat <= 13) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '25') {
                if (berat >= 10.3 && berat <= 13.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '26') {
                if (berat >= 10.5 && berat <= 13.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '27') {
                if (berat >= 10.7 && berat <= 13.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 13.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '28') {
                if (berat >= 10.9 && berat <= 14) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 10.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '29') {
                if (berat >= 11.1 && berat <= 14.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '30') {
                if (berat >= 11.2 && berat <= 14.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '31') {
                if (berat >= 11.4 && berat <= 14.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '32') {
                if (berat >= 11.6 && berat <= 14.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 14.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '33') {
                if (berat >= 11.7 && berat <= 15.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '34') {
                if (berat >= 11.9 && berat <= 15.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 11.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '35') {
                if (berat >= 12 && berat <= 15.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '36') {
                if (berat >= 12.2 && berat <= 15.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 15.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '37') {
                if (berat >= 12.4 && berat <= 16) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '38') {
                if (berat >= 12.7 && berat <=  16.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >=  16.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '39') {
                if (berat >= 12.7 && berat <= 16.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '40') {
                if (berat >= 12.8 && berat <= 16.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 12.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '41') {
                if (berat >= 13 && berat <= 16.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 16.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '42') {
                if (berat >= 13.1 && berat <= 17.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '43') {
                if (berat >= 13.3 && berat <= 17.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '44') {
                if (berat >= 13.4 && berat <= 17.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.4) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '45') {
                if (berat >= 13.6 && berat <= 17.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 17.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '46') {
                if (berat >= 13.7 && berat <= 18.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.7) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '47') {
                if (berat >= 13.9 && berat <= 18.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 13.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '48') {
                if (berat >= 14 && berat <= 18.5) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.5) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '49') {
                if (berat >= 14.2 && berat <= 18.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 18.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '50') {
                if (berat >= 14.3 && berat <= 19) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '51') {
                if (berat >= 14.5 && berat <= 19.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '52') {
                if (berat >= 14.6 && berat <= 19.4) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.4) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '53') {
                if (berat >= 14.8 && berat <= 19.7) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.7) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '54') {
                if (berat >= 14.9 && berat <= 19.9) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 14.9) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 19.9) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '55') {
                if (berat >= 15.1 && berat <= 20.1) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.1) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.1) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '56') {
                if (berat >= 15.2 && berat <= 20.3) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.2) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.3) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '57') {
                if (berat >= 15.3 && berat <= 20.6) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.3) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.6) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '58') {
                if (berat >= 15.5 && berat <= 20.8) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.5) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 20.8) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '59') {
                if (berat >= 15.6 && berat <= 21) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.6) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 21) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }
            if (usia === '60') {
                if (berat >= 15.8 && berat <= 21.2) {
                    hasilBB_U = 'Berat badan normal';
                } else if (berat <= 15.8) {
                    hasilBB_U = 'Berat badan kurang';
                } else if (berat >= 21.2) {
                    hasilBB_U = 'Berat badan berlebih';
                }
            }

            // ------------------ PANJANG --------------------
            if (usia === '0') {
                if (panjang > 47.3 && panjang < 51) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 47.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 51) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '1') {
                if (panjang > 51.7 && panjang < 55.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 51.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 55.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '2') {
                if (panjang > 55 && panjang < 59.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 55) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 59.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '3') {
                if (panjang > 57.7 && panjang < 61.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 57.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 61.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '4') {
                if (panjang > 59.9 && panjang < 64.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 59.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 64.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '5') {
                if (panjang > 61.8 && panjang < 66.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 61.88) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 66.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '6') {
                if (panjang > 63.5 && panjang < 68) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 63.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 68) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '7') {
                if (panjang > 65 && panjang < 69.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 65) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 69.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '8') {
                if (panjang > 66.4 && panjang < 71.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 66.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 71.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '9') {
                if (panjang > 67.7 && panjang < 72.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 67.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 72.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '10') {
                if (panjang > 69 && panjang < 73.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 69) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 73.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '11') {
                if (panjang > 70.3 && panjang < 75.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 70.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 75.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '12') {
                if (panjang > 71.4 && panjang < 76.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 71.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 76.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '13') {
                if (panjang > 72.6 && panjang < 77.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 72.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 77.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '14') {
                if (panjang > 73.7 && panjang < 79.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 73.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 79.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '15') {
                if (panjang > 74.8 && panjang < 80.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 74.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 80.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '16') {
                if (panjang > 75.8 && panjang < 81.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 75.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 81.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '17') {
                if (panjang > 76.8 && panjang < 82.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 76.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 82.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '18') {
                if (panjang > 77.8 && panjang < 83.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 77.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 83.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '19') {
                if (panjang > 78.8 && panjang < 84.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 78.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 84.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '20') {
                if (panjang > 79.7 && panjang < 85.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 79.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 85.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '21') {
                if (panjang > 80.6 && panjang < 86.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 80.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 86.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '22') {
                if (panjang > 81.5 && panjang < 87.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 81.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 87.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '23') {
                if (panjang > 82.3 && panjang < 88.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 82.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 88.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '24') {
                if (panjang > 83.2 && panjang < 89.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 83.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 89.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '25') {
                if (panjang > 83.3 && panjang < 89.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 83.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 89.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '26') {
                if (panjang > 84.1 && panjang < 90.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 84.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 90.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '27') {
                if (panjang > 84.9 && panjang < 91.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 84.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 91.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '28') {
                if (panjang > 95.7 && panjang < 92.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 95.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 92.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '29') {
                if (panjang > 86.4 && panjang < 93.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 86.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 93.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '30') {
                if (panjang > 87.1 && panjang < 94.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 87.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 94.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            }  if (usia === '31') {
                if (panjang > 87.9 && panjang < 95) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 87.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 95) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '32') {
                if (panjang > 88.6 && panjang < 95.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 88.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 95.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '33') {
                if (panjang > 89.3 && panjang < 96.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 89.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 96.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '34') {
                if (panjang > 89.9 && panjang < 97.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 89.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 97.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '35') {
                if (panjang > 90.6 && panjang < 98.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 90.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 98.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '36') {
                if (panjang > 91.2 && panjang < 98.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 91.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 98.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '37') {
                if (panjang > 91.9 && panjang < 99.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 91.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 99.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '38') {
                if (panjang > 92.5 && panjang < 100.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 92.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 100.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '39') {
                if (panjang > 93.1 && panjang < 101.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 93.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 101.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '40') {
                if (panjang > 93.8 && panjang < 101.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 93.8) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 101.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '41') {
                if (panjang > 94.4 && panjang < 102.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 94.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 102.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '42') {
                if (panjang > 95 && panjang < 103.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 95) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 103.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '43') {
                if (panjang > 95.6 && panjang < 103.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 95.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 103.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '44') {
                if (panjang > 96.2 && panjang < 104.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 96.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 104.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '45') {
                if (panjang > 96.7 && panjang < 105.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 96.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 105.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '46') {
                if (panjang > 97.3 && panjang < 105.8) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 97.3) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 105.8) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '47') {
                if (panjang > 97.9 && panjang < 106.4) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 97.9) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 106.4) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '48') {
                if (panjang > 98.4 && panjang < 107) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 98.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 107) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '49') {
                if (panjang > 99 && panjang < 107.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 99) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 107.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '50') {
                if (panjang > 99.5 && panjang < 108.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 99.5) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 108.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '51') {
                if (panjang > 100.1 && panjang < 108.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 100.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 108.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '52') {
                if (panjang > 100.6 && panjang < 109.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 100.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 109.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '53') {
                if (panjang > 101.1 && panjang < 110.1) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 101.1) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 110.1) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '54') {
                if (panjang > 101.6 && panjang < 110.7) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 101.6) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 110.7) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '55') {
                if (panjang > 102.2 && panjang < 111.3) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 102.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 111.3) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '56') {
                if (panjang > 102.7 && panjang < 111.9) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 102.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 111.9) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '57') {
                if (panjang > 103.2 && panjang < 112.5) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 103.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 112.5) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '58') {
                if (panjang > 103.7 && panjang < 113) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 103.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 113) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            } if (usia === '59') {
                if (panjang > 104.2 && panjang < 113.6) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 104.2) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 113.6) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            }
            if (usia === '60') {
                if (panjang > 104.7 && panjang < 114.2) {
                    hasilTB_U = 'Tinggi badan normal';
                } else if (panjang <= 104.7) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 114.2) {
                    hasilTB_U = 'Tinggi badan berlebih';
                }
            }
        }
        setGender(jenis_kelamin);
        setUsia(usia);
        setBerat(berat);
        setPanjang(panjang);
        setHasilBbU(hasilBB_U);
        setHasilTbU(hasilTB_U);
    };


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
                            <Form className='mt-5 mb-5' onSubmit={handleSubmit}>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Usia Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7 fs-7' name="usia" value={formData.usia} onChange={handleChange} placeholder="Masukkan usia dalam bulan" type="number" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Berat Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7' name='berat' value={formData.berat} onChange={handleChange} type="number" placeholder="Masukkan berat dalam kg" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Tinggi Balita</Form.Label>
                                    <Form.Control className='form-calc fs-7' name='panjang' value={formData.panjang} onChange={handleChange} type="number" placeholder="Masukkan tinggi dalam cm" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formGroupEmail">
                                    <Form.Label className='fw-medium'>Jenis Kelamin</Form.Label>
                                    <Form.Select className='form-calc fs-7' name='jenisKelamin' value={formData.jenisKelamin} onChange={handleChange}>
                                        <option selected disabled value="" className=''>Pilih Jenis Kelamin</option>
                                        <option value="laki-laki">Laki - laki</option>
                                        <option value="perempuan">Perempuan</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button className='btn-start fw-semibold w-100' type="submit">Hitung</Button>{' '}
                            </Form>
                            <div className="hasil-perhitungan" data-aos="fade-up" data-aos-duration="1000">
                                <p className='fw-semibold'>Hasil analisis gizi balita anda.</p>
                                <Row>
                                    <Col xs={5}>
                                        <div>Usia</div>
                                        <div>Berat</div>
                                        <div>Tinggi</div>
                                        <div>Jenis Kelamin</div>
                                    </Col>
                                    <Col xs={4}>
                                        <div>: {usia}</div>
                                        <div>: {berat}</div>
                                        <div>: {panjang}</div>
                                        <div>: {gender}</div>
                                    </Col>
                                    <Col>
                                        <div>bulan</div>
                                        <div>kg</div>
                                        <div>cm</div>
                                    </Col>
                                    <div className='mt-5'>
                                        <div className="fw-semibold">Berat badan menurut usia:</div>
                                        {hasilBbU}
                                    </div>
                                    <div className='mt-4'>
                                        <div className="fw-semibold">Tinggi badan menurut usia:</div>
                                        {hasilTbU}
                                    </div>
                                </Row>
                            </div>
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

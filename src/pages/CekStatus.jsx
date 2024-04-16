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
                } else if (panjang <= 68.7) {
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
                } else if (panjang <= 68.4) {
                    hasilTB_U = 'Tinggi badan kurang';
                } else if (panjang >= 72.8) {
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
            }

            //--------------------------- PEREMPUAN --------------------------
        } else if (jenisKelamin === 'perempuan') {
            jenis_kelamin = 'Perempuan'
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
                } else if (panjang >= 87.6) {
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
                                    <Form.Control className='form-calc fs-7' name='berat' value={formData.berat} onChange={handleChange} type="number" placeholder="Masukkan berat dalam ons" />
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
                                        <div>Bulan</div>
                                        <div>ons</div>
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

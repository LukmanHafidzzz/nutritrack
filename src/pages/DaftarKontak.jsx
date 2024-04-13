import React from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'

export default function DaftarKontak() {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6'>
                Daftar Kontak
            </section>
            <footer>
                <MainFooter />
            </footer>
        </>
    )
}

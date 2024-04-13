import React from 'react'

// Library
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'

export default function Marketplace() {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <section className='pt-6'>
                Marketplace
            </section>
            <footer>
                <MainFooter />
            </footer>
        </>
    )
}

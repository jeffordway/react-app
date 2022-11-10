import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'

function Main() {
    return (
        <>
            <Navigation />
            <div className="pb-5">
            <Outlet />
            </div>
            <div className="fixed-bottom">
                <Footer />
            </div>
        </>

    )
}

export default Main
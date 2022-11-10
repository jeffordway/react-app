import React from 'react'
import FeaturedProducts from '../Components/FeaturedProducts'
import Hero from '../Components/Hero'
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.wrapper}>
            <Hero />
            <FeaturedProducts />
        </div>
    )
}

export default Home
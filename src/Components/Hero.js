import React from 'react'
import { Container } from 'react-bootstrap'
import style from './Hero.module.css'


function Hero() {
    return (
        <div className={style.hero}>
            <img src="https://images.unsplash.com/photo-1600917016506-556622b74303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80" alt="Montclaire Farms" className={style.background} />
            <Container className={style.text}>
                <div className={style.subtitle}>Established 1955</div>
                <div className={style.title}>Montclaire Farms</div>
                <div className={style.tag}> Delicious and Organic Fruit Delivered right to your Doorstep</div>
            </Container>
        </div>
    )
}

export default Hero
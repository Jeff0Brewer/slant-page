import React, { useState } from 'react'
import styles from '../../styles/landing.module.css'

const Landing = () => {
    return (
        <section className={styles.landing}>
            <video className={styles.video} autoPlay loop muted playsInline src={'cloud-loop.mp4'} />
            <h1 className={styles.header}>Excellence.</h1>
            <div className={styles.slant}></div>
        </section>
    )
}

export default Landing;

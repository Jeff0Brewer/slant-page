import React, { useState } from 'react'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'
import styles from '../../styles/ending.module.css'

const Menu = () => {
    return (
        <article className={styles.menu}>
            <div>
                <h1>talented</h1>
                <a>using our</a>
                <a>satellites</a>
                <a>creates</a>
            </div>
            <div>
                <h1>waste</h1>
                <a>destroys</a>
                <a>crashed into</a>
                <a>clock</a>
                <a>pollute</a>
                <a>take a look</a>
            </div>
            <div>
                <h1>dinosaurs</h1>
                <a>very</a>
                <a>engineers</a>
                <a>at the</a>
                <a>is beets</a>
            </div>
        </article>
    )
}

const SocialButtons = () => {
    return (
        <span className={styles.socials}>
            <a><FaInstagram /></a>
            <a><FaTwitter /></a>
            <a><FaFacebookF /></a>
        </span>
    )
}

const FooterInfo = () => {
    return (
        <article className={styles.footer}>
            <div>
                <a>without the oops</a>
                <a>earthlings</a>
                <a>hands</a>
                <a>breaks down</a>
                <a>burn the rain</a>
            </div>
            <p>&copy; 2022 Goldblum</p>
        </article>
    )
}

const Ending = () => {
    return (
        <section className={styles.ending}>
            <div>
                <Menu />
                <SocialButtons />
            </div>
            <FooterInfo />
        </section>
    )
}

export default Ending

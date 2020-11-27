
import React from 'react'
import mightycoder from '../assets/projects_images/mateus.jpg'
import resume from '../assets/curriculo.pdf'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {motion} from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("macienciascomp@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-10vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }
    return (
        // <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Mateus<span>Henrique</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
                <figure className="sidebar__social-icons my-2">
                    <a href=""><AiFillGithub className="sidebar__icon"/></a>
                    <a href=""><AiFillLinkedin className="sidebar__icon" /></a>
                    {/* <a href=""><AiFillGithub className="sidebar__icon mr-3"/></a> */}
                </figure>
                <figure className="sidebar__social-icons my-2">
                    <a href=""><AiFillFacebook className="sidebar__icon"/></a>
                    <a href=""><AiFillInstagram className="sidebar__icon" /></a>
                </figure>

            <div className="sidebar__contact">
                <a href={resume} download="curriculo.pdf">
                    <div className="sidebar__item sidebar__resume">
                    <AiFillFilePdf className="sidebar__icon icone__reduzido" />Download Curriculo
                </div>
                </a>
                <div className="sidebar__location">
                    <AiTwotoneEnvironment className="sidebar__icon mr-3 icone__reduzido" />
                    Bauru, SP</div>
                <div className="sidebar__item">macienciascomp@gmail.com</div>
                <div className="sidebar__item">14998325098/14997208096</div>
                <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email-me</div>
            </div>
        </motion.div>
    )
}

export default Sidebar;
import React from 'react'
import Skillcard from './Skillcard'
import { motion } from 'framer-motion'
import {skills} from '../data/sobre_data'

function Sobre() {
    const sobre_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.7, type: 'spring'
            }
        }
    }
    return (
        <motion.div className="sobre"
            variants={sobre_variants}
            initial="hidden"
            animate="visible"
        >
            <h6 className="sobre__intro">
                Seja bem vindo, aqui voce encontrara meus estudos, feitos com muito amor e carinho.

                </h6>
            <div className="container sobre__container">
                <h6 className="sobre_cabecalho">Habilidades</h6>
                <div className="row">
                    {
                        skills.map(skills =>
                            <Skillcard skills={skills} />
                        )
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Sobre

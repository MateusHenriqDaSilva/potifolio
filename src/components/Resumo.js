import React from 'react'
import Bar from './Bar'
import {motion} from 'framer-motion'
import {ferramentas, linguagens} from '../data/resumo_data'

function Resumo() {
    const resumo_variants = {
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
        <motion.div className="container_resumo"
            variants={resumo_variants}
            initial="hidden"
            animate="visible"
        >
            <div className="row">
                <div className="col-lg-6 resumo-card">
                    <h4 className="resumo-card__cabecalho">
                        Educação
                     </h4>
                    <div className="resumo-card__body">
                        <h5 className="resumo-card__title">
                            Ciencias da Computacao
                         </h5>
                        <p className="resumo-card__name">
                            FIB Faculdade Integradas de Bauru
                         </p>
                        <p className="resumo-card__detalhes">
                            iniciei a Faculdade em 2015,terminando em 2019.
                         </p>
                    </div>
                </div>
                <div className="col-lg-6 resumo-card">
                    <h4 className="resumo-card__cabecalho">
                        Experiencia
                     </h4>
                    <div className="resumo-card__body">
                        <h5 className="resumo-card__title">
                            AELESAB - Suporte Tecnico
                         </h5>
                        <p className="resumo-card__name">
                            Sistema de assistente social
                         </p>
                        <p className="resumo-card__detalhes">
                            -Construção da estrutura da rede da empresa.
                            -formatação de computadores, cabeamento de rede, adaptadores.
                            -impressoras drivers, switch, nuvem.
                            -desenvolvimento mobile flutter, PHP,Sistema remoto any desk.
                         </p>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-6 resumo-linguagens">
                        <h5 className="resumo-linguagem__cabecalho">
                            Linguagens e Frameworks
                         </h5>
                        <div className="resumo-linguagem__body">
                            {
                                linguagens.map(linguagem =>
                                    <Bar value={linguagem} />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 resumo-linguagens">
                        <h5 className="resumo-linguagem__cabecalho">
                            ferramentas e softwares
                         </h5>
                        <div className="resumo-linguagem__body">
                            {
                                ferramentas.map(ferramenta =>
                                    <Bar value={ferramenta} />
                                )
                            }
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}

export default Resumo

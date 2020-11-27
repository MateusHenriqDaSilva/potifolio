import React, { useState } from 'react'
import data_projetos from '../data/projeto_data'
import ProjetoCard from './ProjetoCard'
import { motion } from 'framer-motion'

function Projetos() {
    const [projetos, setProjetos] = useState(data_projetos)
    const [active, setActive] = useState('Todos')

    const handleFilterCategoria = (name) => {
        const novoArray = data_projetos.filter(projeto => projeto.categoria.includes(name))
        setProjetos(novoArray)
        setActive(name)
    }

    const projeto_variants = {
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
        <motion.div className="container_projetos"
            variants={projeto_variants}
            initial="hidden"
            animate="visible"
        >
            <div className="projetos__navbar">
                <div className={active === 'Todos' && 'projeto__navbar-active'} onClick={() => setProjetos(data_projetos)}>Todos</div>
                <div className={active === 'react' && 'projeto__navbar-active'} onClick={() => handleFilterCategoria('react')}>React</div>
                <div className={active === 'vue' && 'projeto__navbar-active'} onClick={() => handleFilterCategoria('vue')}>Vue</div>
                <div className={active === 'angular' && 'projeto__navbar-active'} onClick={() => handleFilterCategoria('angular')}>Angular</div>
                <div className={active === 'Marketing' && 'projeto__navbar-active'} onClick={() => handleFilterCategoria('Marketing')}>Marketing</div>
            </div>
            <div className="row">
                {
                    projetos.map(projeto =>
                        <ProjetoCard key={projeto.name} projeto={projeto} />)
                }
            </div>
        </motion.div>
    )
}

export default Projetos

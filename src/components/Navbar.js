import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState('')
    useEffect(() => {
        let correnteURL = window.location.href
        console.log(correnteURL)
        if (correnteURL.endsWith('/'))
            setActive('sobre')
        else if (correnteURL.endsWith('/resumo'))
            setActive('resumo')
        else if (correnteURL.endsWith('/projetos'))
            setActive('projetos')
    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'sobre' ?
                    <Link to={"/"}>
                        <div className="navbar__item" onClick={() => setActive("sobre")}>Sobre</div>
                    </Link> : null}
                {active !== 'resumo' ?
                    <Link to="/resumo">
                        <div className="navbar__item" onClick={() => setActive("resumo")}>Resumo</div>
                    </Link> : null}
                {active !== 'projetos' ?
                    <Link to="/projetos">
                        <div className="navbar__item" onClick={() => setActive("projetos")}>Projetos</div>
                    </Link> : null}
            </div>
        </div>
    )
}

export default Navbar

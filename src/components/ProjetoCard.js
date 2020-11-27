import React from 'react'
import { AiFillGithub } from "react-icons/ai";
function ProjetoCard({projeto: {name,image,url,github_url}}) {
    return (
        <div className="projetoCard col-md-6 col-lg-4 my-2">
            <figure className="projetoCard__content">
                <a href={url} target="_blank">
                    <img src={image} alt={name} className="projetoCard__image"/>
                </a>
                <div className="projetoCard__title">
                    <a href={github_url} target="_blank">
                        <AiFillGithub alt="github" className="projetoCard__icon"/>
                    </a>
                    {name}
                </div>
            </figure>
        </div>
    )
}

export default ProjetoCard

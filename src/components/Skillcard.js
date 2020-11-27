import React from "react"
import { AiFillApi } from "react-icons/ai";

const Skillcard = ({ skills: {api,title,sobre}}) => 
            <div className="col-lg-6">
                <div className="skill-card">
                    <img src={api} className="skill-card__icon"/>
                    <div className="skill-card-body">
                        <h6 className="skill-card__title" >{title}</h6>
                        <p className="skill-card__content">{sobre}</p>
                    </div>
                </div>
            </div>


export default Skillcard
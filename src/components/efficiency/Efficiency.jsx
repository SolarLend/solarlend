import React, { useState } from "react"
import * as cl from './Efficiency.module.css'
import classNames from 'classnames'

import ReactWOW from 'react-wow'


import first from '../../images/DJI_0701.png'
import sec from '../../images/DJI_0070.png'
import third from '../../images/2018-5.1.png'






export const Efficiency = ({ eff, lang }) => {



    return (
        <ReactWOW >
            <section className={classNames(cl.efficiency, "animate__animated animate__fadeInUp")}>
                <div className='titleWrap'>
                    <div className='title'>
                        {eff.effecttitle} <span> {eff.effectaccent} </span> {eff.afteraccent}
                        <div className='titleShade'>
                            {eff.effecttitle} <span> {eff.effectaccent} </span> {eff.afteraccent}
                        </div>
                    </div>


                </div>
                <div className={classNames(cl.imgwrap, "animate__animated animate__fadeInLeft")}>
                    <img className='img-fluid' src={first} alt="image" loading="lazy" />
                    <img className='img-fluid' src={sec} alt="image" loading="lazy" />
                    <img className='img-fluid' src={third} alt="image" loading="lazy" />
                </div>
                <div className={cl.bottomText}>
                    <div className={cl.bottomTextOne}>{eff.effecttext}</div>
                    <div className={cl.bottomTextTwo}>{eff.effectsubtext}</div>
                    <a href='#conatctForm' className={classNames('pop', cl.popCenter)}>
                        {lang === "uk" ? "Отримати консультацію" : "Получить консультацию"}
                    </a>
                </div>

            </section>
        </ReactWOW >
    )
}


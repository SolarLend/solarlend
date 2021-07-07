import React, { useState } from "react"
import * as cl from './Choose.module.css'
import classNames from 'classnames'

import ReactWOW from 'react-wow'

import firstim from '../../images/firstIcon.svg'
import secIm from '../../images/secondicon.svg'
import third from '../../images/thirdIcon.svg'
import fourth from '../../images/fourthIcon.svg'


export const Choose = (props) => {


    return (
        <ReactWOW>
            <section id="choose" className={classNames(cl.choose, "animate__animated animate__fadeInUp")}>
                <div className={classNames('titleWrap', cl.titleWrap)}>
                    <div className={classNames('title', cl.title)} >
                        {props.ch.choosetitle}
                        <div className='titleShade'>
                            {props.ch.choosetitle}
                        </div>
                    </div>
                </div>

                <div className={classNames(cl.itemWrap)}>
                    <ReactWOW>
                        <div className={classNames(cl.item, "animate__animated animate__fadeInUp")}>
                            <div className={cl.num}>
                                01
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitleone}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetextone}
                            </div>
                        </div>
                        <div className={classNames(cl.item, "animate__animated animate__fadeInUp")}>
                            <div className={cl.num}>
                                02
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitletwo}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetexttwo}
                            </div>
                        </div>
                        <div className={classNames(cl.item, "animate__animated animate__fadeInUp")}>
                            <div className={cl.num}>
                                03
                            </div>
                            <div className={cl.infotitle}>
                                {props.ch.chooseblocks.choosetitlethree}
                            </div>
                            <div className={cl.info}>
                                {props.ch.chooseblocks.choosetextthree}
                            </div>
                        </div>
                    </ReactWOW>
                </div>

                <div className={cl.imageWrap}>
                    <img className="img-fluid" src={props.ch.chooseimage.sourceUrl} alt="image" loading="lazy" />
                </div>
                <div className={cl.iconswrap}>
                    <ReactWOW>
                        <div className={classNames(cl.iconItem, "animate__animated animate__fadeInLeft")}>
                            <img src={firstim} alt="icon" loading="lazy" />
                            <p>{props.ch.chooseicons.chooseicontextone}</p>
                        </div>
                        <div className={classNames(cl.iconItem, "animate__animated animate__fadeInLeft")}>
                            <img src={secIm} alt="icon" loading="lazy" />
                            <p>{props.ch.chooseicons.chooseicontexttwo}</p>
                        </div>
                        <div className={classNames(cl.iconItem, "animate__animated animate__fadeInLeft")}>
                            <img src={third} alt="icon" loading="lazy" />
                            <p>{props.ch.chooseicons.chooseicontextthree}</p>
                        </div>
                        <div className={classNames(cl.iconItem, "animate__animated animate__fadeInLeft")}>
                            <img src={fourth} alt="icon" loading="lazy" />
                            <p>{props.ch.chooseicons.chooseicontextfour}</p>
                        </div>
                    </ReactWOW>
                </div>
            </section>
        </ReactWOW>
    )
}
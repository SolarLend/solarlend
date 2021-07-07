import React from "react"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import * as cl from './Steps.module.css'
import classNames from 'classnames'

import step1 from '../../images/step-1.svg'
import step2 from '../../images/step-2.svg'
import step3 from '../../images/step-3.svg'

import ReactWOW from 'react-wow'

export const Steps = ({ st }) => {

    return (
        <ReactWOW>
            <section id="steps" className={classNames(cl.stepsWrap, "animate__animated animate__fadeInUp")}>
                <div className='titleWrap'>
                    <div className={classNames('title')}>
                        {st.steptitle}
                        <div className={classNames('titleShade', cl.titleShade)}>
                            {st.steptitle}
                        </div>
                    </div>
                </div>
                <div className={cl.steps}>

                    <div className={cl.stepItem}>
                        <div className={cl.stepnum}>
                            01
                        </div>
                        <div className={cl.steptitle}>
                            {st.stepblock.steptitleone}
                        </div>
                        <div className={cl.icon}>
                            <img className="img-fluid" src={step1} alt="Steps" loading="lazy" />
                        </div>
                        <div className={cl.list} dangerouslySetInnerHTML={{ __html: st.stepblock.steptextone }} />

                    </div>
                    <div className={cl.stepItem}>
                        <div className={cl.stepnum}>
                            02
                        </div>
                        <div className={cl.steptitle}>
                            {st.stepblock.steptitletwo}
                        </div>
                        <div className={cl.icon}>
                            <img className="img-fluid" src={step2} alt="Steps" loading="lazy" />
                        </div>
                        <div className={classNames(cl.list, cl.black)} dangerouslySetInnerHTML={{ __html: st.stepblock.steptexttwo }} />


                    </div>
                    <div className={cl.stepItem}>
                        <div className={cl.stepnum}>
                            03
                        </div>
                        <div className={cl.steptitle}>
                            {st.stepblock.steptitlethree}
                        </div>
                        <div className={cl.icon}>
                            <img className="img-fluid" src={step3} alt="Steps" loading="lazy" />
                        </div>
                        <div className={cl.list} dangerouslySetInnerHTML={{ __html: st.stepblock.steptextthree }} />

                    </div>
                </div>
                <div className={classNames(cl.mobsteps, "mobsteps")}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={true}
                        // autoPlaySpeed={3000}
                        centerMode={false}
                        className={cl.objSlider}
                        containerClass="slidercontainer"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 771,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            }
                        }}
                        showDots={true}
                        sliderClass="sliderClass"
                        slidesToSlide={1}
                        swipeable
                    >

                        <div className={cl.stepItem}>
                            <div className={cl.stepnum}>
                                01
                            </div>
                            <div className={cl.steptitle}>
                                {st.stepblock.steptitleone}
                            </div>
                            <div className={cl.icon}>
                                <img className="img-fluid" src={step1} alt="Decor" />
                            </div>
                            <div className={cl.list} dangerouslySetInnerHTML={{ __html: st.stepblock.steptextone }} />

                        </div>
                        <div className={cl.stepItem}>
                            <div className={cl.stepnum}>
                                02
                            </div>
                            <div className={cl.steptitle}>
                                {st.stepblock.steptitletwo}
                            </div>
                            <div className={cl.icon}>
                                <img className="img-fluid" src={step2} alt="Decor" />
                            </div>
                            <div className={classNames(cl.list, cl.black)} dangerouslySetInnerHTML={{ __html: st.stepblock.steptexttwo }} />


                        </div>
                        <div className={cl.stepItem}>
                            <div className={cl.stepnum}>
                                03
                            </div>
                            <div className={cl.steptitle}>
                                {st.stepblock.steptitlethree}
                            </div>
                            <div className={classNames(cl.icon, cl.notMargin)}>
                                <img className="img-fluid" src={step3} alt="Decor" />
                            </div>
                            <div className={cl.list} dangerouslySetInnerHTML={{ __html: st.stepblock.steptextthree }} />

                        </div>


                    </Carousel>
                </div>
            </section>
        </ReactWOW>
    )
}
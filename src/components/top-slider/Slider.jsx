import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import decor from '../../images/slider-decor.svg'
import classNames from "classnames";
import * as cl from './Slider.module.css';
import right from '../../images/right.svg'
import left from '../../images/left.svg'
import faceBook from '../../images/facebookblack.svg'
import youTube from '../../images/youtube.svg'
import insta from '../../images/instagram.svg'




const ArrowLeft = (props) => {
    return (
        <>
            <img src={left} alt="left arrow" />
            <div className={cl.index}>{props.index + 1}/{props.mainSliderArray.length}</div>
        </>

    )
}




const Slider = (props) => {

    const mainSliderArray = props.slides.map((slide, index) => {
        return <Carousel.Item key={index}>
            <img
                className="d-block w-100"
                src={slide.image.sourceUrl}
                alt="Slide"

            />
            <Carousel.Caption className={cl.caption}>
                <div className={cl.decor}>
                    <img src={decor} alt="decor" />
                    <p className={cl.decortext}>{slide.title}</p>
                </div>

                <p className={cl.text}>{slide.subtitle}</p>
                <a href='#conatctForm' className={classNames('pop', cl.mobBtn)}> {props.lang === "uk" ? "Отримати консультацію" : "Получить консультацию"}</a>
            </Carousel.Caption>
        </Carousel.Item>
    })


    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className={cl.carouselWrap}>
            <Carousel prevIcon={<ArrowLeft index={index} mainSliderArray={mainSliderArray} />} nextIcon={<img src={right} alt="next icon" />} className="topSlider" activeIndex={index} onSelect={handleSelect}>

                {mainSliderArray}

            </Carousel>
            <div className={cl.socWrap}>

                <div className={classNames(cl.socialWrap)}>

                    <div className={cl.textLink}>
                        {props.lang === "uk" ? "Приєднуйся" : "Подпишись"}
                    </div>
                    <div className={cl.decorLine}></div>
                    <div className={cl.social}>
                        <a href={props.facebook} target="_blank" rel="noreferrer"> <img src={faceBook} alt="faceBook" loading="lazy" /> </a>
                        <a href={props.youtube} target="_blank" rel="noreferrer"> <img className={cl.you} src={youTube} alt="youtube" loading="lazy" /> </a>
                        <a href={props.instagram} target="_blank" rel="noreferrer"> <img src={insta} alt="instagarm" loading="lazy" /> </a>
                    </div>

                </div>

            </div>

            {/* <div className={cl.index}>{index + 1}/{mainSliderArray.length}</div> */}
        </div>
    )
}

export default Slider
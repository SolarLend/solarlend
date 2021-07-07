import React, { useRef, useState } from "react"
import * as cl from './Modal.module.css'
import Carousel from 'react-multi-carousel'
import classNames from 'classnames'
import close from '../../images/plus.svg'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'



export const Modal = ({ lang, objData, handleClose, show, delBodyClassFunc }) => {


    const [isOpen, setOpen] = useState(false)
    const [photoIndex, setIndex] = useState(0)
    const [id, setId] = useState(0)

    const images = objData.solarObj.objimages.map((node) => {
        return node.sourceUrl
    })

    let closeFunc = () => {
        handleClose();
        delBodyClassFunc()

    }

    let objImages = null;
    let arrayObjImages = null;
    if (objData != {}) {
        arrayObjImages = objData.solarObj.objimages;
        objImages = arrayObjImages.map((image, key) => {
            return <div className={cl.imgWrap}> <img onClick={() => {
                setOpen(true)
                setIndex(key)
            }} src={image.sourceUrl} /> </div>
        });
    }

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    if (show && objData != {}) {
        return (<div onTouchMove={(e) => {
            e.preventDefault()
        }} className={showHideClassName}>
            <section className='modal-main mod'>
                <div onClick={closeFunc} className={cl.closebtn}>
                    <img src={close} alt="close button" />
                </div>
                <div className={cl.contentWrap}>
                    <div className={cl.leftItem}>

                        <div className={cl.images}>
                            {objImages}
                        </div>
                        <div className={classNames(cl.mobImages, "mobImages")}>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={3000}
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
                                        items: 3,
                                        partialVisibilityGutter: 40
                                    },
                                    mobile: {
                                        breakpoint: {
                                            max: 770,
                                            min: 0
                                        },
                                        items: 1,
                                        partialVisibilityGutter: 30
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 1024,
                                            min: 770
                                        },
                                        items: 2,
                                        partialVisibilityGutter: 30
                                    }
                                }}
                                showDots={true}
                                sliderClass="sliderClass"
                                slidesToSlide={1}
                                swipeable
                            >

                                {objImages}


                            </Carousel>
                        </div>

                    </div>
                    <div className={cl.rightItem}>
                        <h2 dangerouslySetInnerHTML={{ __html: objData.title }} />
                        <p dangerouslySetInnerHTML={{ __html: objData.content }} />
                        <a href='#conatctForm' onClick={closeFunc} className={classNames('pop', cl.popCenter)}> {lang === "uk" ? "Залишити заявку" : "Оставить заявку"}</a>
                    </div>
                </div>
                <div className={cl.imgModalWrap}>{
                    isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setOpen(false)}
                            onMovePrevRequest={() =>
                                setIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )
                }</div>

            </section>
        </div>)
    }
    if (!show) {
        return (
            <></>
        );
    }

};


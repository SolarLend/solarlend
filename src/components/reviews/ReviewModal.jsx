import React from "react"
import * as cl from './Reviews.module.css'

import 'react-image-lightbox/style.css';
import close from '../../images/plus.svg'




export const ReviewModal = ({ rewLink, handleClose, show, }) => {

    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    // let videoRef = useRef(null);


    // let pauseVideo = () => {
    //     handleClose()
    //     videoRef.current.pause()
    // }
    if (show) {
        return (<div className={showHideClassName}>
            <section className='modal-main rew-modal'>
                <div role="button" onClick={handleClose} className={cl.closebtn}>
                    <img src={close} alt="close button" />
                </div>
                <iframe width="100%" height="100%"
                    src={rewLink}
                    title="Review"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </section>
        </div>)
    }
    if (!show) {
        return (
            <></>
        );
    }

};


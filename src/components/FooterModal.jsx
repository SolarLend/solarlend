import React, { useRef, useState } from "react"
// import * as cl from './Modal.module.css'
import classNames from 'classnames'
import close from '../images/plus.svg'

import 'react-image-lightbox/style.css'



export const FooterModal = ({ lang, text, handleClose, show }) => {

   const [isOpen, setOpen] = useState(false)
   const [photoIndex, setIndex] = useState(0)
   const [id, setId] = useState(0)


   const showHideClassName = show ? 'modal display-block' : 'modal display-none';

   if (show) {
      return (<div className={showHideClassName}>
         <section className='modal-main'>
            <div onClick={handleClose} className="closebtn">
               <img src={close} alt="close button" />
            </div>

            <h3 className="privTitle"> {lang === "uk" ? "Політика конфіденційності" : "Политика конфиденциальности"}</h3>

            <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>

         </section>
      </div>)
   }
   if (!show) {
      return (
         <></>
      );
   }

};


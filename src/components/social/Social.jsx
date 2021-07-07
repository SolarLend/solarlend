import React from "react";
import classNames from "classnames";

import * as cl from './Social.module.css'



import faceBook from '../../images/facebookblack.svg'
import youTube from '../../images/youtube.svg'
import insta from '../../images/instagram.svg'


export const Social = (props) => {

   return (
      <div className={classNames(cl.socialWrap)}>

         <div className={cl.text}>
            {props.lang === "uk" ? "Приєднуйся" : "Присоединяйся"}
         </div>
         <div className={cl.decorLine}></div>
         <div className={cl.social}>
            <a href={props.facebook} target="_blank" rel="noreferrer"> <img src={faceBook} alt="faceBook" /> </a>
            <a href={props.youtube} target="_blank" rel="noreferrer"> <img className={cl.you} src={youTube} alt="youtube" /> </a>
            <a href={props.instagram} target="_blank" rel="noreferrer"> <img src={insta} alt="instagarm" /> </a>
         </div>

      </div>
   )
}
import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

import * as cl from './Footer.module.css'


import logo from '../images/logo.svg'
import decor from '../images/decorFooter.png'
import faceBook from '../images/facebookblack.svg'
import youTube from '../images/youtube.svg'
import insta from '../images/instagram.svg'





export const Footer = (props) => {



   const menu = props.headerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
      return <Nav.Link key={index} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
   })



   return <footer className={cl.footer}>
      <div className={cl.logo}>
         <img src={logo} />
      </div>
      <div className={cl.footerMiddle}>
         <div className={cl.footerMiddleLeft}>
            {menu}
         </div>
         <div className={cl.footerMiddleRight}>
            <img className={cl.decor} src={decor} alt="decor" />
            <div className={cl.footerText}>
               {props.lang === "uk" ? "Приєднуйся до соціальних мереж" : "Подпишись на социальные сети"}
            </div>
            <div className={cl.decorLine}></div>
            <div className={cl.social}>
               <a href={props.facebook} target="_blank"> <img src={faceBook} alt="faceBook" /> </a>
               <a href={props.youtube} target="_blank"> <img className={cl.you} src={youTube} alt="youtube" /> </a>
               <a href={props.instagram} target="_blank"> <img src={insta} alt="instagarm" /> </a>
            </div>
         </div>
      </div>
      <div className={cl.footerCopy}>
         <div className={cl.copyLeft}>
            <span> {props.lang === "uk" ? "Рорзробка сайта:" : "Разработка сайта:"} </span><a href="#">ESTET DESIGN GROUP</a>
         </div>
         <div className={cl.copyRight}>
            <p>© 2021 Solarland. {props.lang === "uk" ? "Усі права захищенні" : "Все права защищены:"} </p>
            <p>{props.lang === "uk" ? <span className="prPolicy" onClick={props.showModal}> Політика конфіденційності </span> : <span className="prPolicy" onClick={props.showModal}> Политика конфиденциальности</span>}</p>
         </div>
      </div>
   </footer>
}

import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import classNames from "classnames";
import logo from '../images/logo.svg'
import { Social } from './social/Social'

import location from '../images/Location.svg'
import kiyvstar from '../images/kiyvstar.svg'
import vodaphone from '../images/vodafonelogo.svg'
import life from '../images/life.svg'
import mail from '../images/Message.svg'
import phonecall from '../images/phonecall.svg'
import close from '../images/plus.svg'




export const Header = (props) => {

    const menu = props.headerMenu[0].node.menuItems.nodes.map((menuItem, index) => {
        return <Nav.Link key={index} onClick={() => {
            setExpanded(false)
            setClass()
        }} as={Link} to={menuItem.path}>{menuItem.label}</Nav.Link>
    })


    const [expanded, setExpanded] = useState(false);






    const [pos, setPosition] = useState("")

    const [cls, setCls] = useState("");

    let setClass = () => {
        if (cls === "") {
            setCls("active")
        }
        else setCls("")
    }

    return <Navbar expanded={expanded} expand="lg" className={pos}>
        <Navbar.Brand as={Link} to="/"><img className="img-fluid logoImg" src={logo} alt="Logo" loading="lazy" /></Navbar.Brand>

        <div className="mobphone">
            <Dropdown>
                <div className="dropWrap phones">

                    <Dropdown.Toggle className="phones mob-phones-view" id="dropdown-basic" >

                        <div className="secShadow" onClick={() => {
                            setPosition("")
                        }}>
                            <img className="phonecall" src={phonecall} />
                        </div>

                    </Dropdown.Toggle>


                </div>


                <Dropdown.Menu>
                    <Dropdown.Toggle className="phones phoneInside" id="dropdown-basic">

                        <div className="clasePhwrap" onClick={() => {
                            setPosition("")
                        }}>
                            <img className="closePhone" src={close} />
                        </div>

                    </Dropdown.Toggle>
                    <Dropdown.Item className="  phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" loading="lazy" />  {props.kiyvstar.title}</Dropdown.Item>
                    <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="vodaphone" loading="lazy" />  {props.vodafone.title}</Dropdown.Item>
                    <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" loading="lazy" /> {props.life.title}</Dropdown.Item>

                    <div className="mobaddress dropdown-item" > <img src={location} loading="lazy" /> <span>{props.adress}</span> </div>

                    <Dropdown.Item className="mailLink" href={props.mail.url}> <img src={mail} alt="mail" loading="lazy" /> {props.mail.title}</Dropdown.Item>

                    <p className="descAddr text-center mt-2 dropdown-item">{props.lang === "uk" ? "пн. - пт. з 9:00 до 18:00" : "пн. - пт. c 9:00 до 18:00"}</p>

                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className="menu-btn-wrap">
            <Navbar.Toggle onClick={() => {
                setExpanded(expanded ? false : "expanded")
                setClass()
            }} aria-controls="basic-navbar-nav">

                <div className={classNames("headertopnav", cls)}>
                    <div className="headertopnavbtn">
                        Меню
                    </div>
                </div>

            </Navbar.Toggle>
        </div>




        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-left-auto nav-wrapper">

                <div className="lang mobLang">
                    <Link activeClassName="active" to="/"> RU </Link>
                    <Link activeClassName="active" to="/uk"> UA </Link>
                </div>

                {menu}

                <div className="mobSocialWrap">
                    <div className="phonesMenuWrap">
                        <Dropdown.Item className="phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" loading="lazy" />  {props.kiyvstar.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" loading="lazy" />  {props.vodafone.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" loading="lazy" /> {props.life.title}</Dropdown.Item>

                    </div>


                    <Social
                        lang={props.lang}
                        facebook={props.facebook}
                        youtube={props.youtube}
                        instagram={props.instagram}
                    />
                </div>

            </Nav>






            <div className="btnWrap row">
                <Dropdown className="desckPhone">
                    <div className="dropWrap phones">
                        <div className="desc-phones-wrap">
                            <Dropdown.Item className="phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" loading="lazy" /> {props.kiyvstar.title}</Dropdown.Item>
                            <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" loading="lazy" />  {props.vodafone.title}</Dropdown.Item>
                            <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" loading="lazy" /> {props.life.title}</Dropdown.Item>
                        </div>
                    </div>


                    <Dropdown.Menu>
                        <Dropdown.Item className="phoneNum" href={props.kiyvstar.url}><img src={kiyvstar} alt="kiyvstar" loading="lazy" /> {props.kiyvstar.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.vodafone.url}><img src={vodaphone} alt="life" loading="lazy" />  {props.vodafone.title}</Dropdown.Item>
                        <Dropdown.Item className="phoneNum" href={props.life.url}> <img src={life} alt="life" loading="lazy" /> {props.life.title}</Dropdown.Item>


                        <div className="descAddr dropdown-item" > <img src={location} loading="lazy" /> <span>{props.adress}</span> </div>

                        <Dropdown.Item className="mailLink" href={props.mail.url}> <img src={mail} alt="mail" loading="lazy" /> {props.mail.title}</Dropdown.Item>

                        <p className="descAddr dropdown-item"> {props.lang === "uk" ? "пн. - пт. з 9:00 до 18:00" : "пн. - пт. c 9:00 до 18:00"} </p>

                    </Dropdown.Menu>
                </Dropdown>
                <div className="lang descLang">

                    <Link className={props.lang === "uk" ? "" : "active"} activeClassName="active" to="/"> RU </Link>
                    <Link className={props.lang === "uk" ? "active" : ""} activeClassName="active" to="/uk"> UA </Link>

                </div>
                <a href='#conatctForm' className={'pop headerPop'}>
                    {props.lang === "uk" ? "Залишити заявку " : "Оставить заявку"}
                </a>

            </div>

        </Navbar.Collapse>
    </Navbar>
}


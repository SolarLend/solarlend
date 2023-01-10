import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { Nav } from 'react-bootstrap';
import { Link } from "gatsby";
import { Header } from "../Header"
import { Footer } from "../Footer"
import Head from "../Head"
import { FooterModal } from '../FooterModal'

const PrimaryLayout = (props) => {

    const [show, setState] = useState(false)

    let showModal = () => {
        setState(true)
    }
    let hideModal = () => {
        setState(false)
    }


     const menuRu = [
        {
            label: "Почему соларленд",
            path: "#choose"
        },
        {
            label: "Этапы работ",
            path: "#steps"
        },
        {
           label: "Объекты",
            path: "#obj"
        },
        {
           label: "Стоимость",
            path: "#price"
        },
          {
           label: "Отзывы",
            path: "#rev"
        },
           {
           label: "Контакты",
            path: "#address"
        },
    ]

        const menuUa = [
        {
            label: "Чому solarland",
            path: "#choose"
        },
        {
            label: "Етапи робіт",
            path: "#steps"
        },
        {
           label: "Об’єкти",
            path: "#obj"
        },
        {
           label: "Вартість",
            path: "#price"
        },
          {
           label: "Відгуки",
            path: "#rev"
        },
           {
           label: "Контакти",
            path: "#address"
        },
    ]


    let headerMenu = props.lang === "uk" ? menuUa : menuRu;




    return <>
        <Head lang={props.lang} />
        <Header
            adress={props.adress}
            kiyvstar={props.kiyvstar}
            mail={props.mail}
            vodafone={props.vodafone}
            life={props.life}
            headerMenu={headerMenu}
            lang={props.lang}
            facebook={props.facebook}
            youtube={props.youtube}
            instagram={props.instagram}
        />
        {props.children}
        <Footer

            lang={props.lang}
            facebook={props.facebook}
            youtube={props.youtube}
            instagram={props.instagram}
            headerMenu={headerMenu}
            showModal={showModal}
        />
        <FooterModal handleClose={hideModal} lang={props.lang} text={props.text} show={show} />
    </>
}

export default PrimaryLayout;



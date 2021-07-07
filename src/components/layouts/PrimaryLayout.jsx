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


    let headerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')
    // let footerMenu = props.menu.edges.filter((edge) => edge.node.slug === 'main-menu-ua' || edge.node.slug === 'main-menu-ru')





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



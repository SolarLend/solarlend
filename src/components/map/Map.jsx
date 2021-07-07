import React, { useState, useEffect } from "react";
import classNames from "classnames";
import * as cl from './Map.module.css'
import GoogleMapReact from 'google-map-react';

import pin from '../../images/pin.svg'
import ContactForm from "./Forma";



export const Map = (props) => {

    return (
        <div className={cl.mapWrap} style={{ height: '650px', width: '100%' }} >

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9320093256492!2d30.630130715731124!3d50.442367079474224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5353d9bd505%3A0x4d508f4f83864e98!2zU29sYXJsYW5kIC0g0YHQvtC90Y_Rh9C90ZYg0LXQu9C10LrRgtGA0L7RgdGC0LDQvdGG0ZbRlw!5e0!3m2!1sru!2sua!4v1625652285734!5m2!1sru!2sua" style={{ height: '650px', width: '100%', border: 'none' }} disableDefaultUI="true" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <ContactForm lang={props.lang} />

        </div>
    )
}
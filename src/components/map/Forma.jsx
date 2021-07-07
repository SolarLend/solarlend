import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import classNames from "classnames";
import * as cl from './Forma.module.css'

import ReactWOW from 'react-wow'

import location from '../../images/Location.svg'
import kiyvstar from '../../images/kiyvstar.svg'
import vodaphone from '../../images/vodafonelogo.svg'
import life from '../../images/life.svg'
import mail from '../../images/Message.svg'
import check from '../../images/checkgreen.svg'

import InputMask from 'react-input-mask';


const ContactForm = (props) => {
    const WEBSITE_URL = 'https://solarland.s-tet.top';
    const FORM_ID = '100'; //Form id that provides Contact Form 7

    const [token, setToken] = useState('') // store token
    const [isSuccessMessage, setIsSuccessMessage] = useState(false) // manage is success message state
    const [messageSent, setMessageSent] = useState(false) // manage sent message state

    // this effect function authenticates our subcriber user to get a token
    useEffect(() => {
        axios({
            method: 'post',
            url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
            data: {
                username: 'solarUser', // provide a user credential with subscriber role
                password: 'Fg2KUZ9YOqC94QF!D$'
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            setToken(response.data.token)
        }).catch(error => console.error('Error', error))
    }, [])

    const [classActive, setClass] = useState('')
    const [hideForm, sethideForm] = useState('')

    let setClassActive = () => {

        if (classActive === 'active') {
            setClass('')
        }
        else setClass('active')
    }

    // use useFormik hook using object destructuring assignment to extract helpful methods
    const {
        handleChange,
        isSubmitting,
        values,
        handleSubmit,
    } = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            phone: '',
        },
        onSubmit: ({
            fullname,
            email,
            phone
        }, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            // here we created a FormData field for each form field
            const bodyFormData = new FormData();
            bodyFormData.set('fullname', fullname);
            bodyFormData.set('email', email);
            bodyFormData.set('phone', phone);

            // here we sent
            axios({
                method: 'post',
                url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
                data: bodyFormData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                // console.log(response)
                // actions taken when submission goes OK
                resetForm()
                setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(true)
            }).catch(error => {
                // actions taken when submission goes wrong
                setSubmitting(false)
                setMessageSent(true)
                setIsSuccessMessage(false)
            })
        },
    })

    const [addrId, setAddrId] = useState("address")
    const [mobaddrId, setmobAddrId] = useState("")

    useEffect(() => {
        if (window.innerWidth < 768) {
            setmobAddrId("address")
            setAddrId("")
        } if (window.innerWidth > 768) {
            setmobAddrId("")
            setAddrId("address")
        }


    }, []);



    useEffect(() => {

        setTimeout(() => {
            // this will reset messageSent and isSuccessMessage state
            setMessageSent(false)
            setIsSuccessMessage(false)
        }, 10000);
        // this effect function will be dispatched when isSuccessMessage or messageSent changes its state
    }, [isSuccessMessage, messageSent])

    return (
        <ReactWOW>
            <div className={classNames(cl.addressWrap, "animate__animated animate__fadeInRight")}>



                {messageSent && isSuccessMessage && (

                    <div className={classNames(cl.addressTop, cl.thankWrap)}>

                        <div className={cl.checkWrap}>
                            <img src={check} alt="check" />
                        </div>
                        <div className={cl.addrTitle, cl.thanktitle}>
                            {props.lang === "uk" ? "Заявка прийнята" : "Заявка принята"}
                        </div>
                        <div className={cl.thanktext}>
                            {props.lang === "uk" ? "Спасибі, ми зв'яжемося з Вами найближчим часом!" : "Спасибо, мы свяжемся с вами в ближайшее время!"}
                        </div>

                    </div>
                ) || (
                        <div className={classNames(cl.addressTop, hideForm)}>

                            <div className={cl.addrTitle}>
                                {props.lang === "uk" ? "Залишити заявку" : "Оставить заявку"}
                            </div>


                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className={classNames(cl.inputWrap, 'inputWrap')}>

                                        <input
                                            id="fullname"
                                            name="fullname"
                                            type="text"
                                            placeholder={props.lang === "uk" ? "Ім’я*" : "Імя*"}
                                            onChange={handleChange}
                                            value={values.fullname}
                                            required
                                        />
                                    </div>
                                    <div className={classNames(cl.inputWrap, 'inputWrap')}>

                                        <InputMask
                                            id="phone"
                                            name="phone"
                                            type="phone"
                                            placeholder={props.lang === "uk" ? "Номер телефону*" : "Номер телефона*"}
                                            onChange={handleChange}
                                            value={values.number}
                                            required
                                            mask="+38 (999) 999 9999"
                                        />
                                    </div>
                                    <div className={classNames(cl.inputWrap, 'inputWrap')}>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="E-mail"
                                            onChange={handleChange}
                                            value={values.email}

                                        />
                                    </div>

                                </fieldset>
                                <div>
                                    <button className={classNames('pop', cl.formBtn, `${isSubmitting ? 'disabled' : ''}`)}
                                        type="submit"
                                        value="Send Message"
                                        disabled={isSubmitting}
                                    >
                                        {props.lang === "uk" ? "Замовити" : "Заказать"}

                                    </button>
                                </div>

                            </form>
                            <div id={addrId} ></div>

                        </div>
                    )}
                {messageSent && !isSuccessMessage && (
                    <div>
                        {props.lang === "uk" ? "Вибачте Ваше повідомлення не було надіслано. Спробуйте будьласка пiзнiше" : "Извините Ваше сообщение не было отправлено. Пожалуйста попробуйте позже"}
                    </div>
                )}

                <div className={cl.addressBottom}>
                    <div className="mobAddr" id={mobaddrId}></div>
                    <p className={cl.addr}><img src={location} alt="" />
                        {props.lang === "uk" ? "мiсто Київ, вулиця Володимира Сосюри, 6, офіс 219" : "город Киев, улица Владимира Сосюры, 6, офис 219"}


                    </p>
                    <div className={cl.phonesMobWrap}>

                        <p className={cl.phone}><img src={kiyvstar} alt="" /><a href="tel:+380677839000">+38 (067) 783-90-00</a></p>
                        <p className={cl.phone}><img src={vodaphone} alt="" /><a href="tel:+380957839000"> +38 (095) 783-90-00</a></p>
                        <p className={cl.phone}><img src={life} alt="" /><a href="tel:+380637839000">  +38 (063) 783-90-00</a></p>

                    </div>

                    <p className={cl.mail}><img src={mail} alt="" /><a href="mailto:office@solarland.com.ua">  office@solarland.com.ua</a></p>
                    <p className={cl.schedule}>
                        {props.lang === "uk" ? "пн. - пт. з 9:00 до 18:00" : "пн. - пт. c 9:00 до 18:00"}
                    </p>
                </div>
            </div>
        </ReactWOW>
    )
};

export default ContactForm
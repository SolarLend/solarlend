import React from "react";
import { Helmet } from "react-helmet"

import favicon from "../images/fav.png"
import logo from "../static/logo.png"

const Head = (props) => {
    let lang = props.lang;
    // console.log(lang)
    return (
        <Helmet htmlAttributes={{
            lang: `${lang}`,
        }}

        >
            <meta charSet="utf-8" />
            <title> {lang === "uk" ? "Сонячні електростанції в Україні | Solarland" : "Солнечные электростанции в Украине | Solarland"} </title>
            <link rel="icon" href={favicon} />
            <meta property="og:title" content={lang === "uk" ? "Сонячні електростанції в Україні" : "Солнечные электростанции в Украине"} />
            <meta property="og:description" name="description" content="Солнечные электростанции в Украине | Solarland" />
            <meta property="og:image" content="https://admin.solarland.com.ua/wp-content/uploads/2021/07/666.jpg" />
            <meta property="og:image:secure_url" content="https://admin.solarland.com.ua/wp-content/uploads/2021/07/666.jpg" />
            <meta property="og:image:url" content="https://admin.solarland.com.ua/wp-content/uploads/2021/07/666.jpg" />
            
        
         <meta name="facebook-domain-verification" content="0e9kqir83xd56oflx6u7pu24opkkgu" />

        </Helmet>
    )
}

export default Head

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
            
            <!-- Facebook Pixel Code --><script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '452446356310331'); fbq('track', 'PageView'); </script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=452446356310331&ev=PageView&noscript=1" /></noscript>

<!-- End Facebook Pixel Code -->
<meta name="facebook-domain-verification" content="0e9kqir83xd56oflx6u7pu24opkkgu" />

        </Helmet>
    )
}

export default Head

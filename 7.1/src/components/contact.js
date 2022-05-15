import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Contact() {

    const {lang} = useParams();

    console.log(lang);
    if (lang === "us") {
        return (
            <div>AKTUALNY ADRES: "/contact/us"</div>
        )
    }
    if (lang === "pl") {
        return (
            <div>AKTUALNY ADRES: "/contact/pl"</div>
        )
    }
    if (lang === "de") {
        return (
            <div>AKTUALNY ADRES: "/contact/de"</div>
        )
    }
    if (lang === undefined) {
        return (
            <div>AKTUALNY ADRES: "/contact"</div>
        )
    }
    else{
        return (
            <Error/>
        )
    }
}

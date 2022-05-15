import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Div() {

    const {a, b} = useParams();

    if (parseFloat(b) === 0) {
        return <h1>NIE MOŻNA DZIELIĆ PRZEZ 0</h1>
    }

    return (
        <div>Wynik dzielenia {a} / {b} to: {parseFloat(a)/parseFloat(b)}</div>
    )
}

import {useParams} from "react-router-dom";

export default function Add() {
    const {a, b} = useParams();

    return (
        <div>Wynik dodawania {a} + {b} to: {parseFloat(a)+parseFloat(b)}</div>
    )
}
import {useParams} from "react-router-dom";

export default function Sub() {
    const {a, b} = useParams();

    return (
        <div>Wynik odejmowania {a} - {b} to: {parseFloat(a)-parseFloat(b)}</div>
    )
}
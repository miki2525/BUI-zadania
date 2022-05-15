import {useLocation} from 'react-router-dom';
export default function Error() {
    let location = useLocation();

    return (
        <div>Nie znaleziono elementu: {location.pathname}</div>
    )
}
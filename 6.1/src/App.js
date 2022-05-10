import React, {useEffect, useState} from 'react';
import DisplayData from "./displayData";
import './displayData.scss'



function App() {
    const [fetchedData, setFetchedData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch("https://randomuser.me/api")
            .then(data => data.json())
            .then(setFetchedData)
            .then(() => setLoading(false))
            .catch(setError)
    }
    if (loading) {
        return (
            <p>loading...</p>);
    }
    if (fetchData === undefined) {
        return (<pre>{JSON.stringify(error, null, 2)}</pre>);
    }
    return (<div>
        <DisplayData data={fetchedData}/>
                <button id="btn" onClick={() => fetchData()}>Generuj nową osobę!</button>
        </div>
    );
}

export default App;

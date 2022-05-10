export default function DisplayData({data}) {
    return (
        <>
            <h1 className="title">Generator osób</h1>
            <div className="user-profile">
                <img id="img" src={data.results[0].picture.large}/>
                <div id="name">Imię i nazwisko: {data.results[0].name.first + " " + data.results[0].name.last}</div>
                <div className="description">
                    <div>Username: <span id="username">{data.results[0].login.username}</span></div>
                    <div>Email: <span id="email">{data.results[0].email}</span></div>
                    <div>Miasto: <span id="city">{data.results[0].location.city}</span></div>
                </div>
            </div>
        </>
    );
}
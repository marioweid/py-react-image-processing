import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState("");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>

                <h2>{data}</h2>
                <button onClick={call_backend}>Click Me!</button>
            </header>
        </div>
    );

    function call_backend() {
        // @ts-ignore
        fetch(process.env.REACT_APP_API_URL, {mode: 'cors'})
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(e => console.log(e));
    }
}


export default App;

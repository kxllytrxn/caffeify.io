import React, { useEffect } from 'react';
import Homepage from './Homepage';
import { useDataLayerValue } from './DataLayer';
import Footer from './components/Footer';
import "./App.css";

function App() {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
    const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT
    const RESPONSE_TYPE = process.env.REACT_APP_REPONSE_TYPE

    const scopes = ['user-top-read']
    const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`

    const [{ token }, dispatch] = useDataLayerValue();
    console.log("token: ", token)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        dispatch({
            type: "SET_TOKEN",
            payload: token
        });
    }, []);

    const setLogout = () => dispatch({
        type: "SET_TOKEN",
        payload: null
    });

    return (
        <div className='App' id='html'>
            <header className="App-header">
                <h1 className="title"> Caffeify </h1>
            </header>
            <body id="my-body">
                 {!token ? <a id="log" href={loginURL}> place your order</a>  
                    :   
                    <button id="log" onClick={setLogout}> logout </button>
                }
                 {!token ?  <h3 className="desc"> get your personalized coffee order based on your listening history</h3>
                    : <Homepage id="my-body" />
                }  
            </body>
            <Footer />
      </div>
    );
}

export default App;

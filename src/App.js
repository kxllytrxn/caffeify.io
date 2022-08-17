import React, { useEffect } from 'react';
import Homepage from './Homepage';
import { useDataLayerValue } from './DataLayer';
import Footer from './Footer';
import "./App.css";

function App() {
    const CLIENT_ID = "890e1d31bcfd46d985599fb22ce21ec2"
    const REDIRECT_URI = "http://kxllytrxn.github.io/caffeify.io"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const scopes = ['user-top-read']
    const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes}`

    const [{ token }, dispatch] = useDataLayerValue();

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
            token: token
        });
    }, []);

  
    const logout = () => {
        dispatch({
            type: "SET_TOKEN",
            token: null
          });        
        window.localStorage.removeItem("token")
    }

    return (
        <div className='App' id='html'>
            <header className="App-header">
                <h1 className="title"> Caffeify </h1>
            </header>
            <body id="my-body">
                 {!token ? <a id="log" href={loginURL}> place your order</a>  
                    :   
                    <button id="log" onClick={logout}> logout </button>
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
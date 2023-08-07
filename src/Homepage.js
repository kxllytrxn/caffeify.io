import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from "./DataLayer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Milk from './components/coffee-features/Milk';
import Temperature from './components/coffee-features/Temperature';
import Sweetness from './components/coffee-features/Sweetness';
import Flavor from './components/coffee-features/Flavor';
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";
import menu from "./images/coffee-menu.svg";
import "./App.css";

function Homepage() {
    const [{ token, songs, features }, dispatch] = useDataLayerValue();
    const [isLoading, setIsLoading] = useState(true);

    const getTopSongs = async () => {
        const time_range = "short_term";
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${time_range}`,
        {
            method: 'GET',
            headers: new Headers({
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            })
        });
        const data = await response.json();
        dispatch({
            type: "SET_SONGS",
            songs: data.items
        });
    }
   
    const analyzeTracks = async () => {
        const trackIDs = [] 
        songs.forEach(song => { 
            trackIDs.push(song.id)
        });

        if (songs.length > 0) {
            const response = await fetch(`https://api.spotify.com/v1/audio-features?ids=${trackIDs}`, 
            {
                method: 'GET',
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }),
            });
            const data = await response.json();
            dispatch({
                type: "SET_FEATURES",
                features: data.audio_features
            });
        };
    }

    const CoffeeOrder = () => {
        return (
            <Container fluid id='my-container'>
                <Row>
                    <Col xs={12} md={6}>  
                        <img alt="Coffee Menu"src={menu} className="Menu"></img>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <div className='line' id='line1'></div>
                            </Col>
                            <Col>                       
                                <Temperature />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='line' id='line2'></div>
                            </Col>
                            <Col>                       
                                <Flavor />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='line' id='line3'></div>
                            </Col>
                            <Col>                       
                                <Milk />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='line' id='line4'></div>
                            </Col>
                            <Col>                       
                                <Sweetness />
                            </Col>
                        </Row>
                    </Col> 
                </Row>
                <Row>
                </Row>
        </Container>
        )   
    }

    useEffect(() => {
        getTopSongs();
    }, []);

    useEffect(() => {
        analyzeTracks();
    }, [songs]);

    useEffect(() => {
        setIsLoading(false);
    }, [features]);

    return (
        <div className="homepage">
            <h2 className="desc"> Based on your listening history from the past four weeks, you should order </h2>
            {isLoading ? <LoadingSpinner /> : <CoffeeOrder /> }
        </div>
    );
}
export default Homepage;

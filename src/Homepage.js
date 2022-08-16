import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from "./DataLayer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Milk from './Milk';
import Temperature from './Temperature';
import Sweetness from './Sweetness';
import Flavor from './Flavor';
import LoadingSpinner from "./LoadingSpinner";
import menu from "./images/coffee-menu.svg";
import "./App.css";

function Homepage() {
    const [{ token, songs, features }, dispatch] = useDataLayerValue();
    const [isLoading, setIsLoading] = useState(false);

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
    console.log(songs)
   
    const analyseTracks = async () => {
        setIsLoading(true);
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
            setIsLoading(false);
        };
    }

    const renderCoffeeOrder = () => {
        return (
            <Container>
                <Row>
                    <Col>  
                        <img src={menu} className="Menu"></img>
                    </Col>
                    <Col className="coffee">
                        <Temperature />
                        <Flavor />
                        <Milk />
                        <Sweetness />
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
        analyseTracks();
    }, [songs]);

    useEffect(() => {
        renderCoffeeOrder();
    }, [songs, features]);

    return (
        <div className="homepage">
            <h2 className="desc"> Based on your listening history from the past four weeks, you should order a </h2>
            {isLoading ? <LoadingSpinner /> : renderCoffeeOrder() }
        </div>
    );
}
export default Homepage;
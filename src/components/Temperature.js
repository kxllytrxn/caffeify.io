import React from 'react';
import { useDataLayerValue } from "../DataLayer";
import "../App.css";

function Temperature() {
    const [{ songs, features }] = useDataLayerValue();
    let acousticSum = 0
    features.forEach(feature => {
        acousticSum += feature.acousticness
    }); 
    const averageAcousticness = acousticSum / songs.length;

    return (
        <h2>
            {0.25 < averageAcousticness && averageAcousticness <= 1.0 ? (  <h2 className="coffee" id='temp'> an iced </h2> )
            : null } 
            {0 < averageAcousticness && averageAcousticness <= 0.20 ? (  <h2 className="coffee" id='temp'> a hot </h2> )
            : null } 
        </h2>
    )
}

export default Temperature;

import React from 'react';
import { useDataLayerValue } from "./DataLayer";
import './App.css';

function Temperature() {
    const [{ songs, features }] = useDataLayerValue();
    let acousticSum = 0
    features.forEach(feature => {
        acousticSum += feature.acousticness
    }); 
    const averageAcousticness = acousticSum / songs.length;

    return (
        <div className="coffee-background">
            {0.25 < averageAcousticness && averageAcousticness <= 1.0 ? (  <h2 className="coffee"> iced </h2> )
            : null } 
            {0 < averageAcousticness && averageAcousticness <= 0.25 ? (  <h2 className="coffee"> hot </h2> )
            : null } 
        </div>
    )
}

export default Temperature;
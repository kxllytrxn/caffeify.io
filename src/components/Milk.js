import React from 'react';
import { useDataLayerValue } from "../DataLayer";
import "../App.css";

function Milk() {
    const [{ songs, features }] = useDataLayerValue();
    let danceSum = 0;
    features.forEach(feature => {
        danceSum += feature.danceability
    }); 
    const averageDance = danceSum / songs.length;
    console.log("avg dance:", averageDance)
    return (
        <h2>
            {0.65 < averageDance && averageDance <= 1.0 ? (  <h2 className="coffee"> with regular dairy milk </h2> )
            : null } 
            {0.5 < averageDance && averageDance <= 0.65 ? (  <h2 className="coffee"> with oat milk</h2> )
            : null } 
            {0.4 < averageDance && averageDance <= 0.5 ? (  <h2 className="coffee"> with almond milk </h2> )
            : null } 
            {0 < averageDance && averageDance <= 0.4 ? (  <h2 className="coffee"> with no milk </h2> )
            : null } 
        </h2>
    )
}

export default Milk;

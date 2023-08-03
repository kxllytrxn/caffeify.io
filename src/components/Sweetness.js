import React from 'react';
import { useDataLayerValue } from "../DataLayer";
import "../App.css";

function Sweetness() {
    const [{songs, features}] = useDataLayerValue();
    let energySum = 0;
    features.forEach(feature => {
        energySum += feature.energy
    }); 
    const averageEnergy = energySum / songs.length;

    return (
        <h2>
            {0.7 < averageEnergy && averageEnergy <= 1.0 ? (  <h2 className="coffee"> at 100% sweetness </h2> )
            : null } 
            {0.6 < averageEnergy && averageEnergy <= 0.7 ? (  <h2 className="coffee"> at 75% sweetness </h2> )
            : null } 
            {0.5 < averageEnergy && averageEnergy <= 0.6 ? (  <h2 className="coffee"> at 50% sweetness </h2> )
            : null } 
            {0.4 < averageEnergy && averageEnergy <= 0.5 ? (  <h2 className="coffee"> at 25% sweetness </h2> )
            : null } 
            {0 < averageEnergy && averageEnergy <= 0.4 ? (  <h2 className="coffee"> at 0% sweetness </h2> )
            : null } 
        </h2>
    )
}

export default Sweetness;

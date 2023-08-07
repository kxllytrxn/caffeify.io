import React from 'react'
import { useDataLayerValue } from "../../DataLayer";
import "../../App.css";

function Flavor() {
    const [{ songs }] = useDataLayerValue();
    
    let popularitySum = 0
    songs.forEach(song => {
        popularitySum += song.popularity
    }); 
    const averagePopularity = popularitySum / songs.length;

    return (
        <h2>
            {80 < averagePopularity && averagePopularity <= 100 ? (  <h2 className="coffee"> vanilla latte </h2> )
            : null } 
            {75 < averagePopularity && averagePopularity <= 80 ? (  <h2 className="coffee"> pumpkin spice latte  </h2> )
            : null } 
            {70 < averagePopularity && averagePopularity <= 75 ? (  <h2 className="coffee"> caramel macchiato </h2> )
            : null } 
            {65 < averagePopularity && averagePopularity <= 70 ? (  <h2 className="coffee"> mocha </h2> )
            : null } 
            {60 < averagePopularity && averagePopularity <= 65 ? (  <h2 className="coffee"> hazelnut latte  </h2> )
            : null } 
            {55 < averagePopularity && averagePopularity <= 60 ? (  <h2 className="coffee"> chai latte  </h2> )
            : null } 
            {50 < averagePopularity && averagePopularity <= 55 ? (  <h2 className="coffee"> rose latte  </h2> )
            : null } 
            {45 < averagePopularity && averagePopularity <= 50 ? (  <h2 className="coffee"> peppermint latte </h2> )
            : null } 
            {40 < averagePopularity && averagePopularity <= 45 ? (  <h2 className="coffee"> lavender latte </h2> )
            : null } 
            {0 < averagePopularity && averagePopularity <= 40 ? (  <h2 className="coffee"> plain black coffee </h2> )
            : null } 
        </h2>
    )
}
    
export default Flavor;

import { useState, useEffect } from 'react';
import axios from 'axios';

const Traits = (props) => {
    // Destructuring props
    const { traitsEndpointsArray } = props;
    // Set empty array into state for trait data objects to push into
    const [traitFullInfo, setTraitFullInfo] = useState([]);
    useEffect(() => {
        const traitDataArray = [];
        // Make an API call for the endpoint on each trait passed from the Form 
        traitsEndpointsArray.forEach((endpoint) => {
            axios({
                url: `https://www.dnd5eapi.co/api/traits/${endpoint.index}`,
                method: 'GET',
                dataResponse: 'json'
            }).then((response) => {
                traitDataArray.push(response.data);
                console.log(traitDataArray);
            });
            setTraitFullInfo(traitDataArray);
            console.log(traitFullInfo);
        });
    }, [traitsEndpointsArray])
    
    return (
        <ul>
            {traitFullInfo.map((trait) => {
                return (
                    <li key={trait.index}>
                        <p>{trait.name}</p>
                        <p>{trait.desc}</p>                     
                    </li>
                )
            })}
        </ul>
    )
}

export default Traits;
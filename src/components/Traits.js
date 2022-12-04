import { useState, useEffect } from 'react';
import axios from 'axios';

const Traits = (props) => {

    const [traitDesc, setTraitDesc] = useState('');
    const { traitsArray } = props;
    const traitNames = [];
    const traitDescriptions = [];

    useEffect(() => {
        traitsArray.forEach((trait, index) => {
            // console.log(trait.index, index);
            axios({
                url: `https://www.dnd5eapi.co/api/traits/${trait.index}`,
                method: 'GET',
                dataResponse: 'json'
            }).then((response) => {
                console.log(response.data);
                // traitNames.push(response.data.name);
                // traitDescriptions.push(response.data.desc);

            });
        });
        console.log(traitDescriptions);
    }, [traitsArray])

    return (
        <ul>
            {traitsArray.map((trait) => {
                return (
                    <li key={trait.index}>
                        <p>{trait.name}</p>
                        <p>{traitDesc}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Traits;
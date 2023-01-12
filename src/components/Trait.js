import { useEffect, useState } from 'react';
import axios from 'axios';

const Trait = ({url}) => {
    const [traitResponse, setTraitResponse] = useState({
        desc: [], 
        name: ''
    })

    useEffect(() => {
        axios({
            url: `https://www.dnd5eapi.co${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setTraitResponse({
                desc: response.data.desc,
                name: response.data.name
            });
        });
    }, [url])

    return (
        <>
            <h3>{traitResponse.name}</h3>
            <p>{traitResponse.desc}</p>
        </>
    )
}
export default Trait;
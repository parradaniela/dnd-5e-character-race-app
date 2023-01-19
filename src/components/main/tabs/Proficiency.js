import { useEffect, useState } from 'react';
import axios from 'axios';

const Proficiency = ({ url }) => {
    const [apiResponse, setApiResponse] = useState('')

    useEffect(() => {
        axios({
            url: `https://www.dnd5eapi.co${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setApiResponse(response.data.name);
        });
    }, [url])

    return (
        <>
            <h3>{apiResponse}</h3>
            <p>This race is proficient in {apiResponse}</p>
        </>
    )
}
export default Proficiency;
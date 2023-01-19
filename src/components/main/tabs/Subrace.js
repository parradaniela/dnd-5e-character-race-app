import { useEffect, useState } from 'react';
import axios from 'axios';

const Subrace = ({url}) => {
    const [apiResponse, setApiResponse] = useState({
        desc: [], 
        name: ''
    })

    useEffect(() => {
        axios({
            url: `https://www.dnd5eapi.co${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setApiResponse({
                desc: response.data.desc,
                name: response.data.name
            });
        });
    }, [url])

    return (
        <>
            <h3>{apiResponse.name}</h3>
            <p>{apiResponse.desc}</p>
        </>
    )
}
export default Subrace;
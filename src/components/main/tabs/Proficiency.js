import { useEffect, useState } from 'react';
import axios from 'axios';
import AccordionItem from './AccordionItem';

const Proficiency = ({ url, index }) => {
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
            <AccordionItem
                heading={apiResponse}
                text={`This race is proficient in ${apiResponse}`}
                index={index}
            />
        </>
    )
}
export default Proficiency;
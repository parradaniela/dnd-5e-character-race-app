import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AccordionItem from '../accordions/AccordionItem';
import { ApiDataContext } from '../../../Contexts/ApiDataContext';

const Proficiency = ({ url, index }) => {
    const { apiBaseURL } = useContext(ApiDataContext);
    const [apiResponse, setApiResponse] = useState('')

    useEffect(() => {
        axios({
            url: `${apiBaseURL}${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setApiResponse(response.data.name);
        }).catch(error => {
            alert('Oops! Something went wrong!')
            return error
        });
    }, [apiBaseURL, url])

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
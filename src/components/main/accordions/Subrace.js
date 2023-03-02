import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ApiDataContext } from '../../../Contexts/ApiDataContext';
import AccordionItem from '../accordions/AccordionItem';

const Subrace = ({ url, index }) => {
    const { apiBaseURL } = useContext(ApiDataContext);
    const [apiResponse, setApiResponse] = useState({
        desc: [], 
        name: ''
    })

    useEffect(() => {
        axios({
            url: `${apiBaseURL}${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setApiResponse({
                desc: response.data.desc,
                name: response.data.name
            });
        }).catch(error => {
            alert('Oops! Something went wrong!')
            return error
        });
    }, [apiBaseURL, url])

    return (
        <>
            <AccordionItem
                heading={apiResponse.name}
                text={apiResponse.desc}
                index={index}
            />
        </>
    )
}
export default Subrace;
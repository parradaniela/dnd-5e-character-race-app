import { useEffect, useState } from 'react';
import axios from 'axios';
import AccordionItem from '../accordions/AccordionItem';

const Subrace = ({url, index}) => {
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
            <AccordionItem
                heading={apiResponse.name}
                text={apiResponse.desc}
                index={index}
            />
        </>
    )
}
export default Subrace;
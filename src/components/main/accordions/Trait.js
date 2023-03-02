import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ApiDataContext } from '../../../Contexts/ApiDataContext';
import AccordionItem from './AccordionItem';

const Trait = ({ url, index }) => {
    const { apiBaseURL } = useContext(ApiDataContext);
    const [traitResponse, setTraitResponse] = useState({
        desc: [],
        name: ''
    });

    useEffect(() => {
        axios({
            url: `${apiBaseURL}${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            setTraitResponse({
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
                heading={traitResponse.name}
                text={traitResponse.desc}
                index={index}
            />
        </>
    )
}
export default Trait;
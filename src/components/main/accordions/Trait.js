import { useEffect, useState } from 'react';
import axios from 'axios';
import AccordionItem from './AccordionItem';

const Trait = ({url, index}) => {
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
            <AccordionItem
                heading={traitResponse.name}
                text={traitResponse.desc}
                index={index}
            />
        </>
    )
}
export default Trait;
import { useEffect, useState } from 'react';
import axios from 'axios';

const Trait = ({url}) => {
    const [traitResponse, setTraitResponse] = useState({})
    useEffect(() => {
        axios({
            url: `https://www.dnd5eapi.co${url}`,
            method: 'GET',
            dataResponse: 'json'
        }).then((response) => {
            console.log(response);
            // setTraitResponse(response.data);
        });
    }, [url])

    return (
        <div>
            <p>test</p>
        </div>
    )
}
export default Trait;
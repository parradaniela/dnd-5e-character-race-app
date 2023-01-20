import Trait from './Trait.js';
import { useContext } from 'react';
import { ApiDataContext } from '../../../Contexts/ApiDataContext.js';

const Traits = () => {

    const {traitsArray} = useContext(ApiDataContext)
    return (
        <ul>
            {
                traitsArray.length > 0 ?
                    traitsArray.map(({ index, url }) =>
                        <li key={index}>
                            <Trait url={url} index={index} />
                        </li>)
                : <h3>This race does not have any additional traits</h3>
            }   
        </ul>
    )
}

export default Traits;
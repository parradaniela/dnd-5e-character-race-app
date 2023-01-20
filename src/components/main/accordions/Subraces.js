import Subrace from './Subrace.js';
import { useContext } from 'react';
import { ApiDataContext } from '../../../Contexts/ApiDataContext.js';

const Subraces = () => {

    const {subracesArray} = useContext(ApiDataContext)
    return (
        <ul>
            {
                subracesArray.length > 0 ?
                    subracesArray.map(({ index, url }) =>
                        <li key={index}>
                            <Subrace url={url} index={index} />
                        </li>)
                : <h3 className="no-results">This race does not have any subraces</h3>
            }   
        </ul>
    )
}

export default Subraces;
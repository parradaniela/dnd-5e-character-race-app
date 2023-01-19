import Subrace from './Subrace.js';
import { useContext } from 'react';
import { ApiDataContext } from '../../../Contexts/ApiDataContext.js';

const Subraces = () => {

    const {subracesArray} = useContext(ApiDataContext)
    return (
        <div className="results-secondary">
            <ul>
                {
                    subracesArray.length > 0 ?
                        subracesArray.map(({ index, url }) =>
                            <li key={index}>
                                <Subrace url={url} />
                            </li>)
                    : <h3>This race does not have any subraces</h3>
                }   
            </ul>
        </div>
    )
}

export default Subraces;
import Proficiency from './Proficiency.js';
import { useContext } from 'react';
import { ApiDataContext } from '../../../Contexts/ApiDataContext.js';

const Proficiencies = () => {

    const {proficienciesArray} = useContext(ApiDataContext)
    return (
        <ul>
            {
                proficienciesArray.length > 0 ?
                    proficienciesArray.map(({ index, url }) =>
                        <li key={index}>
                            <Proficiency url={url} index={index} />
                        </li>)
                : <h3 className="no-results">This race does not have any additional proficiencies</h3>
            }   
        </ul>
    )
}

export default Proficiencies;
import Trait from './Trait.js';

const Traits = ({ details }) => {
    return (
        <div className="results-secondary">
            {
                details.name ? 
                    <ul>
                        {
                            details.traits.length > 0 ?
                                details.traits.map(({ index, url }) =>
                                    <li><Trait key={index} url={url} /></li>)
                                : <h3>This race does not have any additional traits</h3>
                        }   
                    </ul>
                : null
            }
        </div>
    )
}

export default Traits;
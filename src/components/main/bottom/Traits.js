import Trait from './Trait.js';

const Traits = ({ traitsArray }) => {
    return (
        <div className="results-secondary">
            {/* {
                details.name ?  */}
                    <ul>
                        {
                            traitsArray.length > 0 ?
                                traitsArray.map(({ index, url }) =>
                                    <li key={index}>
                                        <Trait url={url} />
                                    </li>)
                                : <h3>This race does not have any additional traits</h3>
                        }   
                    </ul>
                {/* : null
            } */}
        </div>
    )
}

export default Traits;
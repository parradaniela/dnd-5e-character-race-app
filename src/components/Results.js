import Image from './Image.js';

const Results = ({ details }) => {
    
    return (
        <div className="results-main">
            {
                details.name ? 
                    <>
                        <div className="results-top">
                            <h2>{details.name}</h2>
                            <Image index={details.index} />
                        </div>
                        <ul>
                            <li>
                                <h3 className="list-heading">Age</h3>
                                <p className="list-details">{details.age}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Alignment</h3>
                                <p className="list-details">{details.alignment}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Size</h3>
                                <p className="list-details">{details.size}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Language</h3>
                                <p className="list-details">{details.language}</p>
                            </li>
                        </ul>
                    </>
                : null
            }
        </div>
    )
}

export default Results;
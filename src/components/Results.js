import Image from './Image.js';

const Results = ({ name, age, raceIndex, alignment, sizeDesc, langDesc }) => {
    
    return (
        <div className="results-main">
            <div className="results-top">
                <h2>{name}</h2>
                <Image raceIndex={raceIndex} />
            </div>
            <ul>
                <li>
                    <div className="list-heading">
                        <p>Age</p>
                    </div>
                    <div className="list-details">
                        <p>{age}</p>
                    </div>
                </li>
                <li>
                    <div className="list-heading">
                        <p>Alignment</p>
                    </div>
                    <div className="list-details">
                        <p>{alignment}</p>
                    </div>
                </li>
                <li>
                    <div className="list-heading">
                        <p>Size</p>
                    </div>
                    <div className="list-details">
                        <p>{sizeDesc}</p>
                    </div>
                </li>
                <li>
                    <div className="list-heading">
                        <p>Language</p>
                    </div>
                    <div className="list-details">
                        <p>{langDesc}</p>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Results;
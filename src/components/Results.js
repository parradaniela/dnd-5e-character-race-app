const Results = (props) => {
    // Deconstructing props
    const { age, alignment, sizeDesc, langDesc } = props;
    return (
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
    )
}

export default Results;
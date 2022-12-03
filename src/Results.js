const Results = (props) => {
    return (
        <ul>
            <li>
                <div className="list-heading">
                    <p>Age:</p>
                </div>
                <div className="list-details">
                    <p>{props.age}</p>
                </div>
            </li>
            <li>
                <div className="list-heading">
                    <p>Alignment:</p>
                </div>
                <div className="list-details">
                    <p>{props.alignment}</p>
                </div>
            </li>
            <li>
                <div className="list-heading">
                    <p>Size:</p>
                </div>
                <div className="list-details">
                    <p>{props.sizeDesc}</p>
                </div>
            </li>
            <li>
                <div className="list-heading">
                    <p>Language:</p>
                </div>
                <div className="list-details">
                    <p>{props.langDesc}</p>
                </div>
            </li>
        </ul>
    )
}

export default Results;
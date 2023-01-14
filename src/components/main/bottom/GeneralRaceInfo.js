
const GeneralRaceInfo = ({ details, children }) => {
    
    return (
        <>
            {
                details.name ?
                    <>
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
                        {children}
                    </>
                    : null
            }
        </>
    )
}

export default GeneralRaceInfo;
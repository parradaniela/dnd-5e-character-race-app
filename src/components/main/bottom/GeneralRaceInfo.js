
const GeneralRaceInfo = ({ accordionData, children }) => {
    
    return (
        <>
            {
                accordionData.name ?
                    <>
                        <ul>
                            <li>
                                <h3 className="list-heading">Age</h3>
                                <p className="list-details">{accordionData.age}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Alignment</h3>
                                <p className="list-details">{accordionData.alignment}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Size</h3>
                                <p className="list-details">{accordionData.size}</p>
                            </li>
                            <li>
                                <h3 className="list-heading">Language</h3>
                                <p className="list-details">{accordionData.language}</p>
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
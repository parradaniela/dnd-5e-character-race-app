const Traits = (props) => {
    // Destructuring props
    const { traitDetailsArray } = props;
    
    return (
        <div className="results-secondary">
            <ul>
                {traitDetailsArray.map((trait) => {
                    return (
                        <li key={trait.index}>
                            <div className="list-heading">
                                <p>{trait.name}</p>
                            </div>
                            <div className="list-details">
                                <p>{trait.desc[0]}</p>                     
                            </div>
                        </li> 
                    ) 
                })}
            </ul>
        </div>
    )
}

export default Traits;
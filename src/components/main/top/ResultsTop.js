const ResultsTop = ({race, children}) => {
    return(
        <div className="results-top">
            <h2>{race}</h2>
            <div className="results-top-info">
                {children}
            </div>
        </div>
    )
}
export default ResultsTop;
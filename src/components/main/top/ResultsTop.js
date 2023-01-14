const ResultsTop = ({details, children}) => {
    return(
        <div className="results-top">
            <h2>{details.name}</h2>
            <div className="results-top-info">
                {children}
            </div>
        </div>
    )
}
export default ResultsTop;
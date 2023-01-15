const ResultsTop = ({accordionData, children}) => {
    return(
        <div className="results-top">
            <h2>{accordionData.name}</h2>
            <div className="results-top-info">
                {children}
            </div>
        </div>
    )
}
export default ResultsTop;
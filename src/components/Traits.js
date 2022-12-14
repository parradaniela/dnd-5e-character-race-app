import Trait from './Trait.js';

const Traits = ({ traitDetailsArray }) => {
    return (
    <div className="results-secondary">
    {
        traitDetailsArray.map(({url}) => <Trait key={url} url={url}/>)
    }   
    </div>
        
    )
}

export default Traits;
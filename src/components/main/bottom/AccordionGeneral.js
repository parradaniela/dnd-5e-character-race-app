import { useState } from "react";

const AccordionGeneral = ({ accordionData }) => {
    
    const accordionEntriesArray = Object.entries(accordionData);
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (
        <ul>
        {
            accordionEntriesArray.map(([heading, text], index) => 
                <li>
                    <div className="list-heading" onClick={() => toggle(index)}>
                        <h3>{heading}</h3> 
                        <span>{selected === index ? '-' : '+'}</span>
                    </div>
                    <div className={selected === index ? 'list-details show' : 'list-details'}>
                        <p>{text}</p>
                    </div>
                </li>
            )
        }
        </ul>
    )
}

export default AccordionGeneral;
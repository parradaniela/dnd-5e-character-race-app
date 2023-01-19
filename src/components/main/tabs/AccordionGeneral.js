import { useState, useContext } from "react";
import { ApiDataContext } from "../../../Contexts/ApiDataContext";

const AccordionGeneral = () => {
    const {accordionData} = useContext(ApiDataContext)
    const accordionEntriesArray = Object.entries(accordionData);
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    
    return (
        <section className="tab-content">
            <ul className="content active-content">
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
        </section>
    )
}

export default AccordionGeneral;
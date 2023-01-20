import { useContext } from "react";
import { ApiDataContext } from "../../../Contexts/ApiDataContext";

import AccordionItem from "./AccordionItem";

const General = () => {
    const { accordionData } = useContext(ApiDataContext)
    const accordionEntriesArray = Object.entries(accordionData);
    
    return (
        <ul>
            {
                accordionEntriesArray.map(([heading, text], index) => 
                    <li>
                        <AccordionItem
                            heading={heading}
                            text={text}
                            index={index}
                        />
                    </li>
                )
            }
        </ul>
    )
}

export default General;
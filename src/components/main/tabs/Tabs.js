import { useState } from "react";
import TabHeadings from "./TabHeadings";
import TabContents from "./TabContents";

import { AccordionToggleContext } from "../../../Contexts/AccordionToggleContext";

const Tabs = () => {

    const [toggleActive, setToggleActive] = useState(0)
    const toggleTab = (index) => {
        setToggleActive(index);
    }

    // Defining the selected state and toggle function here so that it applies to all accordion items as a group. If defined inside the accordion components, the accordions don't close because the function would only be scoped to the single item. 
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <section className="details">          
            <TabHeadings
                toggleActive={toggleActive}
                toggleTab={toggleTab}
            />
            
            <AccordionToggleContext.Provider
                value={{selected, toggle}}
            >
                <TabContents
                    toggleActive={toggleActive}
                />
            </AccordionToggleContext.Provider>    
        </section>
    )
}
export default Tabs;
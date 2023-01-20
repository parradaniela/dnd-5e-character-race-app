import { useState } from "react";
import AccordionGeneral from "./General";
import Traits from "./Traits";
import Subraces from "./Subraces";
import Proficiencies from "./Proficiencies"
import { AccordionToggleContext } from "../../../Contexts/AccordionToggleContext";

const Tabs = () => {

    const [toggleActive, setToggleActive] = useState(1)
    
    const toggleTab = (index) => {
        setToggleActive(index);
    }

    // Defining the selected state and toggle function here so that it applies to all accordion items as a group. If defined inside AccordionItem components, the accordions don't close because the function would only be scoped to the single item. 
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <section className="details">          
            <ul className="tabs-head">
                <li
                    className={
                        toggleActive === 1
                        ? "tabs active-tabs"
                        : "tabs"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <button>General</button>
                </li>
                <li
                    className={
                        toggleActive === 2
                        ? "tabs active-tabs"
                        : "tabs"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <button>Traits</button>
                </li>
                <li
                    className={
                        toggleActive === 3
                        ? "tabs active-tabs"
                        : "tabs"
                    }
                    onClick={() => toggleTab(3)}
                >
                    <button>Subraces</button>
                </li>
                <li
                    className={
                        toggleActive === 4
                        ? "tabs active-tabs"
                        : "tabs"
                    }
                    onClick={() => toggleTab(4)}
                >
                    <button>Proficiencies</button>
                </li>
            </ul>
            <AccordionToggleContext.Provider
                value={{selected, toggle}}
            >
                <div className="tabs-content">
                    <div className={
                            toggleActive === 1
                            ? "content active-content"
                            : "content"
                        }>
                        <AccordionGeneral />
                    </div>
                    <div className={
                            toggleActive === 2
                            ? "content active-content"
                            : "content"
                        }>
                        <Traits />
                    </div>
                    <div className={
                            toggleActive === 3
                            ? "content active-content"
                            : "content"
                        }>
                        <Subraces />
                    </div>
                    <div className={
                            toggleActive === 4
                            ? "content active-content"
                            : "content"
                        }>
                        <Proficiencies />
                    </div>
                </div> {/* END .tabs-content */}
            </AccordionToggleContext.Provider>    
        </section>
    )
}
export default Tabs;
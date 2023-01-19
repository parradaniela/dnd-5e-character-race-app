import { useState } from "react";
import AccordionGeneral from "../bottom/AccordionGeneral";
import Traits from "../bottom/Traits";

const Tabs = ({ userChoice, race, children }) => {

    const [toggleActive, setToggleActive] = useState(1)
    
    const toggleTab = (index) => {
        setToggleActive(index);
    }

    return(
        <main>
            <section className="tab-headings">
                {
                    race ? 
                            <section className="results">
                                <ul>
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
                                <div className="tabs-content">
                                    <div className={
                                            toggleActive === 1
                                            ? "content active-content"
                                            : "content"
                                        }>
                                        <AccordionGeneral />
                                    </div>
                                    {/* <div className={
                                            toggleActive === 2
                                            ? "content active-content"
                                            : "content"
                                        }>
                                        <Traits />
                                    </div> */}
                                
                                    
                                </div>
                            </section>    
                    : null 
                }
            </section>
        </main>
    )
}
export default Tabs;
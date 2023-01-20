import { AccordionToggleContext } from "../../../Contexts/AccordionToggleContext";
import { useContext } from "react";

const AccordionItem = ({ heading, text, index }) => {
    const {toggle, selected} = useContext(AccordionToggleContext)
    return (
        <>
            <div className="accordion-heading" onClick={() => toggle(index)}>
                <h3>{heading}</h3> 
                <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className={selected === index ? 'accordion-details show' : 'accordion-details'}>
                <p>{text}</p>                
            </div>
        </>
  )
}
export default AccordionItem;
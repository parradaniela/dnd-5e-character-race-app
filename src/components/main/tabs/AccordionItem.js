import { AccordionToggleContext } from "../../../Contexts/AccordionToggleContext";
import { useContext } from "react";

const AccordionItem = ({ heading, text, index }) => {
    const {toggle, selected} = useContext(AccordionToggleContext)
    return (
        <>
            <div className="list-heading" onClick={() => toggle(index)}>
                <h3>{heading}</h3> 
                <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className={selected === index ? 'list-details show' : 'list-details'}>
                <p>{text}</p>                
            </div>
        </>
  )
}
export default AccordionItem;
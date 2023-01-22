const TabHeadings = ({toggleActive, toggleTab}) => {
    const tabHeadings = ["General", "Traits", "Subraces", "Proficiencies"]
    
    return(
        <ul className="tab-headings">
            {
                tabHeadings.map((heading, i) => 
                    <li
                        key={i}
                        className={
                        toggleActive === i
                        ? "tabs active-tabs"
                        : "tabs"
                    }
                    onClick={() => toggleTab(i)}>
                        <button className="btn btn-tab">{heading}</button>
                    </li>
                ) 
            }
        </ul>
    )
}
export default TabHeadings;
import General from "../accordions/General";
import Traits from "../accordions/Traits";
import Subraces from "../accordions/Subraces";
import Proficiencies from "../accordions/Proficiencies"

const TabContents = ({ toggleActive }) => {

    const tabComponents = [<General />, <Traits />, <Subraces />, <Proficiencies />]

    return(
        <div className="tabs-content">
            {
                        tabComponents.map((component, i) => 
                            <div className={
                                toggleActive === i
                                ? "content active-content"
                                : "content"
                            }>
                                {component}
                            </div>
                        )
                    }
        </div>
    )
}
export default TabContents;
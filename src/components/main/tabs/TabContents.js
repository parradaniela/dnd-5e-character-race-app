import General from "../accordions/General";
import Traits from "../accordions/Traits";
import Subraces from "../accordions/Subraces";
import Proficiencies from "../accordions/Proficiencies"

const TabContents = ({ toggleActive }) => {

    const tabComponents = [<General />, <Traits />, <Subraces />, <Proficiencies />]
    // TODO: Add a loading state to transition between each tab
    return(
        <div className="tabs-content">
            {
                tabComponents[toggleActive]
            }
        </div>
    )
}
export default TabContents;
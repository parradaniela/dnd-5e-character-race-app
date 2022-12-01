const Form = (props) => {
    return (
        <form>
            <label htmlFor="racePick">Choose your character's race</label>
            <select name="racePick" id="racePick">
                <option value="" disabled>Choose one:</option>
                <option value="dragonborn">Dragonborn</option>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="half-elf">Half-Elf</option>
                <option value="half-orc">Half-Orc</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                <option value="tiefling">Tiefling</option>
            </select>
        </form>
    )
}

export default Form;
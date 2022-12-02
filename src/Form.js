import { useState, useEffect } from 'react';
import axios from 'axios';  


const Form = (props) => {
    const [userInput, setUserInput] = useState('')
    const updateDetails = (bigObj) => {
        // console.log(bigObj);
        props.setRaceName(bigObj.name)
        props.setRaceAge(bigObj.age)
        props.setRaceAlignment(bigObj.alignment)
    }
    
    const handleChange = (e) => {
        // console.log(e);
        setUserInput(e.target.value);
    }

    useEffect(() => {
        axios({
          url: "https://www.dnd5eapi.co/api/races/",
          method: "GET",
          dataResponse: "json"
        }).then((response) => {
          console.log(response.data.results);
        });
      }, [])

    useEffect(() => {
        axios({
          url: `https://www.dnd5eapi.co/api/races/${userInput}`,
          method: "GET",
          dataResponse: "json"
        }).then((response) => {
            updateDetails(response.data);
        })
      }, [userInput])
    
    return (
        // <form onSubmit={props.handleSubmit}>
        <form>
            <label htmlFor="racePick">Choose your character's race</label>
            <select
                name="racePick"
                id="racePick"
                onChange={handleChange}
                value={userInput}
            >
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
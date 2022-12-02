import { useState, useEffect } from 'react';
import axios from 'axios';  


const Form = (props) => {

    // Setting an empty array into state for the options in the select dropdown
    const [selectOptions, setSelectOptions] = useState([]);

    // FIrst API call, on Form component mount, to get the array of races that will populate the Select element in the JSX
    useEffect(() => {
        axios({
            url: "https://www.dnd5eapi.co/api/races/",
            method: "GET",
            dataResponse: "json"
        }).then((response) => {
            // Sets the state of selectOptions as the array received from the API 
            setSelectOptions(response.data.results);
        });
    }, [])

    // Second API call that occurs when the userInput state changes (ie when the user selects an option on the drop down)
    useEffect(() => {
        axios({
            url: `https://www.dnd5eapi.co/api/races/${props.userChoice}`,
            method: "GET",
            dataResponse: "json"
        }).then((response) => {
            // Passes the array response as an argument to the updateDetails function
            updateDetails(response.data);
        })
    }, [props.userChoice])
    
    // Function that passes data from the API response back up to App.js with props
    const updateDetails = (raceData) => {
        console.log(raceData);
        props.setName(raceData.name);
        props.setAge(raceData.age);
        props.setAlignment(raceData.alignment);
        props.setSizeDesc(raceData.size_description);
        props.setLangDesc(raceData.language_desc);
        props.setUserChoice(raceData.index)
    }

    return (
        <form className='form'>
            <label htmlFor="form-select">Choose your character's race</label>
            <select
                name="form-select"
                id="form-select"
                onChange={(e) => {props.setUserChoice(e.target.value)}}
                value={props.userChoice}
            >   
                <option value="" disabled>Choose one:</option>
                {selectOptions.map((option) => {
                    return (
                        <option value={option.index} key={option.index}>{option.name}</option>
                    )
                })}
            </select>
        </form>
    )
}

export default Form;
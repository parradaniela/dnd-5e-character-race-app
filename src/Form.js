import { useState, useEffect } from 'react';
import axios from 'axios';  


const Form = (props) => {
    // Destructuring props
    const { userChoice, setUserChoice, setName, setAge, setAlignment, setSizeDesc, setLangDesc, setTraitsArray } = props;
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
            url: `https://www.dnd5eapi.co/api/races/${userChoice}`,
            method: "GET",
            dataResponse: "json"
        }).then((response) => {
            // Passes the array response as an argument to the updateDetails function
            updateDetails(response.data);
        })
    }, [userChoice])
    
    // Function that passes data from the API response back up to App.js with props
    const updateDetails = (raceData) => {
        console.log(raceData);
        setName(raceData.name);
        setAge(raceData.age);
        setAlignment(raceData.alignment);
        setSizeDesc(raceData.size_description);
        setLangDesc(raceData.language_desc);
        setUserChoice(raceData.index);
        setTraitsArray(raceData.traits);
    }

    return (
        <form className='form'>
            <label htmlFor="form-select">Choose your character's race</label>
            <select
                name="form-select"
                id="form-select"
                onChange={(e) => {setUserChoice(e.target.value)}}
                value={userChoice}
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
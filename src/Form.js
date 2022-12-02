import { useState, useEffect } from 'react';
import axios from 'axios';  


const Form = (props) => {
    const [userInput, setUserInput] = useState('')
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
            url: `https://www.dnd5eapi.co/api/races/${userInput}`,
            method: "GET",
            dataResponse: "json"
        }).then((response) => {
            // Passes the array response as an argument to the updateDetails function
            updateDetails(response.data);
        })
    }, [userInput])
    
    // Function that passes data from the API response back up to App.js with props
    const updateDetails = (racesArray) => {
        console.log(racesArray);
        props.setName(racesArray.name);
        props.setAge(racesArray.age);
        props.setAlignment(racesArray.alignment);
        props.setSizeDesc(racesArray.size_description);
        props.setLangDesc(racesArray.language_desc);
    }

    const getUserChoice = (e) => {
        console.log(e.target.value);
        setUserInput(e.target.value);
        props.setImgSource(`./assets/${e.target.value}.png`)
    }

    return (
        <form className='form'>
            <label htmlFor="form-select">Choose your character's race</label>
            <select
                name="form-select"
                id="form-select"
                onChange={getUserChoice}
                value={userInput}
            >   
                <option value="" disabled>Choose one:</option>
                {selectOptions.map((option, index) => {
                    return (
                        <option value={option.index} key={index}>{option.name}</option>
                    )
                })}
            </select>
        </form>
    )
}

export default Form;
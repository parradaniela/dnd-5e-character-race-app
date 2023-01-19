import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ApiDataContext } from "../../Contexts/ApiDataContext";

const Form = ({ userChoice, setUserChoice }) => {

    const [selectOptions, setSelectOptions] = useState([]);
    const {setAccordionData, setTraitsArray, setSubracesArray, setProficienciesArray, setRace} = useContext(ApiDataContext)
      // API call attached to a submit event on the Form.js component, that calls a specific race's endpoint and updates a number of states
    
    const generalDataApiCall = (endpoint) => {
        axios({
            url: `https://www.dnd5eapi.co/api/races/${endpoint}`,
            method: "GET",
            dataResponse: "json"
        }).then((response) => {
            setAccordionData({
                age: response.data.age,
                alignment: response.data.alignment,
                size: response.data.size_description,
                language: response.data.language_desc 
            })
            setRace(response.data.index)
            setTraitsArray(response.data.traits)
        })
    }

    const subracesDataApiCall = (endpoint) => {
        axios({
            url: `https://www.dnd5eapi.co/api/races/${endpoint}/subraces`,
            method: "GET",
            dataResponse: "json"
            }).then((response) => {
                setSubracesArray(response.data.results);
            })
    }

    const proficienciesDataApiCall = (endpoint) => {
        axios({
            url: `https://www.dnd5eapi.co/api/races/${endpoint}/proficiencies`,
            method: "GET",
            dataResponse: "json"
            }).then((response) => {
                setProficienciesArray(response.data.results);
            })
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        generalDataApiCall(userChoice)
        subracesDataApiCall(userChoice)
        proficienciesDataApiCall(userChoice)
    }
        
        // FIrst API call, on App.js component mount, to get the array of races that will populate the Select element in the Form's JSX
    useEffect(() => {
        axios({
            url: "https://www.dnd5eapi.co/api/races/",
            method: "GET",
            dataResponse: "json"
        }).then((response) => { 
            setSelectOptions(response.data.results);
        });
    }, [])

    return (
        <>
            <form
                className='form'
                onSubmit={(e) => { handleFormSubmit(e) }}
            >
                <label htmlFor="form-select">Choose a race</label>
                <select
                    name="form-select"
                    id="form-select"
                    onChange={(e) => {setUserChoice(e.target.value)}}
                    value={userChoice}
                >   
                    <option value="" disabled>Choose one:</option>
                    {selectOptions.map((option) => {
                        return (
                            <option
                                value={option.index}
                                key={option.index}
                            >
                                {option.name}
                            </option>
                        )
                    })}
                </select>
                <button type="submit">Submit</button>
            </form> 
        </>
    )
}

export default Form;
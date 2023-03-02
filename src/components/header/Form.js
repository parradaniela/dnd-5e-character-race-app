import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ApiDataContext } from "../../Contexts/ApiDataContext";

const Form = ({ userChoice, setUserChoice }) => {

    const [selectOptions, setSelectOptions] = useState([]);
    const { apiRacesURL, setAccordionData, setTraitsArray,setSubracesArray, setProficienciesArray, setRace } = useContext(ApiDataContext)
    
    const generalDataApiCall = (userChoice) => {
        axios({
            url: `${apiRacesURL}${userChoice}`,
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
            setProficienciesArray(response.data.starting_proficiencies)
            setSubracesArray(response.data.subraces)
        }).catch(error => {
            alert('Oops! Something went wrong!')
            return error
        });
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        generalDataApiCall(userChoice)
    }
        
    // FIrst API call, on App.js component mount, to get the array of races that will populate the Select element in the Form's JSX
    useEffect(() => {
        axios({
            url: apiRacesURL,
            method: "GET",
            dataResponse: "json"
        }).then((response) => { 
            setSelectOptions(response.data.results);
        }).catch(error => {
            alert('Oops! Something went wrong!')
            return error
        });
    }, [apiRacesURL])

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
                <button type="submit" className="btn">Submit</button>
            </form> 
        </>
    )
}

export default Form;
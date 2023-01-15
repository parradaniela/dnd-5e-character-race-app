const Form = ({ selectOptions, formSubmitApiCall, userChoice, setUserChoice }) => {
    
    return (
        <>
            <form
                className='form'
                onSubmit={(e) => { formSubmitApiCall(e) }}
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
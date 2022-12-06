const Image = (props) => {

    return (
        <div className="race-image">
            {/* Join the raceIndex string to the path for the public folder in order to dynamically update the img src attribute. The reason to use raceIndex and not userChoice, is that userChoice updates on option change (ie as soon as someone clicks an option in the dropdown), whereas raceIndex only updates after form submission, which is what we want */}
            <img src={`${process.env.PUBLIC_URL}/assets/${props.raceIndex}.png`} alt={props.userChoice} />
        </div>
    )
}

export default Image;
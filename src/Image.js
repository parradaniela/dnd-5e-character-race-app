const Image = (props) => {

    return (
        <div className="race-image">
            {/* Join the imageSource string to the path for the public folder in order to dynamically update the img src attribute based on the user's selection from the dropdown in the Form.js component */}
            <img src={`${process.env.PUBLIC_URL}/assets/${props.userChoice}.png`} alt={props.userChoice} />
        </div>
    )
}

export default Image;
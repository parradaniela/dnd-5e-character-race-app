// Pseudo code

// App that will use the DnD 5e API. There will be a dropdown/select element listing the base races. User can select a race, and race details will be displayed on screen.

// Will need to create state item for user's option from the select element option (userInput) (to start it will be an empty string)

// Select element will be part of a form, which will be a separate component from App.js
  // To start, I will hardcode the options/values. Stretch goal will be to use the API itself to populate the options and values (idea is to future proof the app for when more races get added)

// Create a method (handleChange) to handle the onChange event, attached to the select element, to update the userInput state
  
// The user input is added to the endpoint URL for the dnd5eapi, as per https://www.dnd5eapi.co/docs/#get-/api/-endpoint-
  // Endpoint is https://www.dnd5eapi.co/races/{userInput}
  // Once the endpoint is completed, call the API using useEffect and axios, using an empty dependency array so that the call only happens on component mount(?)
  
// The APi returns an object with the class details. Use props to take the values of some of the keys back up to the App.js component
// Use JSX to display the various object properties on screen
  // To start, display name, size, size_description, age, alignment, language_desc
  // Not sure how yet but since the results are in an object, I can't use .map() - maybe I have to create an empty array and push the properties to it and then map??? idk
    // race name would be an H2, the other elements would all be P

// Stretch goals:
  // Populating the select options with the API data instead of hardcoding
  // Working in other things like subraces for each class 
  // Updating the page with an image for each race, which I would take from https://dndraces.com/
  // Major stretch but it'd be cool to add firebase so that people could store their characters for others to see
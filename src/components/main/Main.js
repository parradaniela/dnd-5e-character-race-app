const Main = ({ race, children }) => {
    return(
        <main>
                {
                    race ? 
                        <>
                            <h2>{race}</h2>
                            {children}
                        </>
                    : <p>Select a race from the dropdown to view some of their characteristics from the 5th Edition of Dungeons and Dragons!</p>
                }
        </main>
    )
}
export default Main;
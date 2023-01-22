import Image from "./Image";

const Main = ({ race, children }) => {
    return(
        <main>
                {
                    race ? 
                    <>
                        <div className="main-flex-container">
                            <Image race={race} />
                            <h2>{race}</h2>
                        </div>
                            {children}
                        </>
                    : <p className="summary">Select a race from the dropdown to view some of their characteristics from the 5th Edition of Dungeons and Dragons!</p>
                }
        </main>
    )
}
export default Main;
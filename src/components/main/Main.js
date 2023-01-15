const Main = ({ race, children }) => {
    return(
        <main>
            {
                race ? 
                    <section className="results">
                        {children}
                    </section>
                : null 
            }
        </main>
    )
}
export default Main;
const Main = ({ children }) => {
    return(
        <main>
            <section className="results">
                {children}
            </section>
        </main>
    )
}
export default Main;
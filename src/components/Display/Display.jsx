import "./display.css";

const Display = () => {
    return (
        <section className="main__section">
            <div>
                <h1 className="main__titulo">Lucas Colque</h1>
                <p className="main__subtitulo">Desarrollador Web Full Stack</p>
                <div className="main__iconos-container">
                    <a href=""><i className="fab fa-github main__iconos" /></a>
                    <i className="fab fa-linkedin main__iconos" />
                    <a href="#"><i className="far fa-envelope main__iconos"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Display
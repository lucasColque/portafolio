import "./display.css";

const Display = () => {
    return (
        <section className="main__section" id="inicio">
            <div>
                <h1 className="main__titulo">Lucas Colque</h1>
                <p className="main__subtitulo">Desarrollador Web Full Stack</p>
                <div className="main__iconos-container">
                    <a href="https://github.com/lucasColque" target="_blank"><i className="fab fa-github main__iconos" /></a>
                    <a href="https://www.linkedin.com/in/lucas-colque/" target="_blank"><i className="fab fa-linkedin main__iconos" /></a>
                    <a href="https://web.whatsapp.com/send?phone=+541161744880" target="_blank"><i className="far fa-envelope main__iconos"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Display
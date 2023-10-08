import './footer.css';

const Footer = () => {

    return (
        <footer className="footer">
            <section className='footer__section'>

                <div className='footer__container'>
                    <p>Link a mis redes</p>
                    <div className='footer-container__iconos'>
                        <i className="fab fa-github" />
                        <i className="fab fa-linkedin" />
                        <a href="#"><i className="far fa-envelope"></i></a>
                    </div>
                </div>
                <div className='footer__container'>
                    <p>Tecnologías utilizadas para crear el portafolio</p>
                    <img src="icono de react" alt="icono de react" />
                </div>
            </section>
            <p className='footer_agradecimiento'>Gracias por visitar!</p>
        </footer>
    )
}

export default Footer
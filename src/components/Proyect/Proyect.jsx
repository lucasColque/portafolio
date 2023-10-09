import CarouselP from '../CarouselP/CarouselP';
import './proyect.css';

const Proyect = ({ nombre, descripcion, tecnologias, imagenes, descripcion_imagen, index }) => {
    return (
        <section className='proyect__section'>
            <article className='proyect__article'>
                <div className={`proyect__container ${index % 2 == 0 ? "odd" : "even"}`}>
                    <h2 className='proyect__title'>{nombre}</h2>
                    <div className='proyect-container__text'>
                        <p className='proyect__description'>{descripcion}</p>
                        <div className='proyect-container__button'>
                            <a href="#" className='proyect__button'>Demo</a>
                            <a href="#" className='proyect__button'>GitHub</a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <CarouselP imagenes={imagenes} />
                    <p>{tecnologias}</p>
                </div>
            </article>
        </section>
    )
}

export default Proyect
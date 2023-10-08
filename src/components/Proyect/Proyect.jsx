import CarouselP from '../CarouselP/CarouselP';
import './proyect.css';

const Proyect = ({ nombre, descripcion, tecnologias,imagenes, descripcion_imagen, index}) => {
    return (
        <section className='proyect__section'>
            <h2>{nombre}</h2>
            <article className='proyect__article'>
                <div className={index%2 == 0? "odd":"even"}>
                    <p>{descripcion}</p>
                    <a href="#">Demo</a>
                    <a href="#">GitHub</a>
                </div>
                <div className=''>
                    <CarouselP imagenes={imagenes}/>
                    <p>{tecnologias}</p>
                </div>
            </article>
        </section>
    )
}

export default Proyect
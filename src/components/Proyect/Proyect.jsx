import './proyect.css';

const Proyect = ({ nombre, descripcion, tecnologias, imagen_1, imagen_2, imagen_3, descripcion_imagen}) => {

    return (
        <section>
            <h2>{nombre}</h2>
            <article>
                <div>
                    <p>{descripcion}</p>
                    <a href="#">Demo</a>
                    <a href="#">GitHub</a>
                </div>
                <picture>
                    <img src={imagen_1} alt={descripcion_imagen} />
                    <img src={imagen_2} alt={descripcion_imagen} />
                    <img src={imagen_3} alt={descripcion_imagen} />
                    <p>{tecnologias}</p>
                </picture>
            </article>
        </section>
    )
}

export default Proyect
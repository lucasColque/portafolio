import './cardproyect.css';

const CardProyect = ({ nombre, descripcion, imagen }) => {
    return (
        <article className='cardproyect'>
            <picture className='cardproyect__picture'>
                <img className='cardproyect__img' src={imagen} alt={descripcion} />
            </picture>
            <h3 className='cardproyect__title'>{nombre}</h3>
            <p className='cardproyect__description'>{descripcion}</p>
            <a href="#">Demo</a>
            <a href="#">GitHub</a>
        </article>
    )
}

export default CardProyect
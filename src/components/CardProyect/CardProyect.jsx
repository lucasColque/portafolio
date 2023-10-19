import './cardproyect.css';

const CardProyect = ({ nombre, descripcion, imagen, link_demo, link_github }) => {
    console.log(link_demo);
    return (
        <article className='cardproyect'>
            <picture className='cardproyect__picture'>
                <img className='cardproyect__img' src={imagen} alt={descripcion} />
            </picture>
            <h3 className='cardproyect__title'>{nombre}</h3>
            <p className='cardproyect__description'>{descripcion}</p>
            <div className='cardproyect-container__button'>
                <a className='cardproyect__button' href={link_demo} target='_blank'>Demo</a>
                <a className='cardproyect__button' href={link_github} target='_blank'>GitHub</a>
            </div>
        </article>
    )
}

export default CardProyect
import './cardworktool.css';

const CardWorkTool = ({nombre, icono}) => {
    return (
        <article className={nombre == "PhpMyAdmin"?'cardworktool__article altura':'cardworktool__article'}>
            <img className='cardworktool__img' src={icono} alt={`${icono}`} />
            <h4 className={`cardworktool__title ${nombre.toLowerCase()}`}>{nombre}</h4>
        </article>
    )
}

export default CardWorkTool
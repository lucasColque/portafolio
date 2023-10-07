

const CardWorkTool = ({nombre, icono}) => {
    return (
        <article>
            <img src={icono} alt={`${icono}`} />
            <h4>{nombre}</h4>
        </article>
    )
}

export default CardWorkTool
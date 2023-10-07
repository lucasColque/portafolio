

const CardProyect = ({nombre, descripcion, imagen}) => {
    return (
        <article>
            <h3>{nombre}</h3>
            <picture>{imagen}</picture>
            <p>{descripcion}</p>
        </article>
    )
}

export default CardProyect
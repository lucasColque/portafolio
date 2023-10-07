import {data} from '../../data';

const Educacion = () => {
    const certificaciones = data.estudios;
    return (
        <section>
            <h2>Educación</h2>
            {
                certificaciones.map(certificado => (
                    <article key={certificado.titulo}>
                        <h3>{certificado.titulo}</h3>
                        <img src={certificado.imagen} alt={certificado.descripcion} />
                        <div>
                        <p>{certificado.descripcion}</p>
                        <a href="">Verificar</a>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

export default Educacion
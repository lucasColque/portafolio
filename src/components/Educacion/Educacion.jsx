import { data } from '../../data';
import './educacion.css';

const Educacion = () => {
    const certificaciones = data.estudios;
    return (
        <section className='educacion-section'>
                <h2>Educación</h2>
            <section className='educacion__section'>
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
        </section>
    )
}

export default Educacion
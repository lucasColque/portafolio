import { data } from '../../data';
import './educacion.css';

const Educacion = () => {
    const certificaciones = data.estudios;
    return (
        <section className='educacion-section'>
            <a href="Certificados8.pdf">a</a>
            <a href="Certificado9.pdf">b</a>
            <h2 className='educacion__title' id='educacion'>Educación</h2>
            <section className='educacion__section'>
                {
                    certificaciones.map(certificado => (
                        <article  key={certificado.titulo}>
                            <picture className='educacion__picture'>
                                <img className='educacion__img' src={certificado.imagen} alt={certificado.descripcion} />
                            </picture>
                            <h3 className='educacion__title-certificado'>{certificado.titulo}</h3>
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
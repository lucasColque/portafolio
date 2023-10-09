import './sectionproyects.css';
import { data } from '../../data';
import Proyect from '../Proyect/Proyect';
import CardProyect from '../CardProyect/CardProyect';

const SectionProyects = () => {
    const proyectos = data.proyectos_principales;
    const cardProyects = data.proyectos_secundarios;

    


    return (
        <>
            <h2 className='section-proyects__title' id='proyectos'>Proyectos</h2>
            <section className='section-proyects__principales'>

                {
                    proyectos.map((proyecto,index) => <Proyect key={proyecto.nombre} {...proyecto} index={index} />)
                }
            </section>
            <section className='section-proyects__secundarios'>
                {
                    cardProyects.map(card => <CardProyect key={card.nombre} {...card} />)
                }
            </section>
        </>
    )
}

export default SectionProyects
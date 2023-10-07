import './SectionProyects.css';
import {data} from '../../data';
import Proyect from '../Proyect/Proyect';
import CardProyect from '../CardProyect/CardProyect';

const SectionProyects = () => {
    const proyectos = data.proyectos_principales;
    const cardProyects = data.proyectos_secundarios;
    return (
        <>
        <h2>Proyectos</h2>
        <section>

        {
            proyectos.map(proyecto => <Proyect key={proyecto.nombre} {...proyecto} />)
        }
        </section>
        <section>
        {
            cardProyects.map(card => <CardProyect key={card.nombre} {...card}/>)
        }
        </section>
        </>
    )
}

export default SectionProyects
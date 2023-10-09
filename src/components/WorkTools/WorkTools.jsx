import './worktools.css';

import { data } from '../../data';
import CardWorkTool from '../CardWorkTool/CardWorkTool';

const WorkTools = () => {
    const herramientas = data.herramientas;
    const primarias = herramientas.filter(herramienta => herramienta.categoria === "Primaria");
    const secundarias = herramientas.filter(herramienta => herramienta.categoria === "Secundaria");

    return (
        <section className='worktool__section'>
            <h2 className='worktool__title-h2' id='herramientas'>Herramientas</h2>
            <h3 className='worktool__title-h3'>Primarias</h3>
            <article className='worktool__article-primarias'>
                {
                    primarias.map(primaria => <CardWorkTool key={primaria.nombre} {...primaria} />)
                }
            </article>
            <h3 className='worktool__title-h3'>Secundarias</h3>
            <article className='worktool__article-secundarias'>
                {
                    secundarias.map(secundaria => <CardWorkTool key={secundaria.nombre} {...secundaria} />)
                }
            </article>
        </section>
    )
}

export default WorkTools
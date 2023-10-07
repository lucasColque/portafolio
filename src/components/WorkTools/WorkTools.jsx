import './worktools.css';

import {data} from '../../data';
import CardWorkTool from '../CardWorkTool/CardWorkTool';

const WorkTools = () => {
    const herramientas = data.herramientas;
    const primarias = herramientas.filter(herramienta => herramienta.categoria === "Primaria");
    const secundarias = herramientas.filter(herramienta => herramienta.categoria === "Secundaria");

    return (
        <section className='worktool__section'>
            <h2>Herramientas</h2>
            <article className='worktool__article-primarias'>
                <h3>Primarias</h3>
                {
                    primarias.map(primaria => <CardWorkTool key={primaria.nombre} {...primaria}/>)
                }
            </article>
            <article className='worktool__article-secundarias'>
                <h3>Secundarias</h3>
                {
                    secundarias.map(secundaria => <CardWorkTool key={secundaria.nombre} {...secundaria}/>)
                }
            </article>
        </section>
    )
}

export default WorkTools
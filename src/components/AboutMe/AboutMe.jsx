import { data } from '../../data';
import './aboutme.css'

const AboutMe = () => {
    const { sobre_mi, sobre_mi_icono } = data;
    const palabrasResaltadas = ["Lucas", "desarrollador","web", "full", "stack","lógica", "programación", "IT", "objetivo","desarrollo"];

    const resaltarPalabras = (texto) =>{
        const palabras = texto.split(/\b(?!\s)(\w+)\b/);
        return palabras.map((palabra, index)=>{
            if(palabrasResaltadas.includes(palabra)){
                return <span className="resaltado" key={index}>{palabra}</span>;
            }
            return palabra
        })
    }


    return (
        <section className='aboutme__section container'>
            <h2 className='aboutme__title'>Sobre mí</h2>
            <div className='aboutme__div'>
                <p className='aboutme-div__text'>{resaltarPalabras(sobre_mi)}<br/><a href='../../../public/Lucas_Colque.pdf' download>Curriculum Vitae</a></p>
                <picture className='aboutme__picture'>
                    <img className='aboutme-picture__img' src={sobre_mi_icono} alt="imagen del autor" />
                </picture>
            </div>
            
        </section>
    )
}

export default AboutMe
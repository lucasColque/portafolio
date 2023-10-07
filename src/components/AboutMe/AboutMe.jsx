import { data } from '../../data';
import './aboutme.css'

const AboutMe = () => {
    const { sobre_mi, sobre_mi_icono } = data;
    return (
        <section className='aboutme__section container'>
            <h2>Sobre mí</h2>
            <div className='aboutme__div'>
                <p>{sobre_mi}<br/><a href="">Curriculum Vitae</a></p>
                <picture className='aboutme__picture'>
                    <img src={sobre_mi_icono} alt="imagen del autor" />
                </picture>
            </div>
            
        </section>
    )
}

export default AboutMe
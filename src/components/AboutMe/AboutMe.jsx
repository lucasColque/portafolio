import { data } from '../../data';
import './aboutme.css'

const AboutMe = () => {
    const {sobre_mi_icono } = data;



    return (
        <section className='aboutme__section container'>
            <h2 className='aboutme__title'>Sobre mí</h2>
            <div className='aboutme__div'>
                <p className='aboutme-div__text'>Buenas, me llamo <span className='resaltado'>Lucas</span>, tengo 22 años y actualmente soy un <span className='resaltado'>desarrollador web full stack</span> en <span className='resaltado'>Argentina</span>. Al estudiar Ingeniería en Sistemas, obtuve conocimientos tanto de <span className='resaltado'>lógica</span> como de <span className='resaltado'>programación</span>, lo que me inspiró a profundizarme en el desarrollo web. Una de las cosas que me llevó a formarme como programador fue el <span className='resaltado'>mundo IT</span> al estar en constante cambio, nunca dejas de aprender. Mi <span className='resaltado'>objetivo</span> es obtener experiencia propia y aprender de la experiencia de los demás. No hay nada mejor que compartir conocimientos con otros compañeros.<br/><a className='aboutme__cv' href='/CV Lucas Colque.pdf' target='_blank'>Curriculum Vitae</a></p>
                <picture className='aboutme__picture'>
                    <img className='aboutme-picture__img' src={sobre_mi_icono} alt="imagen del autor" />
                </picture>
            </div>
            
        </section>
    )
}

export default AboutMe
import { data } from '../../data';
import './formulario.css';

const Formulario = () => {
    const descripcion = data.formulario_descripcion;
    return (
        <section className="formulario" id="contacto">
            <div className="formulario__container">
                <div className="formulario-text__container">
                    <p className="">{descripcion}</p>
                </div>
                <form action="" className="formulario__form"  >
                    <div className="formulario-form__container">
                        <label htmlFor="nombre" className="formulario__label">Nombre</label>
                        <input type="text" className="formulario__input" id="nombre" name="nombre" placeholder="Jotaro" required/>
                    </div>
                    <div className="formulario-form__container">
                        <label htmlFor="apellido" className="formulario__label">Apellido</label>
                        <input type="text" className="formulario__input" id="apellido" name="apellido" placeholder="Joestar" required/>
                    </div>
                    <div className="formulario-form__container">
                        <label htmlFor="email" className="formulario__label">Correo Electronico</label>
                        <input type="email" className="formulario__input" id="email" name="email" placeholder="example@correo.com" required/>
                    </div>
                    <div className="formulario-form__container">
                        <label htmlFor="textArea1" className="formulario__label">Dejanos tu idea!</label>
                        <textarea className="formulario__input" id="textArea1" rows="3" name="mensaje"></textarea>
                    </div>
                    <div className="formulario-form__container">
                        <label htmlFor="formFile" className="formulario__label">Si ya cuenta con un diseño para su sitio web, puede cargarlo aquí:</label>
                        <input className="formulario__input file" type="file" id="formFile"/>
                    </div>
                        <button type="submit" className="formulario__button">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default Formulario
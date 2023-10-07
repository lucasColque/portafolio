import {data} from '../../data';

const Formulario = () => {
    const descripcion = data.formulario_descripcion;
    return (
        <section>
            <h2>Formulario de contacto</h2>
            <div>
                <p>{descripcion}</p>
                <form action="">FORMULARIO EN PROCESO</form>
            </div>
        </section>
    )
}

export default Formulario
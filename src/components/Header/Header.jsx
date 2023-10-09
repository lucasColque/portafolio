import { data } from '../../data';
import './header.css';

const Header = () => {
    const { logo } = data;
    return (
        <header className='header'>
            <nav className='navbar'>
                <picture className='navbar__picture'>
                    <img className='navbar__img' src={logo} alt="logo del portafolio" />
                </picture>
                <ul className='navbar__ul'>
                    <li className='navbar__li'><a className='navbar__link' href="#inicio">Inicio</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="#proyectos">Proyectos</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="#herramientas">Herramientas</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="#educacion">Educación</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="#contacto">Contacto</a></li>
                    <li className='navbar__li'>
                        <span className="material-symbols-outlined">
                            handyman
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
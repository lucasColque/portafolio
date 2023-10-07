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
                    <li className='navbar__li'><a className='navbar__link' href="">Inicio</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="">Proyectos</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="">Herramientas</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="">Educación</a></li>
                    <li className='navbar__li'><a className='navbar__link' href="">Contacto</a></li>
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
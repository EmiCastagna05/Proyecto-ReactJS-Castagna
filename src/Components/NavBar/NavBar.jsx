import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jsx/Logo';


function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className='navbar-logo'><Logo /></Link>
                <ul className="navbar-menu">
                    <li className="navbar-menu-link"><Link to="/">Inicio</Link></li>
                    <li className="navbar-menu-link"><Link to="/category/midi">Controladores MIDI</Link></li>
                    <li className="navbar-menu-link"><Link to="/category/sintetizadores">Sintetizadores</Link></li>
                    <li className="navbar-menu-link"><Link to="/category/interfaces">Interfaces de audio</Link></li>
                </ul>
                <Link to="/cart" className='cart'><CartWidget /></Link>
            </nav>
        </>
    );
}

export default NavBar;
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { FaHeart, FaMoon, FaSun, FaGlobe } from 'react-icons/fa';


import './NavBar.css';
import { langContext } from '../../context/lang.js';
import { themeContext } from '../../context/them.js';
import { AuthContext } from '../../context/auth.js';

function Navbare() {
  const favorite = useSelector((state) => state.sliceFavorite.favorite);
  const len = favorite.length;

  const { lang, setLang } = useContext(langContext);
  const { theme ,setTheme } = useContext(themeContext);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLang(lang === 'EN' ? 'AR' : 'EN');

  const {logout}=useContext(AuthContext)
  return (
    <Navbar
      variant={theme}
      expand="lg"
      className={`netflix-navbar mb-3 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
    >
      <Container>
        <NavLink to="/" className="navbar-brand netflix-brand">
        Netflix
        </NavLink>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavLink
              to="/main/movies"
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
            >
              {lang === 'EN' ? 'Movies' : 'أفلام'}
            </NavLink>

            <NavLink
              to="/main/favorite"
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
            >
              {lang === 'EN' ? 'Favorite' : 'المفضلة'}
            </NavLink>

             <NavLink
              to="/main/profile"
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
            >
              {lang === 'EN' ? 'profile' : 'ملف الشخصي '}
            </NavLink>
          </Nav>

          <Nav className="align-items-center">
            {/* Logout */}
            <NavLink
              to="/login"
              className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}` }
              onClick={logout}
            >
              {lang === 'EN' ? 'Log Out' : 'تسجيل الخروج'}
            </NavLink>

            {/* Favorite Icon with badge */}
            <NavLink to="/main/favorite" className="nav-link position-relative mx-2">
              <FaHeart size={26} color="tomato" />
              {len > 0 && <span className="favorite-badge">{len}</span>}
            </NavLink>

            {/* Theme Toggle */}
            <div className="nav-link cursor-pointer mx-2" onClick={toggleTheme} title="Toggle Theme">
              {theme === 'dark' ? <FaSun size={22} /> : <FaMoon size={22} />}
            </div>

            {/* Language Toggle */}
            <div className="nav-link cursor-pointer mx-2" onClick={toggleLanguage} title="Change Language">
              <FaGlobe size={20} /> <span style={{ marginLeft: '5px' }}>{lang}</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbare;

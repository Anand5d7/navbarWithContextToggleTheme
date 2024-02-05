// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navBarBgClassName = isDarkTheme
        ? 'navBar-bg-dark'
        : 'navBar-bg-light'

      const navBarWebsiteImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navBarThemeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBarTextClassName = isDarkTheme
        ? 'navBar-text-dark'
        : 'navBar-text-light'

      return (
        <div className="navbar-container">
          <div className={`navbar-content ${navBarBgClassName}`}>
            <img
              src={navBarWebsiteImageUrl}
              alt="website logo"
              className="website-image"
            />
            <ul className="navbar-list-container">
              <Link to="/" className="link-item">
                <li className={`list-item ${navBarTextClassName}`}>Home</li>
              </Link>
              <Link to="/about" className="link-item">
                <li className={`list-item ${navBarTextClassName}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-button"
              data-testid="theme"
              onClick={onToggleTheme}
            >
              <img
                src={navBarThemeImageUrl}
                alt="theme"
                className="theme-image"
              />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

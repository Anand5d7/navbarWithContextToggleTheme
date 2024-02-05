// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutTextClassName = isDarkTheme
        ? 'about-text-dark'
        : 'about-text-light'

      return (
        <div className="app-about-container">
          <Navbar />
          <div className={`about-container ${aboutBgClassName}`}>
            <img src={aboutImageUrl} alt="about" className="about-image" />
            <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

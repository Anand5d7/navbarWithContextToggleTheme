// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'notFound-bg-dark'
        : 'notFound-bg-light'

      const notFoundHeading = isDarkTheme
        ? 'notFound-heading-dark'
        : 'notFound-heading-light'
      const notFoundPara = isDarkTheme
        ? 'notFound-para-dark'
        : 'notFound-para-light'

      return (
        <div className={`not-found-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${notFoundHeading}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-para ${notFoundPara}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

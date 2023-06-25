// Write your code here

import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
      } = value
      const clickOnLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const clickOnRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      const clickOnContent = () => {
        onToggleShowContent()
      }
      return (
        <div className="ConfigurationController-container">
          <h1 className="Layout-heading">Layout</h1>
          <div className="check-container">
            <input
              type="checkbox"
              id="check-1"
              className="check-input"
              onClick={clickOnContent}
            />
            <label htmlFor="check-1" className="content">
              Content
            </label>
          </div>
          <div className="check-container">
            <input
              type="checkbox"
              id="check-2"
              className="check-input"
              onClick={clickOnLeftNavbar}
            />
            <label htmlFor="check-2" className="content">
              Left Navbar
            </label>
          </div>
          <div className="check-container">
            <input
              type="checkbox"
              id="check-3"
              className="check-input"
              onClick={clickOnRightNavbar}
            />
            <label htmlFor="check-3" className="content">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

class Body extends Component {
  leftNavbar = () => (
    <div className="left-navbar-container">
      <h1 className="left-navbar-heading">Left Navbar Menu</h1>
      <ul className="unordered">
        <li className="left-navbar-para">Item 1</li>
        <li className="left-navbar-para">Item 2</li>
        <li className="left-navbar-para">Item 3</li>
        <li className="left-navbar-para">Item 4</li>
      </ul>
    </div>
  )

  rightNavbar = () => (
    <div className="right-navbar-container">
      <h1 className="right-navbar-heading">Right Navbar Menu</h1>
      <p className="box-para box">Ad 1</p>
      <p className="box-para box">Ad 2</p>
    </div>
  )

  BodyContent = () => (
    <div className="body-content-container">
      <h1 className="left-navbar-heading">Content</h1>
      <p className="left-navbar-para">
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {showContent, showLeftNavbar, showRightNavbar} = value
          return (
            <div className="body-container">
              {showLeftNavbar ? this.leftNavbar() : ''}
              {showContent ? this.BodyContent() : ''}
              {showRightNavbar ? this.rightNavbar() : ''}
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}
export default Body

/*  */

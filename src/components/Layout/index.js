// Write your code here
import './index.css'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

const Layout = () => {
  console.log('layout')
  return (
    <div className="layout-container">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
export default Layout

import MiddleHeader from './MiddleHeader'
import Navbar from './Navbar'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div className=' h-60	' >
      <TopHeader/>
      <MiddleHeader/>
      <Navbar/>
    </div>
  )
}

export default Header

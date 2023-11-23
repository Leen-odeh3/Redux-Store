import MiddleHeader from './MiddleHeader'
import Navbar from './Navbar'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div className='h-60 w-full	' >
      <TopHeader/>
      <MiddleHeader/>
      <Navbar/>
    </div>
  )
}

export default Header

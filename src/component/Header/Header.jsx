import { useState } from 'react'
import MiddleHeader from './MiddleHeader'
import Navbar from './Navbar'
import TopHeader from './TopHeader'

const Header = () => {
const [toggle,settoggle]=useState(false);
  return (
    <div  >
      <TopHeader settoggle={settoggle}/>
      <MiddleHeader/>
      <Navbar toggle={toggle} settoggle={settoggle}/>
    </div>
  )
}

export default Header

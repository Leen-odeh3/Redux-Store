import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from '../component/Footer/Footer'

const index = () => {
  return (
    <div>
      <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </div>
  )
}

export default index
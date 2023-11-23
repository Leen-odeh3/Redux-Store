import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../Layout/index'
import Header from "../component/Header/Header";
import Home from "../Pages/Home";
import SingleProduct  from '../pages/SingleProduct/SingleProduct'
import Footer from "../component/Footer/Footer";

const index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path='/' element={<Layout/>}/>
       <Route path='/products/:id' element={<SingleProduct />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default index;

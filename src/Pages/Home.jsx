import Banner from "../component/Banner/Banner"
import Slider from "../component/Slider/Slider"
import Category from "../component/category/category"
import SpecialOffers from "../component/special-offers/SpecialOffers"
import {products} from '../data/products'

const Home = () => {

  const laptops = products.filter((p) => p.isLaptop === true);
const mobiles = products.filter((p) => p.isLaptop === false);

  return (
    <div>
    <Banner/>
  <Category/>
  <SpecialOffers/>
  <HeadingTitle title="الجدید من اللابتوبات" />
  <Slider products={laptops}/>
  <HeadingTitle title="الجدید من الجوالات" />
  <Slider products={mobiles}/>
  <HeadingTitle title="تسوق حسب المارک" />
    </div>
  )
}

export default Home

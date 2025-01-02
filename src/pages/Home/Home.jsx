import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import Menu from "./Menu";
import Testimonials from "./Testimonials";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
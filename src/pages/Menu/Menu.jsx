import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import banner from "/src/assets/menu/banner3.jpg";
import dessertBg from "/src/assets/menu/dessert-bg.jpeg";
import pizzaBg from "/src/assets/menu/pizza-bg.jpg";
import saladBg from "/src/assets/menu/salad-bg.jpg";
import soupBg from "/src/assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu | BistroBoss</title>
      </Helmet>
      <Cover
        img={banner}
        title={"Our Menu"}
        subtitle={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <SectionTitle title="today's offer" subtitle="Don't Miss"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        coverImg={dessertBg}
        title={"desserts"}
      ></MenuCategory>
      <MenuCategory items={pizza} coverImg={pizzaBg} title={"pizza"}></MenuCategory>
      <MenuCategory items={salad} coverImg={saladBg} title={"salads"}></MenuCategory>
      <MenuCategory items={soup} coverImg={soupBg} title={"soups"}></MenuCategory>
    </div>
  );
};

export default Menu;

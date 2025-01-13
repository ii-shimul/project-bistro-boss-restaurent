import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuCard from "../../components/MenuCard";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter(foo => foo.category === "popular")
        setMenu(popular);
      });
  }, []);
  return (
    <section className="max-w-7xl mx-auto mb-10 flex flex-col justify-center gap-3">
      <SectionTitle
        subtitle="Check it out"
        title="from our menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6">
        {menu.map((food) => (
          <MenuCard key={food._id} food={food}></MenuCard>
        ))}
      </div>
      <button className="btn mx-auto btn-outline border-0 border-b-4 mt-5">
        VIEW FULL MENU
      </button>
    </section>
  );
};

export default Menu;

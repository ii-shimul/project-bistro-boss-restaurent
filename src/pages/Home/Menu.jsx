import SectionTitle from "../../components/SectionTitle";
import MenuCard from "../../components/MenuCard";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((foo) => foo.category === "popular");
  return (
    <section className="max-w-7xl mx-auto mb-10 flex flex-col justify-center gap-3">
      <SectionTitle
        subtitle="Check it out"
        title="from our menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-6">
        {popular.map((food) => (
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

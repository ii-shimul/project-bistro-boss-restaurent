import Cover from "../../components/Cover";
import MenuCard from "../../components/MenuCard";
import PropTypes from "prop-types";

const MenuCategory = ({ items, title, coverImg, subtitle }) => {
  return (
    <>
      {title && (
        <Cover img={coverImg} title={title} subtitle={subtitle} height="md:h-[600px]"></Cover>
      )}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col justify-center pb-5 pt-16">
        <div className="grid grid-cols-2 gap-6 ">
          {items.map((food) => (
            <MenuCard key={food._id} food={food}></MenuCard>
          ))}
        </div>
        <button className="uppercase btn mx-auto btn-outline border-0 border-b-4 mt-8">
          order your favorite food
        </button>
      </div>
    </>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  coverImg: PropTypes.string,
  subtitle: PropTypes.string,
};

export default MenuCategory;

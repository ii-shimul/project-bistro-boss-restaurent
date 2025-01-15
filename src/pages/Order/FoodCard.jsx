import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  return (
    <div className="text-center bg-slate-100 h-full w-full">
      <img src={item.image} alt="" />
      <div className="p-5 flex flex-col">
        <h1 className="text-xl font-semibold mb-3">{item.name}</h1>
        <p className="text-left opacity-70 flex-grow">{item.recipe}</p>
        <button className="uppercase btn mx-auto btn-outline border-0 border-b-4 mt-4 hover:border-orange-300 hover:text-orange-300 transition duration-300">
          add to cart
        </button>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
  }).isRequired,
};
export default FoodCard;

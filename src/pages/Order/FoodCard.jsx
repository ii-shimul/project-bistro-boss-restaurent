import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const [, refetch] = useCart();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const nav = useNavigate();
  const location = useLocation();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        userEmail: user.email,
        id: food._id,
        img: food.image,
        name: food.name,
        price: food.price
      };
      axiosSecure.post("/cart", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${food.name} added to cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You have to login first.",
        text: "Do you want to login now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          nav("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="text-center bg-slate-100 h-full w-full">
      <img src={item.image} alt="" />
      <div className="p-5 flex flex-col">
        <h1 className="text-xl font-semibold mb-3">{item.name}</h1>
        <p className="text-left opacity-70 flex-grow">{item.recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="uppercase btn mx-auto btn-outline border-0 border-b-4 mt-4 hover:border-orange-300 hover:text-orange-300 transition duration-300"
        >
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

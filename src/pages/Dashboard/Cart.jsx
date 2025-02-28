import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle title="wanna add more?" subtitle="Your Cart"></SectionTitle>
      <div className="w-fit mx-auto">
        <div className="flex gap-16">
          <h3 className="text-3xl">Total Items: {cart.length}</h3>
          <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
          <button className="btn bg-[#D1A054]">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Q.</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.length !== 0 &&
                cart.map((food, index) => {
                  return (
                    <tr key={food._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-auto w-16">
                              <img src={food.img} alt="food image" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-base">{food.name}</td>
                      <td>{food.price}</td>
                      <th>
                        <button
                          onClick={() => handleDelete(food._id)}
                          className="btn btn-ghost btn-sm"
                        >
                          <FaTrash className="text-red-600"></FaTrash>
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {cart.length === 0 && (
          <h1 className="text-center text-2xl">Your cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;

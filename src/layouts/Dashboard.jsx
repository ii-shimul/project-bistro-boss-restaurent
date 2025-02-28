import { BookIcon, Calendar, Home, Mail, Menu, ShoppingBag, ShoppingCart, Star, Wallet } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex font-serif">
      <div className="w-64 md:min-h-screen bg-[#D1A054]">
        <div className="text-center py-4 w-fit mx-auto">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <p className="font-semibold tracking-widest text-left">RESTAURANT</p>
        </div>
        <ul className="menu">
          <li>
            <NavLink to={"/dashboard/user-home"}>
              <Home />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <Calendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment-history"}>
              <Wallet></Wallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <ShoppingCart></ShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/add-review"}>
              <Star></Star>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/my-booking"}>
              <BookIcon></BookIcon>
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <Menu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <ShoppingBag />
              Order
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <Mail></Mail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-[#F6F6F6]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

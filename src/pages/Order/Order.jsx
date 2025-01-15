import { useState } from "react";
import Cover from "../../components/Cover";
import orderImg from "/src/assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "./FoodCard";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drink = menu.filter((item) => item.category === "drink");
  return (
    <div className="pb-8">
      <Helmet>
        <title>Order | BistroBoss</title>
      </Helmet>
      <Cover
        img={orderImg}
        title="our shop"
        subtitle={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>
      <div className="max-w-7xl mx-auto pt-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            className={
              "mb-8 flex gap-5 justify-center text-2xl uppercase font-semibold cursor-pointer"
            }
          >
            <Tab className={"border-0 border-b-2"}>Salad</Tab>
            <Tab className={"border-0 border-b-2"}>Pizza</Tab>
            <Tab className={"border-0 border-b-2"}>Soups</Tab>
            <Tab className={"border-0 border-b-2"}>Desserts</Tab>
            <Tab className={"border-0 border-b-2"}>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-4 gap-5">
              {salad.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-5">
              {pizza.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-5">
              {soup.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-5">
              {dessert.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-5">
              {drink.map((item) => (
                <FoodCard item={item} key={item._id}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;

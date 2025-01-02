import SectionTitle from "../../components/SectionTitle";
import featImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section
      className="pt-3 pb-16 bg-fixed bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${featImg})`, backgroundColor: "black" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-[1]">
        <SectionTitle
          title="from our menu"
          subtitle="Should try"
          color="text-white"
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-8 max-w-7xl mx-auto">
          <div>
            <img src={featImg} alt="" />
          </div>
          <div className="text-white space-y-3 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            <p>January 1st, 2025</p>
            <h1 className="font-bold text-2xl uppercase">where can i get some?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              corporis sed molestias dolorum nulla fugiat, delectus provident
              similique in soluta, incidunt accusamus perferendis quibusdam
              facere ipsa expedita impedit beatae libero!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-5"><span className="text-white">READ MORE</span></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

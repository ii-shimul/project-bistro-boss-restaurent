import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, height = "md:h-[750px]", title, subtitle}) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      strength={-250}
    >
      <div className={`hero h-96 ${height}`}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center w-full">
          <div className=" bg-black bg-opacity-40 md:py-[10%] md:px-[30%] rounded-md">
            <h1 className="mb-5 text-5xl font-bold uppercase font-serif">{title}</h1>
            {subtitle && <p className="max-w-md mb-5">{subtitle}</p>}
          </div>
        </div>
      </div>
    </Parallax>
  );
};
Cover.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Cover;

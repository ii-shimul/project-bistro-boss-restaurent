import PropTypes from 'prop-types';

const MenuCard = ({food}) => {
  const {name, image, recipe, price} = food;

  return (
    <div className='flex'>
      <img src={image} alt="" className='rounded-e-full rounded-b-full h-[104px] mr-5' />
      <div className=''>
        <h1 className='uppercase text-2xl font-serif'>{name} →</h1>
        <p className='opacity-60'>{recipe}</p>
      </div>
      <p className='text-orange-400 text-lg'>${price}</p>
    </div>
  );
};

MenuCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    recipe: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default MenuCard;
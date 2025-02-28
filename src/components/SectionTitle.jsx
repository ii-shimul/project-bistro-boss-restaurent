import PropTypes from 'prop-types';

const SectionTitle = ({title, subtitle, color}) => {

  return (
    <div className='my-10 w-fit mx-auto'>
      <p className='italic text-orange-400 text-center mb-2'>---{subtitle}---</p>
      <h1 className={`border-y-2 py-5 text-4xl text-center uppercase text-nowrap ${color && color}`}>{title}</h1>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SectionTitle;
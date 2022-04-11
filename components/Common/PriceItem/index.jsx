import PropTypes from 'prop-types';

const PriceItem = ({name, price, description, features, withButton}) => {
  const clickHandler = (event) => {
    event.preventDefault();

    try {
      Intercom('show');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="pricing-plan">
        <div className="pricing-plan__title" dangerouslySetInnerHTML={{__html: name}}></div>
        <div className="pricing-plan__price" dangerouslySetInnerHTML={{__html: price}}></div>
        <div className="pricing-plan__description" dangerouslySetInnerHTML={{__html: description}}></div>
        {(features.length > 0) &&
          <ul className="pricing-plan__features">
            {features.map((feature, index) => {
              return (
                <li className="pricing-plan__feature" key={index} dangerouslySetInnerHTML={{__html: feature}}></li>
              )
            })}
          </ul>
        }
        {withButton &&
          <button
            className={'bg-purple-bright flex justify-center items-center text-white font-poppins font-normal text-center mt-4 rounded py-2 px-5 laptop:px-8 laptop:font-medium transition-all duration-300'}
            onClick={(event) => clickHandler(event)}
          >
            Get in Touch
          </button>
        }
      </div>
    </>
  )
}

PriceItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  withButton: PropTypes.bool,
};

PriceItem.defaultProps = {
  name: '',
  price: '',
  description: '',
  features: [],
  withButton: false
};

export default PriceItem
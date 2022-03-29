import PropTypes from 'prop-types';

const PriceItem = ({name, price, description, features}) => {
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
      </div>
    </>
  )
}

PriceItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
};

PriceItem.defaultProps = {
  name: '',
  price: '',
  description: '',
  features: [],
};

export default PriceItem
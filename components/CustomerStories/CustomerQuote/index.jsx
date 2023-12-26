import PropTypes from 'prop-types';
import Image from 'next/image';
import helpers from '../../../helpers';

const CustomerQuote = ({ node }) => {
  const props = node.properties;

  return (
    <div className={`w-full px-8 py-6  border-l-3 border-purple  `}>
      <div className="italic font-normal text-lg">“{props.text}“</div>

      <div className="flex items-center mt-4">
        <div>
          {helpers.isValidUrl(props.imageurl) && (
            <div className="!w-[40px] !h-[40px] overflow-hidden rounded-[100%] mr-4">
              <Image
                width={40}
                height={40}
                src={props.imageurl}
                alt={props.name}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col ">
          <div className="text-sm font-bold">{props.name}</div>
          <div className="text-xs font-normal">{props.title}</div>
        </div>
      </div>
    </div>
  );
};

CustomerQuote.propTypes = {
  node: PropTypes.any,
};

CustomerQuote.defaultProps = {
  node: null,
};

export default CustomerQuote;

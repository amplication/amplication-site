import PropTypes from 'prop-types';

const SplitSection = ({
  firstSectionNode,
  SecondSectionNode,
  reverse,
  className,
}) => {
  return (
    <>
      <div
        className={`flex gap-12 py-32 justify-center items-center ${
          reverse ? 'flex-row-reverse' : 'flex-row'
        } max-medium:flex-col-reverse  ${className}`}
      >
        <div className="flex items-center flex-1 text-left max-medium:text-center max-w-[568px]">
          {firstSectionNode}
        </div>
        <div className="flex items-center flex-1 text-center max-w-[568px]">
          {SecondSectionNode}
        </div>
      </div>
    </>
  );
};

SplitSection.propTypes = {
  firstSectionNode: PropTypes.node,
  secondSectionNode: PropTypes.node,
  className: PropTypes.string,
  reverseOrder: PropTypes.bool,
};

SplitSection.defaultProps = {
  firstSectionNode: null,
  secondSectionNode: null,
  className: '',
  reverseOrder: false,
};

export default SplitSection;

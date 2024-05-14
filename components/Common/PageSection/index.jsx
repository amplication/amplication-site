import PropTypes from 'prop-types';

const PageSection = ({
  children,
  className,
  innerClassName,
  alternate,
  light,
  addMargins,
  ...rest
}) => {
  return (
    <>
      <section
        {...rest}
        className={`${className} ${
          light ? '!bg-dark-black-80' : alternate && '!bg-light-blue'
        } ${addMargins && 'py-5 laptop:py-12'}`}
      >
        <div
          className={`${innerClassName} w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop`}
        >
          {children}
        </div>
      </section>
    </>
  );
};

PageSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  alternate: PropTypes.bool,
  light: PropTypes.bool,
  addMargins: PropTypes.bool,
};

PageSection.defaultProps = {
  className: '',
  innerClassName: '',
  addMargins: false,
  light: false,
};

export default PageSection;

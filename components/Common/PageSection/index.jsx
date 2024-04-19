import PropTypes from 'prop-types';

const PageSection = ({
  children,
  className,
  innerClassName,
  alternate,
  ...rest
}) => {
  return (
    <>
      <section
        {...rest}
        className={`py-12 ${className} ${alternate && '!bg-light-blue'}`}
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
};

PageSection.defaultProps = {
  className: '',
  innerClassName: '',
};

export default PageSection;

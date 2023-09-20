import PropTypes from 'prop-types';
import Button from '../Button';

const ContentBox = ({ title, body, ctaLabel, ctaUrl, className }) => {
  return (
    <>
      <div className={`text-sm font-normal ${className} `}>
        <div className="text-2xl">{title}</div>
        <div className="">{body}</div>
        {ctaLabel !== '' && (
          <Button
            text={ctaLabel}
            backgroundColor="transparent"
            hoverBackgroundColor="transparent"
            isLink={true}
            //onClick={handleStartNowClick}
            href={ctaUrl}
            className="mt-8 border border-1 border-white rounded !py-1.5 !px-3 inline-flex"
            delayLinkMs={300}
          />
        )}
      </div>
    </>
  );
};

ContentBox.propTypes = {
  title: PropTypes.node,
  body: PropTypes.node,
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  className: PropTypes.string,
};

ContentBox.defaultProps = {
  title: null,
  body: null,
  ctaLabel: '',
  ctaUrl: '',
  className: '',
};

export default ContentBox;

import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const FeatureItem = ({ image, alt, title, content, linkUrl, linkText }) => {
  return (
    <>
      <div className="feature-item">
        {image.src && (
          <span className={'feature-item__icon'}>
            <Image layout="fixed" src={image} alt={alt} />
          </span>
        )}
        <div className="feature-item__content">
          <div
            className="feature-item__title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            className="feature-item__description text-base"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          {linkText && linkUrl && (
            <Link href={linkUrl} passHref={true}>
              <a target="_blank" className="btn btn-primary">
                {linkText}
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

FeatureItem.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
};

FeatureItem.defaultProps = {
  image: {},
  alt: '',
  title: '',
  content: '',
  linkUrl: '',
  linkText: '',
};

export default FeatureItem;

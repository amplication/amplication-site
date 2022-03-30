import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const FeatureItem = ({image, alt, title, content, linkUrl, linkText}) => {
  return (
    <>
      <div className="team-action-panel">
        {image.src &&
          <span className={'team-action-panel__icon'}>
            <Image
              layout="fixed"
              src={image}
              alt={alt}
            />
          </span>
        }
        <div className="team-action-panel__content">
          <div className="team-action-panel__title" dangerouslySetInnerHTML={{__html: title}}></div>
          <div className="team-action-panel__description text-base text-white" dangerouslySetInnerHTML={{__html: content}}></div>
          {(linkText && linkUrl) &&
            <Link
              href={linkUrl}
              passHref={true}
            >
              <a
                target="_blank"
                className="btn btn-primary"
              >
                {linkText}
              </a>
            </Link>
          }

        </div>
      </div>
    </>
  )
}

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

export default FeatureItem
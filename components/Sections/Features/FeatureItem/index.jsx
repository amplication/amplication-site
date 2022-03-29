import Image from "next/image";
import PropTypes from 'prop-types';

const FeatureItem = ({id, icon, image, iconClass, title, content}) => {
  return (
    <>
      <section id={id} className="features-page-feature">
        <div className="container-custom">
          <div
            className="row d-flex justify-content-between align-items-center feature-page-card"
          >
            <div className="col-sm-12 col-md-7 pr-3">
              <div className="feature-card-header">
              <span className={iconClass}>
                {icon &&
                  <Image
                    src={icon}
                    alt={title}
                  />
                }
              </span>
              </div>
              <div className="feature-title">
                {title}
              </div>
              <div className="feature-page-description" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
            <div className="col-sm-12 col-md-5 feature-image" data-aos="fade-up-left">
              {image &&
                <Image
                  src={image}
                  alt={title}
                />
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

FeatureItem.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

FeatureItem.defaultProps = {
  id: '',
  icon: '',
  image: '',
  iconClass: 'feature-page-icon',
  title: '',
  content: '',
};

export default FeatureItem
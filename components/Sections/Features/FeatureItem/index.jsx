import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';

const FeatureItem = ({id, icon, image, iconClass, title, content, buttons, isComingSoon}) => {
  return (
    <>
      <section id={id} className="features-page-feature" key={id}>
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
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
              {isComingSoon &&
                <span className="coming-soon">Coming soon</span>
              }
              </div>
              <div className="feature-title">
                {title}
              </div>
              <div className="feature-page-description text-base text-white" dangerouslySetInnerHTML={{__html: content}}></div>
              {(buttons.length > 0) &&
                <div className="buttons-wrapper d-flex mb-4 align-items-center justify-content-start mt-4">
                  {buttons.map((button, index) => {
                    return (
                      <Link
                        href={(button.url ?? '')}
                        passHref={true}
                        key={index}
                      >
                        <a className={(button.buttonClass ?? '')}>
                          <span className={(button.iconClass ?? '')}> </span>
                          {(button.title ?? '')}
                        </a>
                      </Link>
                    )
                  })}
                </div>
              }
            </div>
            <div className="col-sm-12 col-md-5 feature-image" data-aos="fade-up-left">
              {image &&
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={320}
                  objectFit={'contain'}
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
  icon: PropTypes.object,
  image: PropTypes.object,
  iconClass: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  buttons: PropTypes.array,
  isComingSoon: PropTypes.bool,
};

FeatureItem.defaultProps = {
  id: '',
  icon: {},
  image: {},
  iconClass: 'feature-page-icon',
  title: '',
  content: '',
  buttons: [],
  isComingSoon: false,
};

export default FeatureItem
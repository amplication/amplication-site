import PropTypes from 'prop-types';

const ContentBlock = ({title, blockClass, content}) => {
  return (
    <>
      <section className={blockClass}>
        <div className="container-custom">
          <div className="row d-flex align-items-end align-items-md-center">
            <div className="col-12 col-md-8 offset-md-2">
              <h1 className="main-title" dangerouslySetInnerHTML={{__html: title}}></h1>

              <h3 className="h3" dangerouslySetInnerHTML={{__html: content}}></h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

ContentBlock.propTypes = {
  title: PropTypes.string,
  blockClass: PropTypes.string,
  content: PropTypes.string,
};

ContentBlock.defaultProps = {
  title: '',
  blockClass: '',
  content: '',
};

export default ContentBlock
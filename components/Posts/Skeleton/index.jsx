import PropTypes from 'prop-types';

const Skeleton = ({postPerPage}) => {
  return (
    <>
      {[...Array(postPerPage)].map((x, i) => {
        return (
          <div
            className="display-flex flex-col justify-start items-stretch"
            key={i}
          >
            <div className="w-full aspect-thumbnail-normal laptop:aspect-thumbnail rounded-2xl mb-6 shining-base-element overflow-hidden"></div>
            <div className="w-full flex justify-start items-center mb-4">
              <div className="w-8 h-8 rounded-full mr-3 shining-avatar-element"></div>
              <div className="grow h-8 rounded-xl shining-postavatar-element"></div>
            </div>
            <div className="w-full flex justify-start items-center gap-1.5 mb-4">
              <div className="w-16 h-5 rounded-xl shining-tag-element"></div>
              <div className="w-14 h-5 rounded-xl shining-tag-element"></div>
            </div>
            <div className="w-full h-7 rounded-xl laptop:mb-4 shining-base-element"></div>
            <div className="hidden laptop:block w-full h-12 rounded-xl mb-4 shining-base-element"></div>
          </div>
        );
      })}
    </>
  );
};

Skeleton.propTypes = {
  postPerPage: PropTypes.number.isRequired,
};

export default Skeleton;

import Link from 'next/link';
import PropTypes from 'prop-types';

const StartNow = ({
  title,
  description,
  linkPrimary,
  linkSecondary,
  backgroundClass,
}) => {
  return (
    <>
      <section className={'!pt-5 !pb-4 laptop:!py-20 ' + backgroundClass}>
        <h2 className="mx-auto text-[32px] !font-semibold leading-[48px] tracking-normal text-center max-w-[960px]">
          {title}
        </h2>
        {description && (
          <div
            className="mx-auto text-lg font-normal leading-[27px] tracking-normal text-center max-w-[780px]"
            dangerouslySetInnerHTML={{__html: description}}
          ></div>
        )}
        <div className="d-flex justify-content-center align-items-center mt-8">
          {linkPrimary.href && (
            <Link href={linkPrimary.href} passHref={true}>
              <a
                target="_blank"
                className="btn btn-primary btn-sm !text-sm !h-10 mr-4 w-[120px] !px-0 !h-[34px] !font-normal"
                rel="noreferrer"
              >
                {linkPrimary.title}
              </a>
            </Link>
          )}
          {linkSecondary.href && (
            <Link href={linkSecondary.href} passHref={true}>
              <a
                target="_blank"
                className="d-flex justify-content-center align-items-center outline-button !text-sm text-white !h-10 mr-2 w-[120px] rounded !px-0 !h-[34px] !font-normal !bg-light-blue hover:!bg-dark-black-70"
                rel="noreferrer"
              >
                {linkSecondary.title}
              </a>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

StartNow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkPrimary: PropTypes.object,
  linkSecondary: PropTypes.object,
  backgroundClass: PropTypes.string,
};

StartNow.defaultProps = {
  title: '',
  description: '',
  backgroundClass: 'background-transparent',
  linkPrimary: {
    title: '',
    href: '',
  },
  linkSecondary: {
    title: '',
    href: '',
  },
};

export default StartNow;

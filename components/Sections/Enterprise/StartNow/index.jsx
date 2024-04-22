import Link from 'next/link';
import PropTypes from 'prop-types';
import OutlineButton from '../../../Common/Button/button-outline';
import PrimaryButton from '../../../Common/Button/button-primary';

const StartNow = ({
  title,
  description,
  linkPrimary,
  linkSecondary,
  backgroundClass,
}) => {
  return (
    <>
      <section
        className={
          '!pt-5 !pb-4 tablet:!py-20 flex flex-col gap-4 ' + backgroundClass
        }
      >
        <h2 className="mx-auto text-5xl font-semibold text-center max-w-[960px]">
          {title}
        </h2>
        {description && (
          <div
            className="mx-auto text-lg  text-center max-w-[780px]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        <div className="flex items-center justify-center gap-2">
          {linkPrimary.href && (
            <PrimaryButton
              text={linkPrimary.title}
              isLink={true}
              //onClick={handleMainClick}
              href={linkPrimary.href}
              delayLinkMs={300}
            />
          )}
          {linkSecondary.href && (
            <OutlineButton
              text={linkSecondary.title}
              isLink={true}
              //onClick={handleSecondaryClick}
              href={linkSecondary.href}
              delayLinkMs={300}
            />
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
  target: PropTypes.string,
};

StartNow.defaultProps = {
  title: '',
  description: '',
  backgroundClass: 'background-transparent',
  linkPrimary: {
    title: '',
    href: '',
    target: '',
  },
  linkSecondary: {
    title: '',
    href: '',
    target: '',
  },
};

export default StartNow;

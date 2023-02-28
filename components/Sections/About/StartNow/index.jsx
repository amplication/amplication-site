import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../../../Common/Button';

const StartNow = ({title, linkPrimary, linkOutline, linkSecondary}) => {
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop !pt-8 !pb-10 desktop:!py-20">
        <h2 className="roadmap-heading text-center mx-auto !mb-8 max-w-[960px]">
          {title}
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          {linkPrimary.href && (
            <Link href={linkPrimary.href} passHref={true}>
              <a
                target="_blank"
                className="btn btn-primary btn-sm !text-sm !h-10 mr-4 w-full max-w-[104px] !px-0 !h-[34px] !font-normal"
                rel="noreferrer"
              >
                {linkPrimary.title}
              </a>
            </Link>
          )}
          {linkOutline.title && (
            <Button
              text={linkOutline.title}
              className="outline-button !text-sm !h-10 mr-2 w-full max-w-[104px] !px-0 !h-[34px] !font-normal !bg-light-blue hover:!bg-dark-black-70"
              isLink={false}
              onClick={() => window.HubSpotConversations.widget.open()}
            />
          )}
          {linkSecondary.title && (
            <Button
              text={linkSecondary.title}
              className="btn btn-outline-secondary !text-lg !h-10 ml-2 w-full max-w-[114px] !px-0"
              isLink={false}
              onClick={() => window.HubSpotConversations.widget.open()}
            />
          )}
        </div>
      </section>
    </>
  );
};

StartNow.propTypes = {
  title: PropTypes.string,
  linkPrimary: PropTypes.object,
  linkOutline: PropTypes.object,
  linkSecondary: PropTypes.object,
};

StartNow.defaultProps = {
  title: 'Help us shape the best developer platform in the world',
  linkPrimary: {
    href: 'https://amplication.breezy.hr/',
    title: 'View careers',
  },
  linkOutline: {
    title: '',
  },
  linkSecondary: {
    title: '',
  },
};

export default StartNow;

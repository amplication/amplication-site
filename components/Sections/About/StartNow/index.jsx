import Link from "next/link";
import PropTypes from "prop-types";

const StartNow = ({
  title,
  linkPrimary,
  linkSecondary,
}) => {
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop !py-36">
        <h2 className="main-title text-center mx-auto !mb-10 !text-[56px] !leading-[84px] font-bold max-w-[960px]">{title}</h2>
        <div className="d-flex justify-content-center align-items-center">
          { linkPrimary.href &&
              (
                <Link href={linkPrimary.href} passHref={true} >
                  <a target="_blank" className="btn btn-primary btn-sm w-[182px] !h-10 mr-3" rel="noreferrer">{linkPrimary.title}</a>
                </Link>
              )
          }
          { linkSecondary.href &&
            (
              <Link href={linkSecondary.href} passHref={true} >
                <a target="_blank" className="btn btn-outline-secondary btn-sm w-[182px] !h-10 ml-3 text-black80" rel="noreferrer">{linkSecondary.title}</a>
              </Link>
            )
          }
        </div>
      </section>
    </>
  );
};

StartNow.propTypes = {
  title: PropTypes.string,
  linkPrimary: PropTypes.object,
  linkSecondary: PropTypes.object,
};

StartNow.defaultProps = {
  title: 'Help us shape the best developer platform in the world',
  linkPrimary: {
    href: 'https://discord.gg/Z2CG3rUFnu',
    title: 'View careers'
  },
  linkSecondary: {
    href: 'https://discord.gg/Z2CG3rUFnu',
    title: 'Join community'
  },
};

export default StartNow;

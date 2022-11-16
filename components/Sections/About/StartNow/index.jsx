import Link from "next/link";
import PropTypes from "prop-types";
import Button from "../../../Common/Button";

const StartNow = ({
  title,
  linkPrimary,
  linkSecondary,
}) => {
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop !py-20 desktop:!py-36">
        <h2 className="h2 text-center mx-auto !mb-10 max-w-[960px]">{title}</h2>
        <div className="d-flex justify-content-center align-items-center">
          { linkPrimary.href &&
              (
                <Link href={linkPrimary.href} passHref={true} >
                  <a target="_blank" className="btn btn-primary btn-sm !text-lg !h-10 mr-2 w-full max-w-[180px]" rel="noreferrer">{linkPrimary.title}</a>
                </Link>
              )
          }
          { linkSecondary.title &&
            (
              <Button
                text={linkSecondary.title}
                className="outline-button !text-lg !h-10 ml-2 w-full max-w-[180px]"
                isLink={false}
                onClick={() => Intercom('show')}
              />
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
    title: 'Join community'
  },
};

export default StartNow;

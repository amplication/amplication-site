import Title from "../../../Posts/PostCard/Title";
import Link from "next/link";
import Image from "next/image";
import ImgChat from "../../../../public/images/community/chat.svg";
import ImgDocs from "../../../../public/images/community/docs.svg";

const Footer = () => {
  return (
    <section className="bg-transparent page-2">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="align-items-center justify-content-center mb-5">
          <Title level={2} className="h2">
            We&apos;re in public beta and free to use
          </Title>
          <div>
            The public beta version of Amplication provides everything you need
            to build production-ready services.
          </div>
          <div>
            Our investment in scale, reliability, and robustness ensures all the
            services created with Amplication meet the requirements and
            standards of large organizations and enterprises. Read more about
            the generated app and its stack here.
          </div>
          <div className="action-panel-list support">
            <div className="panel">
              <Image src={ImgChat} alt="Chat" />
              <div className="bracket-box">
                <span>Chat</span>
                with us
              </div>
              <div className="description text-base text-white">
                Join our Discord channel and chat with other Amplication users,
                contributors and maintainers who would love to give a hand
                where&nbsp;needed.
              </div>
              <div className="actions">
                <Link href="https://discord.gg/Z2CG3rUFnu">
                  <a target="_blank" className="btn btn-primary">
                    Join our Discord channel
                  </a>
                </Link>
              </div>
            </div>
            <div className="panel">
              <Image src={ImgDocs} alt="Docs" />
              <div className="bracket-box">
                <span>Read</span>
                the docs
              </div>
              <div className="description text-base text-white">
                Our docs are a work in progress, and you can always find
                new&nbsp;articles.
              </div>
              <div className="actions">
                <Link href="https://docs.amplication.com/docs/getting-started/">
                  <a target="_blank" className="btn btn-primary">
                    Read the docs
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

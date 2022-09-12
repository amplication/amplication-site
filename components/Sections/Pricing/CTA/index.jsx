import Title from "../../../Posts/PostCard/Title";
import Link from "next/link";
import Image from "next/future/image";
import ImgDiscord from "../../../../public/images/pricing/discord.svg";
import ImgDocs from "../../../../public/images/pricing/docs.svg";

const panelStyleOverride = { flexDirection: "row" };
const imageDivOverride = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginRight: "48px",
};
const contentDivOverride = {
  height: "100%",
  flex: 1,
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
};
const spacer = { flex: 1 };

const Footer = () => {
  return (
    <section className="bg-transparent page-2">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="align-items-center justify-content-center mb-5">
          <div className="text-left">
            <Title level={2} className="h2">
              We&apos;re in public beta and free to use
            </Title>
            <p>
              The public beta version of Amplication provides everything you
              need to build production-ready services.
            </p>
            <p>
              Our investment in scale, reliability, and robustness ensures all
              the services created with Amplication meet the requirements and
              standards of large organizations and enterprises. Read more about
              the generated app and its stack here.
            </p>
          </div>
          <div className="action-panel-list support">
            <div className="panel" style={panelStyleOverride}>
              <div style={imageDivOverride}>
                <Image src={ImgDiscord} alt="Discord" layout="fill" />
              </div>
              <div style={contentDivOverride}>
                <div className="bracket-box">
                  <span>Join</span>
                  the community
                </div>
                <div className="description text-base text-white">
                  Join our Discord channel and talk with other Amplication
                  users, contributors, maintainers and our team.
                </div>

                <div style={spacer}></div>
                <div className="actions">
                  <Link href="https://discord.gg/Z2CG3rUFnu">
                    <a target="_blank" className="btn btn-primary">
                      Join now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="panel" style={panelStyleOverride}>
              <div style={imageDivOverride}>
                <Image src={ImgDocs} alt="Docs" layout="fill" />
              </div>
              <div style={contentDivOverride}>
                <div className="bracket-box">
                  <span>Read</span>
                  our docs
                </div>
                <div className="description text-base text-white">
                  Our docs are a work in progress, and you can always find Visit
                  our documentation site to learn more about Amplication, how to
                  get started and the generated apps.
                </div>

                <div style={spacer}></div>
                <div className="actions">
                  <Link href="https://docs.amplication.com/docs/getting-started/">
                    <a target="_blank" className="btn btn-primary">
                      Read docs
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

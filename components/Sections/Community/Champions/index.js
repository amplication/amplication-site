import Title from "../../../Posts/PostCard/Title";
import Link from "next/link";
import Image from "next/image";
import ImgContributor from "../../../../public/images/community/contributor.svg";
import ImgDeveloper from "../../../../public/images/community/developer.svg";
import ImgSpeaker from "../../../../public/images/community/speaker.svg";

const Champions = () => {
  return (
    <section id="champions" className="bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="text-center align-items-center justify-content-center mb-5">
          <Title level={2} className="h2">
            Amplication Champions
          </Title>
          <div className="row">
            <Title
              level={3}
              className="h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4"
            >
              The Amplication Champions program is a worldwide community of
              expert developers passionate about helping other developers build
              powerful applications.
            </Title>
          </div>
          <div className="action-panel-list build-community">
            <div className="panel">
              <Image src={ImgDeveloper} alt="Developer" />
              <div className="bracket-box">
                <span>Expert Developers</span>
              </div>
              <div className="description description-box-black10 text-base text-white">
                They understand the technologies that makes building backend
                applications easier.
              </div>
            </div>
            <div className="panel">
              <Image src={ImgContributor} alt="Contributor" />
              <div className="bracket-box">
                <span>Community Contributors</span>
              </div>
              <div className="description description-box-black10 text-base text-white">
                They make regular and impactful contributors to the Amplication
                community.
              </div>
            </div>
            <div className="panel">
              <Image src={ImgSpeaker} alt="Speaker" />
              <div className="bracket-box">
                <span>Natural Speakers</span>
              </div>
              <div className="description description-box-black10 text-base text-white">
                They can take complex topics and break it down so anyone can
                understand.
              </div>
            </div>
          </div>
          <div className="action-panel-list">
            <div className="panel">
              <div>
                Want to join the Champions? Join our Discord community and reach
                out to a Champion to learn how to join!
              </div>
              <div className="actions">
                <Link href="https://discord.gg/Z2CG3rUFnu">
                  <a target="_blank" className="btn btn-primary">
                    Join our Discord channel
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

export default Champions;

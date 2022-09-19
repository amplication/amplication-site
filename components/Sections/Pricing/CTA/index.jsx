import Title from "../../../Posts/PostCard/Title";
import FeatureItem from "../../../Common/FeatureItem";
import Link from "next/link";
import ImgDiscord from "../../../../public/images/pricing/discord.svg";
import ImgDocs from "../../../../public/images/pricing/docs.svg";

const features = [
  {
    image: ImgDiscord,
    alt: "Discord",
    title: "<span>Join</span> the community",
    content:
      "Join our Discord channel and talk with other Amplication users, contributors, maintainers and our team.",
    linkUrl: "https://amplication.com/discord",
    linkText: "Join now",
  },
  {
    image: ImgDocs,
    alt: "Docs",
    title: "<span>Read</span> our docs",
    content:
      "Visit our documentation site to learn more about Amplication, how to get started and the generated apps.",
    linkUrl: "https://docs.amplication.com/docs/getting-started/",
    linkText: "Read docs",
  },
];

const Footer = () => {
  return (
    <section className="bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="align-items-center justify-content-center mb-5">
          <div className="text-left">
            <Title level={2} className="h2">
              Build mission critical services with any architecture at any scale
            </Title>
            <p>
              Amplication backend development platform provides everything you
              need to build production-ready services. Our investment in scale,
              reliability, and robustness, ensures all the services created with
              Amplication meet the requirements and standards of large
              organizations and enterprises. Read more about the generated app
              and its stack{" "}
              <Link href="https://docs.amplication.com/docs/getting-started">
                here
              </Link>
            </p>
          </div>
        </div>
        {features.length > 0 && (
          <div className="row">
            <div className="feature-items">
              {features.map((feature, index) => {
                return (
                  <FeatureItem
                    key={index}
                    image={feature.image}
                    alt={feature.alt}
                    title={feature.title}
                    content={feature.content}
                    linkUrl={feature.linkUrl}
                    linkText={feature.linkText}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Footer;

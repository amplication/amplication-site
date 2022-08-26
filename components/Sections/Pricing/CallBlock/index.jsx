import talkWithUs from '../../../../public/images/icons/talk-with-with-team.svg';
import joinWithUs from '../../../../public/images/icons/join-the-team.svg';
import FeatureItem from '../../../Sections/Team/FeaturesItem';

const CallBlock = () => {

    const features = [
        {
          image: talkWithUs,
          alt: 'Join the community',
          title: '<span>Join</span>\n' +
            '                  the community',
          content: '<br/>Join our Discord channel and talk with other Amplication users, contributors, maintainers and our team.',
          linkUrl: 'https://amplication.com/discord',
          linkText: 'Chat now',
        },
        {
          image: joinWithUs,
          alt: 'joinUs',
          title: '<span>Read</span>\n' +
            '                  our docs',
          content: 'Visit our documentation site to learn more about Amplication, how to get started and the generated apps. ',
          linkUrl: 'https://docs.amplication.com/',
          linkText: 'Read our documentation',
        },
      ];
    
  return (
    <>
      <section className={'background-transparent'}>
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          {(features.length > 0) &&
            <div className="row">
              <div className="team-action-panels">
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
                  )
                })}
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default CallBlock

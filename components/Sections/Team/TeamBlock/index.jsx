import TeamMember from '../../../Common/TeamMember';
import FeatureItem from '../../../Common/FeatureItem';
import innaBell from '../../../../public/images/team/inna-bell.png';
import yuvalHanaz from '../../../../public/images/team/yuval-hazaz.png';
import vikaGoncharuk from '../../../../public/images/team/vika-goncharuk.png';
import morHagbi from '../../../../public/images/team/mor-hagbi.png';
import sauravJain from '../../../../public/images/team/saurav-jain.png';
import alexBass from '../../../../public/images/team/alex-bass.png';
import amitBarletz from '../../../../public/images/team/amit-barletz.png';
import shimiBar from '../../../../public/images/team/shimi.png';
import tomerNaim from '../../../../public/images/team/tomer.png';
import leviVan from '../../../../public/images/team/levi.png';
import danieleIasella from '../../../../public/images/team/daniele.png';
import mulyGottlieb from '../../../../public/images/team/muly.png';
import orenAlaluf from '../../../../public/images/team/oren.png';
import lizaDymava from '../../../../public/images/team/liza.png';

import talkWithUs from '../../../../public/images/icons/talk-with-with-team.svg';
import joinUs from '../../../../public/images/icons/join-the-team.svg';

const members = [
  {
    name: 'Yuval Hazaz',
    position: 'Founder & CEO',
    image: yuvalHanaz,
    links: [
      {
        href: 'https://www.linkedin.com/in/yuvalhazaz/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/yuval-hazaz',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/Yuvalhazaz1',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Inna Bell',
    position: 'Head of Marketing',
    image: innaBell,
    links: [
      {
        href: 'https://www.linkedin.com/in/bellinna/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://twitter.com/InnaBell_',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Oren Alaluf',
    position: 'VP Sales',
    image: orenAlaluf,
    links: [
      {
        href: 'https://www.linkedin.com/in/oren-alaluf-69b14b43/',
        iconClass: 'linkedin',
      },
    ],
  },
  {
    name: 'Muly Gottlieb',
    position: 'VP R&D',
    image: mulyGottlieb,
    links: [
      {
        href: 'https://www.linkedin.com/in/mulyg/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/mulygottlieb',
        iconClass: 'github',
      },
    ],
  },
  {
    name: 'Vika Goncharuk',
    position: 'Customer Success Manager',
    image: vikaGoncharuk,
    links: [
      {
        href: 'https://www.linkedin.com/in/victoria-goncharuk-35504885/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/VikaGon',
        iconClass: 'github',
      },
    ],
  },
  {
    name: 'Alex Bass',
    position: 'Sr. Product Designer',
    image: alexBass,
    links: [
      {
        href: 'https://www.linkedin.com/in/bassalex/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/alexbass86',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/kipibass86',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Amit Barletz',
    position: 'Full Stack Engineer',
    image: amitBarletz,
    links: [
      {
        href: 'https://www.linkedin.com/in/amitbarletz/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/abrl91',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/BarletzA52',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Tomer Naim',
    position: 'Marketing Manager, Digital and Growth',
    image: tomerNaim,
    links: [
      {
        href: 'https://www.linkedin.com/in/tomernaim/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/tnaim',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/tomernaim',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Daniele Iasella',
    position: 'Principal Engineer',
    image: danieleIasella,
    links: [
      {
        href: 'https://www.linkedin.com/in/danieleiasella/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/overbit',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/ov3rbit',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Mor Hagbi',
    position: 'Sr. Full Stack Engineer',
    image: morHagbi,
    links: [
      {
        href: 'https://www.linkedin.com/in/mor-hagbi-57304811b/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/morhag90',
        iconClass: 'github',
      },
    ],
  },
  {
    name: 'Shimi Bar',
    position: 'Sr. Full Stack Engineer',
    image: shimiBar,
    links: [
      {
        href: 'https://www.linkedin.com/in/shimibar/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/barshimi',
        iconClass: 'github',
      },
    ],
  },
  {
    name: 'Levi van Noort',
    position: 'DevOps Engineer',
    image: leviVan,
    links: [
      {
        href: 'https://www.linkedin.com/in/levivannoort/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/levivannoort',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/vanNoortLevi',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Saurav Jain',
    position: 'Community Manager',
    image: sauravJain,
    links: [
      {
        href: 'https://www.linkedin.com/in/saurav-jain-384625147/',
        iconClass: 'linkedin',
      },
      {
        href: 'https://github.com/souravjain540',
        iconClass: 'github',
      },
      {
        href: 'https://twitter.com/Sauain',
        iconClass: 'twitter',
      },
    ],
  },
  {
    name: 'Liza Dymava',
    position: 'Business Development Manager',
    image: lizaDymava,
    links: [
      {
        href: 'https://www.linkedin.com/in/lizavetadymava/',
        iconClass: 'linkedin',
      },
    ],
  },
];

const features = [
  {
    image: talkWithUs,
    alt: 'Talk with us',
    title: '<span>Talk</span>\n' + '                  with the team',
    content:
      "Join Amplication's Discord channel and chat with the team. Ask\n" +
      '                  about anything, we would love to help',
    linkUrl: 'https://amplication.com/discord',
    linkText: 'Chat now',
  },
  {
    image: joinUs,
    alt: 'Join us',
    title: '<span>Join</span>\n' + '                  the team',
    content:
      'We are a small, dedicated team, revolutionizing the speed and\n' +
      '                  ease of cloud development for professional developers',
    linkUrl: 'https://amplication.com/jobs',
    linkText: 'Come work with us',
  },
];

const TeamBlock = () => {
  return (
    <>
      <section className={'background-transparent'}>
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center justify-content-center mb-1">
            <h2 className="h2 text-center">Meet The Team</h2>
          </div>
          {members.length > 0 && (
            <div className="row">
              <div className="team-members">
                {members.map((member, index) => {
                  return (
                    <TeamMember
                      key={index}
                      name={member.name}
                      position={member.position}
                      image={member.image}
                      links={member.links}
                    />
                  );
                })}
              </div>
            </div>
          )}
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
    </>
  );
};

export default TeamBlock;

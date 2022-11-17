import Image from 'next/image';
import UserAvatar1 from '../../../../public/images/users/1.png';
import UserAvatar2 from '../../../../public/images/users/2.png';
import UserAvatar3 from '../../../../public/images/users/3.png';
import UserAvatar4 from '../../../../public/images/users/4.png';
import UserAvatar5 from '../../../../public/images/users/5.png';
import UserAvatar6 from '../../../../public/images/users/6.png';
import UserAvatar7 from '../../../../public/images/users/7.png';
import UserAvatar8 from '../../../../public/images/users/8.png';
import UserAvatar9 from '../../../../public/images/users/9.png';
import UserAvatar10 from '../../../../public/images/users/10.png';
import UserAvatar11 from '../../../../public/images/users/11.png';
import UserAvatar12 from '../../../../public/images/users/12.png';
import UserAvatar13 from '../../../../public/images/users/13.png';
import UserAvatar14 from '../../../../public/images/users/14.png';
import UserAvatar15 from '../../../../public/images/users/15.png';
import UserAvatar16 from '../../../../public/images/users/16.png';
import UserAvatar17 from '../../../../public/images/users/17.png';
import UserAvatar18 from '../../../../public/images/users/18.png';
import UserAvatar19 from '../../../../public/images/users/19.png';
import UserAvatar20 from '../../../../public/images/users/20.png';
import UserAvatar21 from '../../../../public/images/users/21.png';

const UsersList = () => {
  const users = [
      {
          avatar: UserAvatar1,
          name: 'Dror Nahumi',
          position: 'General Partner',
          description: 'Norwest Venture Partners',
      },
      {
          avatar: UserAvatar2,
          name: 'Tami Bronner',
          position: 'Partner',
          description: 'Vertex Ventures',
      },
      {
          avatar: UserAvatar3,
          name: 'Adi Gozes ',
          position: 'Partner',
          description: 'Entrée Capital',
      },
      {
          avatar: UserAvatar4,
          name: 'Avishag Bohbot ',
          position: 'Founder',
          description: 'Velocity Venture Fund',
      },
      {
          avatar: UserAvatar5,
          name: 'Nitzan Shapira',
          position: 'Co-founder & CEO',
          description: 'Epsagon (acquired by Cisco)',
      },
      {
          avatar: UserAvatar6,
          name: 'Ran Ribenzaft',
          position: 'Co-founder & CEO',
          description: 'Epsagon (acquired by Cisco)',
      },
      {
          avatar: UserAvatar7,
          name: 'Idan Tendler',
          position: 'Co-founder & CEO',
          description: 'Bridgecrew (acquired by Palo Alto Networks)',
      },
      {
          avatar: UserAvatar8,
          name: 'Barak Schoster',
          position: 'Co-founder & CEO',
          description: 'Bridgecrew (acquired by Palo Alto Networks)',
      },
      {
          avatar: UserAvatar9,
          name: 'Scott Williamson',
          position: 'Product Advisor',
          description: 'ex CPO @ GitLab & VPP @ SendGrid / Twilio',
      },
      {
          avatar: UserAvatar10,
          name: 'Ran Sarig ',
          position: 'Early stage investor',
          description: 'ex Co-founder & CEO Datorama, a Salesforce Company',
      },
      {
          avatar: UserAvatar11,
          name: 'Raanan Raz',
          position: 'Former VP R&D',
          description: 'Datorama, a Salesforce Company',
      },
      {
          avatar: UserAvatar12,
          name: 'Efi Cohen',
          position: 'Head of Salesforce Israel R&D Center',
          description: 'Salesforce',
      },
      {
          avatar: UserAvatar13,
          name: 'Michael Matias',
          position: 'Co-founder',
          description: 'Stealth',
      },
      {
          avatar: UserAvatar14,
          name: 'Kfir Tishbi',
          position: 'Co-founder & CTO',
          description: 'Stealth',
      },
      {
          avatar: UserAvatar15,
          name: 'Guy Fighel',
          position: 'SVP & GM',
          description: 'New Relic',
      },
      {
          avatar: UserAvatar16,
          name: 'Alon Girmonsky ',
          position: 'Former CEO & Co-Founder',
          description: 'Up9',
      },
      {
          avatar: UserAvatar17,
          name: 'Maor Fridman',
          position: 'Partner',
          description: 'F2 Venture Capital',
      },
      {
          avatar: UserAvatar18,
          name: 'Omri Krigel',
          position: 'Founder',
          description: 'Secret Chord Ventures & Homeward Ventures',
      },
      {
          avatar: UserAvatar19,
          name: 'Liran Tal',
          position: 'Director of Developer Advocacy',
          description: 'Snyk',
      },
      {
          avatar: UserAvatar20,
          name: 'Paz Yanover',
          position: 'VP Product',
          description: 'Hyro, Prev. Testim',
      },
      {
          avatar: UserAvatar21,
          name: 'Victor Mota',
          position: 'Senior Software Engineer',
          description: 'Stripe',
      }
  ];
  return (
    <>
      <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <h2 className="main-title !mb-12 !text-[50px]">Supported by tech leaders</h2>
        <div className="grid gap-x-16 gap-y-4 grid-cols-3">
          {
            users.map((user, index) => {
              return (
                <div className="d-flex pt-4 pb-10 border-b-[1px] border-dark-black-70">
                  <div className="min-w-[96px] h-24 p-[11px] border-[3px] bg-white/10 border-white/20 rounded-full" data-aos="zoom-in" data-aos-delay="200">
                    <Image className="rounded-full" src={user.avatar} alt={''} width={67} height={67} />
                  </div>
                  <div className="d-flex flex-column pl-6">
                    <h4 className="text-[32px] leading-8 font-semibold mb-3">{user.name}</h4>
                    <div className="text-gray text-lg leading-[18px]">{user.position}</div>
                    <div className="text-lg leading-7 mt-3">{user.description}</div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </>
  );
};

export default UsersList;

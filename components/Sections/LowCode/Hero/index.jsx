import Image from 'next/image';
import LowCodeHeroImage from '../../../../public/images/product/low-code-hero.png';
import PageHero from '../../../Common/PageHero';

const Hero = () => {
  return (
    <>
      <PageHero
        title={
          <>
            Enterprise Low-Code Platform{' '}
            <span className="text-purple-bright">
              For Professional Developers
            </span>
          </>
        }
        subTitle={''}
        subText={
          'Build any application faster, without sacrificing control and flexibility.'
        }
        mainButton={{
          text: 'Book a Demo',
          href: process.env.NEXT_PUBLIC_BOOK_MEETING_URL,
          eventName: 'bookDemoClicked',
          eventParams: {
            buttonLocation: 'hero-low-code',
          },
        }}
        secondaryButton={{
          text: 'Try Free',
          href: 'https://app.amplication.com/login',
          eventName: 'startNowClicked',
          eventParams: {
            buttonLocation: 'hero-low-code',
          },
        }}
        imageNode={
          <Image src={LowCodeHeroImage} alt={'Amplication low-code'} />
        }
      />
    </>
  );
};

export default Hero;

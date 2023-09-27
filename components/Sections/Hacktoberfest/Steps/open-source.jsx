import Image from 'next/image';
import TeamSportImage from '../../../../public/images/hacktoberfest/hacktoberfest-team-sport.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const OpenSource = () => {
  return (
    <SplitSection
      firstSectionNode={
        <ContentBox
          title={
            <>
              Open-source is a team sport.
              <br />
              Let&apos;s win together.
            </>
          }
          body={
            <>
              We&apos;re inviting you to experience the joy and learning that
              comes from contributing to open-source projects like Amplication.
              Win digital swag and additional major prizes.
            </>
          }
          ctaLabel="How to contribute"
          ctaUrl="https://github.com/amplication/amplication/issues/7026"
        />
      }
      SecondSectionNode={
        <Image
          src={TeamSportImage}
          alt={'Open-source is a team sport'}
          className="h-[350px]"
        />
      }
      reverse={false}
    />
  );
};

export default OpenSource;

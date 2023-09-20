import Image from 'next/image';
import Hf10Image from '../../../../public/images/hacktoberfest/hacktoberfest-10.svg';
import ContentBox from '../../../Common/ContentBox';
import SplitSection from '../../../Common/SplitSection';

const About = () => {
  return (
    <SplitSection
      firstSectionNode={
        <ContentBox
          title={<>About Hacktoberfest</>}
          body={
            <>
              Hacktoberfest is an annual, month-long celebration of open-source
              software run by DigitalOcean. It encourages developers from all
              corners of the world to contribute to open-source projects.
              Amplication is one of the projects you can contribute to and is a
              proud sponsor of Hacktoberfest. Whether you&apos;re new to coding
              or an experienced developer, there&apos;s something in
              Hacktoberfest for everyone.
            </>
          }
          ctaLabel=""
          ctaUrl=""
        />
      }
      SecondSectionNode={
        <Image
          src={Hf10Image}
          alt={'Hacktoberfest 10th anniversary'}
          className="h-[350px]"
        />
      }
      reverse={true}
    />
  );
};

export default About;

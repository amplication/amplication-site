import FooterText from '../FooterText';
import FooterForm from '../FooterForm';

const FooterContent = () => {
  return (
    <div className="w-full mt-14 laptop:flex laptop:justify-end laptop:pt-[132px] laptop:pb-[160px] laptop:my-0 relative laptop:px-[9%]">
      {/*Footer Main Text*/}
      <FooterText />

      {/*Footer Form*/}
      <FooterForm isCompactView={false} />
    </div>
  );
};

export default FooterContent;

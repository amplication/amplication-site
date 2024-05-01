import Button from '../Button';

const PrimaryButton = ({ className, ...props }) => {
  return (
    <Button
      {...props}
      backgroundColor="purpleBright"
      hoverBackgroundColor="purpleBrightHover"
      className={`!h-[34px] mb-2 w-full !font-normal !text-sm !max-w-[140px] text-black80 whitespace-nowrap border border-purple-bright hover:bg-purple-bright-hover hover:border-purple-bright-hover ${className}`}
    />
  );
};

PrimaryButton.propTypes = Button.propTypes;

export default PrimaryButton;

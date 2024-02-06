import Button from '../Button';

const OutlineButton = ({ className, ...props }) => {
  return (
    <Button
      {...props}
      className={`!h-[34px] mb-2 laptop:mr-2 w-full !font-normal !text-sm !max-w-[140px] text-black80 whitespace-nowrap border border-white hover:bg-light hover:text-dark-black-100 ${className}`}
    />
  );
};

OutlineButton.propTypes = Button.propTypes;

export default OutlineButton;

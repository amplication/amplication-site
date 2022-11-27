const FooterText = () => {
  return (
    <div className="w-full text-center mb-14 px-2 laptop:shrink-0 laptop:w-1/2 laptop:p-0 laptop:max-w-lg laptop:mr-auto laptop:my-0">
      <p className="font-poppins font-semibold text-white text-center text-4xl desktop:text-5xl large:text-[50px] laptop:text-left !leading-tight laptop:max-w-[580px] laptop:pr-16">
        We would{' '}
        <span className="text-turquoise laptop:font-dmmono laptop:font-medium">
          &lt;love&gt;
        </span>{' '}
        to hear from you.
      </p>
    </div>
  );
};

export default FooterText;

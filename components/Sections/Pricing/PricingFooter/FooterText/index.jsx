const FooterText = () => {
  const mystyle = {
    color:" #A787FF"
  };
  return (
    <div className='w-full text-center mb-14 px-2 laptop:shrink-0 laptop:w-2/5 laptop:p-0 laptop:max-w-lg laptop:mr-auto laptop:my-0'>
      <p className='font-poppins font-semibold text-3xl text-white text-center laptop:text-6xl laptop:text-left'>
      We would <span className='laptop:font-poppins laptop:font-medium' style={mystyle} >love</span> to hear from you.
      </p>
    </div>
  )
}

export default FooterText

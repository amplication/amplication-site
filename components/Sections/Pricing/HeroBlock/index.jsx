const HeroBlock = () => {
  const mystyle = {
    color: '#A787FF',
  };

  return (
    <>
      <section className="bg-transparent ">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row d-flex align-items-end align-items-md-center">
            <div className="col-12 ">
              <h1 className="main-title pricing mt-5 text-center">
                Accelerate your backend development.
                <div style={mystyle}>Start FREE </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;

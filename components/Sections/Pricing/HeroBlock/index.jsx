const HeroBlock = () => {
  const mystyle = {
    color: '#A787FF',
  };

  return (
    <>
      <section className="bg-transparent page-1">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row d-flex align-items-end align-items-md-center">
            <div className="col-12">
              <h1 className="main-title pricing mb-5">
                Accelerate your backend development.
                <div style={mystyle}>Start FREE </div>
              </h1>
              <h2 className="text-white">
                Production-ready Node.js applications
              </h2>
              <h3 className="h3 text-white mt-3">
                Amplication is the most flexible open-source backend development
                platform, built by developers for developers.
                <br />
                We provide a lifetime value, at no cost, with our Community and
                Free Cloud editions.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;

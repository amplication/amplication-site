const HeroBlock = () => {
  const mystyle = {
    color: '#A787FF',
  };

  return (
    <>
      <section className="bg-transparent my-32 ">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="flex flex-col items-center content-center text-center ">
            <h1 className="text-5xl font-bold mb-4 ">Customer Stories</h1>
            <h3 className="text-2xl font-normal">
              Our customers leverage Amplication to transform challenges into
              opportunities.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBlock;

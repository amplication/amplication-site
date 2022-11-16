const Facts = () => {
  const facts = [
    {
      title: '20x faster',
      description: 'to deliver code to production',
    },
    {
      title: '2 months',
      description: 'saved on initial project setup',
    },
    {
      title: '30%',
      description: 'of developers’ time saved',
    },
    {
      title: '100 hrs',
      description: 'Saved per developer on knowledge sharing and training',
    },
    {
      title: '100 hrs',
      description: 'per month saved on app infrastructure and boilerplate updates',
    },
  ];

  return (
    <>
      <section className="!bg-light-blue !pt-36 !pb-28">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center justify-content-center">
            {facts.map((fact, i) => {
              return (
                <div className="col-sm-4 col-md-4">
                  <div className="rounded-lg border-[1px] border-dark-black-70 h-[250px] flex flex-column align-items-center justify-content-center mb-7">
                    <div className="text-[56px] leading-[84px] font-bold" style={{color: '#A787FF'}}>{fact.title}</div>
                    <div className="text-lg text-white text-center max-w-[360px]">{fact.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Facts;

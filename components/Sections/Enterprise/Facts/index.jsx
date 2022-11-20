const Facts = () => {
  const facts = [
    {
      title: '20x faster',
      description: 'To deliver code to production',
    },
    {
      title: '2 months',
      description: 'Saved on initial project setup',
    },
    {
      title: '100+ hrs',
      description:
        'Per month saved on app infrastructure and boilerplate updates',
    },
    {
      title: '30%',
      description: 'Of developers’ time saved',
    },
    {
      title: '50+ hrs',
      description: 'Saved per developer on knowledge sharing and training',
    },
  ];

  return (
    <>
      <section className="!bg-light-blue !py-10 !pb-4 laptop:!pt-36 laptop:!pb-28">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center justify-content-center">
            {facts.map((fact, i) => {
              return (
                <div
                  className="flex-grow w-[50%] laptop:w-[33.3333%] large:w-[20%] col-md-[20%]"
                  key={i}
                >
                  <div
                    className={
                      (i !== 0 ? 'border-l-[1px] ' : '') +
                      'rounded-lg border-dark-black-70 min-h-[120px] desktop:min-h-[212px] flex flex-column align-items-center !p-5 laptop:!py-12 laptop:!px-10'
                    }
                  >
                    <div
                      className="text-3xl laptop:text-4xl desktop:text-4xl leading-10 desktop:leading-[60px] font-bold text-center"
                      style={{color: '#A787FF'}}
                    >
                      {fact.title}
                    </div>
                    <div className="font-normal !text-base laptop:text-lg leading-7 text-center text-white max-w-[360px]">
                      {fact.description}
                    </div>
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

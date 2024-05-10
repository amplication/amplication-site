const facts = [
  {
    title: '20x faster',
    description: 'To deliver code to production',
  },
  {
    title: '2+ sprints',
    description: 'Saved on each service created',
  },
  {
    title: '73% decrease',
    description: 'in infrastructure-related production bugs',
  },
];

const Facts = () => {
  return (
    <>
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
                  'rounded-lg border-[#2C3249] min-h-[116px] flex flex-column align-items-center p-[24px] large:!py-0 laptop:!px-12'
                }
              >
                <div className="text-2xl mb-1 font-bold text-center text-secondary-purple">
                  {fact.title}
                </div>
                <div className="font-normal text-[0.875rem] tablet:!text-base laptop:!text-lg leading-normal text-center text-white max-w-[360px]">
                  {fact.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Facts;

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
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 w-full ">
        {facts.map((fact, i) => {
          return (
            <div
              key={i}
              className={
                (i !== 0 ? 'border-l-1 ' : '') +
                'border-dark-black-80  flex flex-col gap-2 items-center p-4 text-center'
              }
            >
              <div className="text-4xl tablet:text-3xl desktop:text-5xl font-bold text-secondary-purple text-nowrap">
                {fact.title}
              </div>
              <div className="font-normal text-base text-white  ">
                {fact.description}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Facts;

const items = [
  {
    title: 'Tailored modernization',
    content:
      'Analyze your project’s codebase and automatically generate your modernization blueprint.',
  },
  {
    title: 'Legacy DB import',
    content:
      'Migrate your existing data efficiently with Amplication, ensuring a smooth and controlled evolution of your systems.',
  },
  {
    title: 'API import',
    content:
      'Instantly generate APIs from existing OpenAPI specifications, saving valuable time and reducing manual coding errors.',
  },
  {
    title: 'Break the monolith',
    content:
      'Amplication offers microservices migration patterns, carefully designed to break the monolith and migrate legacy applications to microservices.',
  },
];
const HowItWorks = () => {
  return (
    <>
      <div className="mb-6 large:mb-11">
        <h2 className="roadmap-heading m-0 text-center">
          Automate your transition to advanced backend services with Amplication
        </h2>
      </div>
      <div>
        <div className="p grid grid-cols-1  laptop:grid-cols-2  gap-10  justify-between ">
          {items.map((item, index) => {
            return (
              <div
                className="p-20 bg-dark-black-surface  border rounded-xl border-dark-black-70  flex-column align-items-center  text-center!"
                key={index}
              >
                <div className="  text-center text-lg text-white leading-[25px] !font-semibold !max-w-full !mt-[.75rem] pb-2">
                  {item.title}
                </div>
                <div className=" text-center text-sm text-center text-white font-regular ">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

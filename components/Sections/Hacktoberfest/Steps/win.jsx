import ContentBox from '../../../Common/ContentBox';

const Win = () => {
  return (
    <ContentBox
      className={'text-center  max-w-[900px] mx-auto py-32'}
      title={
        <div className="text-3xl font-extrabold">
          Win with Amplication at Hacktoberfest
        </div>
      }
      body={
        <div className="text-2xl mt-4">
          Get a chance to win digital rewards, $500 worth of gift cards, and
          many other prizes. Check the rules and guidelines to learn how.
        </div>
      }
      ctaLabel="Read the rules"
      ctaUrl="https://github.com/amplication/amplication/issues/7030"
    />
  );
};

export default Win;

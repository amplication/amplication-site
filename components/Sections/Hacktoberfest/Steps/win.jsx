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
          many other prizes. Read the rules and guidelines here
        </div>
      }
      ctaLabel="Read the rules"
      ctaUrl="http"
    />
  );
};

export default Win;

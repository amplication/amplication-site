import PageSection from '../../../Common/PageSection';

export const PricingLoader = () => {
  return (
    <PageSection>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap max-w-[840px] m-auto px-8">
        <div className="rounded-xl border border-solid border-dark-black-70 h-[500px] flex-1 max-w-[100%] min-w-[1px] flex items-center justify-center">
          Loading...
        </div>
        <div className="rounded-xl border border-solid border-dark-black-70 h-[500px] flex-1 max-w-[100%] min-w-[1px] flex items-center justify-center">
          Loading...
        </div>
        <div className="rounded-xl border border-solid border-dark-black-70 h-[500px] flex-1 max-w-[100%] min-w-[1px] flex items-center justify-center">
          Loading...
        </div>
      </div>
    </PageSection>
  );
};

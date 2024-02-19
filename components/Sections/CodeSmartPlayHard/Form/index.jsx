import HubSpotForm from '../../../Common/HubSpotForm';

const Form = () => {
  return (
    <HubSpotForm
      hubSpotPortalId="25691669"
      hubSpotFormId="5eb8cd14-51ce-4588-b2d3-2141172998ea"
      pageName="code-smart-play-hard"
      formName="codeSmartPlayHard"
      successMessage="Congratulations! Look for our confirmation email in your inbox and click the link to finish registering."
      includeConsent={false}
      buttonClassName="w-full"
      hideSuccessImage={true}
    >
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="firstname"
          placeholder="First Name"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-dark-black-100 py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-white hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-dark-black-100 py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-white hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="company"
          placeholder="Company Name"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-dark-black-100 py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-white hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="email"
          name="email"
          placeholder="Company email"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-dark-black-100 py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-white hover:border-purple border-lite"
        />
      </div>
    </HubSpotForm>
  );
};

export default Form;

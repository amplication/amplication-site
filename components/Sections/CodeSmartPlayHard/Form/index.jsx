import { useCallback } from 'react';
import HubSpotForm from '../../../Common/HubSpotForm';
import { useRouter } from 'next/router';

const Form = () => {
  const router = useRouter();

  const onSubmit = useCallback(
    (fields) => {
      console.log({ fields });

      const url = `https://app.amplication.com/signup/preview-account?email=${fields.email}&previewAccountType=PreviewOnboarding`;
      router.push(url);
    },
    [router],
  );

  return (
    <HubSpotForm
      hubSpotPortalId="25691669"
      hubSpotFormId="5eb8cd14-51ce-4588-b2d3-2141172998ea"
      pageName="code-smart-play-hard"
      formName="codeSmartPlayHard"
      successMessage="Congratulations! Please check your inbox for our confirmation email and click on the link to complete your registration"
      includeConsent={false}
      buttonClassName="w-full"
      hideSuccessImage={true}
      buttonText={'Join the Raffle'}
      onSubmit={onSubmit}
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

      <div className="relative laptop:w-full my-2">
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

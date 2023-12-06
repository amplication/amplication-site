import HubSpotForm from '../../../Common/HubSpotForm';

const Form = () => {
  const onChangeHandler = (e) => {
    const styles = getComputedStyle(e.target, null),
      rows = parseInt(e.target.getAttribute('rows')) || 2,
      lines = parseInt(styles.getPropertyValue('line-height')) * rows,
      padding = parseInt(styles.getPropertyValue('padding-top')) * 2,
      border = parseInt(styles.getPropertyValue('border-width')) * 4;

    e.target.style.height = lines + padding + border + 'px';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <HubSpotForm
      includeConsent={false}
      hubSpotPortalId="25691669"
      hubSpotFormId="c14f847a-40b2-4214-8a0f-d95fc2812bba"
      pageName="Application modernization Beta"
      formName="AppModernizationBetaForm"
      successMessage="Congratulations! We appreciate your interest and will be in touch soon with further instructions."
    >
      <div className="block relative w-full ">
        <div className="font-semibold text-[24px]  ">
          Join our exclusive beta program to streamline your transition to a
          modern architecture.
        </div>
      </div>

      <div className="relative  w-full  my-2  ">
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
        />
      </div>
    </HubSpotForm>
  );
};

export default Form;

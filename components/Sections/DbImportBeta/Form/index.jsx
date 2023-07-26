import HubSpotForm from '../../../Common/HubSpotForm';

const Form = () => {
  const onChangeHandler = e => {
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
      hubSpotPortalId="25691669"
      hubSpotFormId="7299e150-38e9-4dc5-9b44-7399be050d7c"
      pageName="DB Import Beta"
      formName="DBImportBetaForm"
      successMessage="Congratulations! We appreciate your interest and will be in touch soon with further instructions."
    >
      <div className="block relative w-full !mt-6">
        <div className="font-semibold text-sm leading-[22px] max-laptop:text-[16px]">
          Your Details:
        </div>
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="firstname"
          placeholder="First Name"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
        />
      </div>
      <div className="relative laptop:w-[calc(50%-8px)] my-2">
        <input
          required
          type="text"
          name="company"
          placeholder="Company"
          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
        />
      </div>
      <div className="block relative w-full !mt-6">
        <span className="font-semibold text-sm leading-[22px] max-laptop:text-[16px]">
          We would like to hear more about your use case:
        </span>
        <div className="flex justify-between mt-2 w-full">
          <label className="w-full mt-1 mb-0">
            <textarea
              rows="4"
              onChange={onChangeHandler}
              name="db_import_use_case"
              placeholder="Use case"
              className="w-full leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
            ></textarea>
          </label>
        </div>
      </div>
    </HubSpotForm>
  );
};

export default Form;

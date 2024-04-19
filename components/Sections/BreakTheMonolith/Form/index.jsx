import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as analytics from '../../../../lib/analytics';

const PUBLIC_DOMAINS = [
  'gmail.com',
  'hotmail.com',
  'outlook.com',
  'qq.com',
  'yahoo.com',
  '163.com',
  'icloud.com',
  'live.com',
  'protonmail.com',
  'me.com',
  'mail.ru',
  'yandex.ru',
  'googlemail.com',
  '126.com',
  'gmx.de',
  'hotmail.fr',
  'outlook.fr',
  'foxmail.com',
  'hotmail.co.uk',
  'msn.com',
  'naver.com',
];

const Form = () => {
  const emailField = useRef(null);
  const [error, setError] = useState(null);

  const router = useRouter();

  const submitSubscriptionForm = async (e) => {
    setError(null);
    e.preventDefault();
    const emailValue = emailField.current.value;

    const domain = emailValue.split('@')[1];
    if (PUBLIC_DOMAINS.includes(domain)) {
      setError('Please enter a valid company email address');
      return false;
    }

    analytics.event({
      action: 'createBtmPreviewAccount',
      params: {
        email: emailValue,
      },
    });

    const url = `https://app.amplication.com/signup/preview-account?email=${emailValue}&previewAccountType=BreakingTheMonolith`;
    router.push(url);
  };
  return (
    <div className="w-full laptop:w-[80%]">
      <form
        className=" w-full flex flex-col justify-start items-center gap-2 laptop:flex-row laptop:gap-4 "
        method="POST"
        onSubmit={(e) => submitSubscriptionForm(e)}
      >
        <input
          required
          type="email"
          name="email"
          placeholder="Company email"
          className=" flex-1leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-dark-black-100 py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-white hover:border-purple border-lite"
          ref={emailField}
        />
        <input
          type="submit"
          name="submit"
          className={`w-full laptop:w-[150px] flex justify-center items-center text-white font-poppins font-normal text-center rounded py-2 px-3 laptop:px-8 laptop:font-medium transition-all duration-300 bg-purple-bright hover:bg-purple-bright-hover text-[15px] h-[40px] whitespace-nowrap !px-4 mx-auto `}
          value={'Unlock My Demo'}
        />
      </form>
      <div className="font-normal text-sm mt-5 text-error-red">{error}</div>
    </div>
  );
};

export default Form;

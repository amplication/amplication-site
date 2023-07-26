import {useState, useRef} from 'react';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import * as analytics from '../../../lib/analytics';

const SKIP_SUBMIT_TEST = false;

const HUBSPOT_FORM_BASE_URL =
  'https://api.hsforms.com/submissions/v3/integration/submit/';
const HUBSPOT_PORTAL_ID = '25691669';
const HUBSPOT_FORM_ID = '3f7e736b-6f89-4a11-94e4-eac111c43486';

const SUCCESS_MESSAGE = 'Thank you for signing up for our mailing list!';
const ERROR_MESSAGE = 'Something went wrong. Please try again later.';

const SubscribeForm = ({isCompactView}) => {
  const [successMsg, setSuccessMsg] = useState('');
  const [formIsSending, setFormIsSending] = useState(false);
  const router = useRouter();

  const form = useRef(null);

  const submitSubscriptionForm = async e => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const fields = [];
    [...formData].forEach(item => {
      if (item[1]) {
        fields.push({
          name: item[0],
          value: item[1],
        });
      }
    });

    setFormIsSending(true);
    if (!SKIP_SUBMIT_TEST) {
      try {
        const response = await fetch(
          `${HUBSPOT_FORM_BASE_URL}/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              submittedAt: Date.now(),
              fields: fields,
              context: {
                pageUri: router.asPath,
                pageName: 'Blog Page',
              },
            }),
          }
        );
        const data = await response.json();
        if (data.inlineMessage) {
          setSuccessMsg(SUCCESS_MESSAGE);
        }

        const params = {};
        formData.forEach((value, key) => (params[key] = value));

        analytics.event({
          action: 'formSubmitted',
          params: {
            formName: 'subscribeBlogForm',
            ...params,
          },
        });

        setFormIsSending(false);
      } catch (e) {
        setSuccessMsg(ERROR_MESSAGE);
        console.log('error', e);
      }
    } else {
      setSuccessMsg(SUCCESS_MESSAGE);
    }
  };

  let loaderClasses =
    'w-full h-full absolute l-0 t-0 rounded-2xl transition-all opacity-50 pointer-events-none';
  loaderClasses += formIsSending
    ? ' bg-purple-light z-10 pointer-events-auto'
    : '';

  let containerClasses =
    'w-full px-4 py-16 laptop:py-[54px] max-w-[600px] mx-auto laptop:max-w-[100%] laptop:flex laptop:items-center relative laptop:min-h-[208px]';
  if (isCompactView) {
    containerClasses +=
      ' laptop:flex-col laptop:justify-start laptop:items-stretch laptop:px-8';
    if (successMsg) {
      containerClasses += ' laptop:py-20';
    } else {
      containerClasses += ' laptop:pt-20 laptop:pb-[120px]';
    }
  } else {
    containerClasses +=
      ' laptop:px-[91px] laptop:justify-between laptop:px-16 laptop:py-14 laptop:max-w-[1436px]';
  }

  let titleClasses =
    'text-white text-lg font-poppins font-semibold text-left mb-6 laptop:text-2xl ';
  if (isCompactView) {
    titleClasses += ' laptop:w-full';
  } else {
    titleClasses +=
      ' laptop:w-[calc(50%-20px)] laptop:mr-5 laptop:grow laptop:m-0';
  }

  let formClasses = 'w-full flex flex-col justify-start items-stretch';
  if (!isCompactView) {
    formClasses +=
      ' laptop:max-w-[50%] laptop:w-[572px] laptop:flex-row laptop:flex-wrap laptop:items-start laptop:justify-between';
  }

  let fieldContainerClasses = 'relative my-0';
  if (!isCompactView) {
    fieldContainerClasses += ' laptop:w-[calc(50%-8px)] laptop:my-0';
  }

  return (
    <div
      className={`w-full rounded-2xl bg-purple-light bg-no-repeat bg-right-top laptop:min-h-[208px] transition-all bg-form-pattern-1-mobile ${
        isCompactView
          ? ''
          : 'laptop:bg-form-pattern-1-desktop laptop:bg-[length:auto_100%]'
      }`}
    >
      <div
        className={`w-full rounded-2xl  bg-no-repeat bg-left-bottom relative bg-form-pattern-2-mobile ${
          isCompactView ? '' : 'laptop:bg-form-pattern-2-desktop'
        }`}
      >
        <div className="bg-noise">
          <div className={loaderClasses}></div>
          <div className={containerClasses}>
            {successMsg && (
              <h2 className="w-full text-center text-white text-2xl font-bold">
                {successMsg}
              </h2>
            )}
            {!successMsg && (
              <>
                <div className={titleClasses}>
                  Sign up to stay up-to-date with our latest developments. We
                  promise not to spam you.
                </div>
                <form
                  className={formClasses}
                  onSubmit={submitSubscriptionForm}
                  ref={form}
                >
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className={
                      'my-2 leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray'
                    }
                  />
                  <input
                    type="text"
                    placeholder="How did you hear about us"
                    name="how_did_you_hear_about_us
                        "
                    className={
                      'my-2 leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray'
                    }
                  />
                  <div
                    className={
                      isCompactView
                        ? fieldContainerClasses + ' laptop:mt-0'
                        : fieldContainerClasses
                    }
                  >
                    <input
                      disabled={formIsSending ? 'disabled' : ''}
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      className="my-2 w-full cursor-pointer flex justify-center items-center bg-purple-bright text-white font-poppins font-normal text-center transition-all duration-300 rounded py-2 px-5  hover:bg-purple-bright-hover"
                    />
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SubscribeForm.propTypes = {
  isCompactView: PropTypes.bool,
};

SubscribeForm.defaultProps = {
  isCompactView: false,
};

export default SubscribeForm;

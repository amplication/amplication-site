import {useState} from 'react';
import PropTypes from 'prop-types';

const FooterForm = ({isCompactView}) => {
  const fieldErrorMessage = 'This field is required';
  const [email, setEmail] = useState('');
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [name, setName] = useState('');
  const [nameFieldError, setNameFieldError] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameFieldError, setLastNameFieldError] = useState(false);
  const [source, setSource] = useState('');
  const [sourceFieldError, setSourceFieldError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [, setIsWaitingForResponse] = useState(false);
  const [afterFormSubmitMessage, setAfterFormSubmitMessage] = useState('');

  const submitSubscriptionForm = async e => {
    e.preventDefault();

    setIsWaitingForResponse(true);

    // Validation
    let isValid = true;
    if (!email) {
      isValid = false;
      setEmailFieldError(true);
    } else {
      setEmailFieldError(false);
    }
    if (!name) {
      isValid = false;
      setNameFieldError(true);
    } else {
      setNameFieldError(false);
    }
    if (!lastName) {
      isValid = false;
      setLastNameFieldError(true);
    } else {
      setLastNameFieldError(false);
    }
    if (!source) {
      isValid = false;
      setSourceFieldError(true);
    } else {
      setSourceFieldError(false);
    }
    if (!isValid) {
      setIsWaitingForResponse(false);
      return;
    }
    setAfterFormSubmitMessage('');
    setFormSuccess(null);

    const host = '/api/subscribe';
    const body = {
      EMAIL: email,
      NAME: name,
      LAST_NAME: lastName,
      SOURCE: source,
    };

    try {
      const response = await fetch(host, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.result !== 'success' || !('result' in data)) {
        setAfterFormSubmitMessage(
          'msg' in data ? data.msg : 'Something went wrong'
        );
        setFormSuccess(false);
      } else {
        setAfterFormSubmitMessage(
          'Thank you for signing up for our mailing list!'
        );
        setFormSuccess(true);
      }
    } catch (e) {
      console.log('err', e);
      setAfterFormSubmitMessage('Something went wrong');
      setFormSuccess(false);
    }
    setIsWaitingForResponse(false);
  };

  let formClasses = 'w-full flex flex-col justify-start items-stretch';
  if (!isCompactView) {
    formClasses +=
      ' laptop:flex-row laptop:flex-wrap laptop:items-start laptop:justify-between';
  }

  let fieldContainerClasses = 'relative my-0 pb-5';
  if (!isCompactView) {
    fieldContainerClasses += ' laptop:w-[calc(50%-8px)] laptop:my-0';
  }

  return (
    <div className="w-full mb-12 laptop:mb-0 laptop:max-w-[580px] laptop:mt-4 laptop:w-auto laptop:ml-3 relative">
      <form className={formClasses} onSubmit={e => submitSubscriptionForm(e)}>
        <div className={fieldContainerClasses}>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="First name*"
              name="NAME"
              className={`leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray ${
                nameFieldError ? '' : 'hover:border-purple'
              } ${nameFieldError ? 'border-pink' : 'border-lite'}`}
            />
            {name && (
              <span
                className="absolute	right-4 top-[50%] translate-y-[-50%] cursor-pointer text-sm animate-fadeIn text-white"
                onClick={() => setName('')}
              >
                ✕
              </span>
            )}
          </div>
          {nameFieldError && (
            <span className="text-left block w-full text-xs text-pink py-0.5 ">
              {fieldErrorMessage}
            </span>
          )}
        </div>
        <div className={fieldContainerClasses}>
          <div className="relative">
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Last name*"
              name="LAST_NAME"
              className={`leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray ${
                  lastNameFieldError ? '' : 'hover:border-purple'
              } ${lastNameFieldError ? 'border-pink' : 'border-lite'}`}
            />
            {name && (
              <span
                className="absolute	right-4 top-[50%] translate-y-[-50%] cursor-pointer text-sm animate-fadeIn text-white"
                onClick={() => setLastName('')}
              >
                ✕
              </span>
            )}
          </div>
          {lastNameFieldError && (
              <span className="text-left block w-full text-xs text-pink py-0.5 ">
              {fieldErrorMessage}
            </span>
          )}
        </div>
        <div className={"w-full pb-5"}>
          <div className="relative">
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="EMAIL"
                placeholder="email#example.com*"
                className={`leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray ${
                    emailFieldError ? '' : 'hover:border-purple'
                } ${emailFieldError ? 'border-pink' : 'border-lite'}`}
            />
            {email && (
                <span
                    className="absolute	right-4 top-[50%] translate-y-[-50%] cursor-pointer text-sm animate-fadeIn text-white"
                    onClick={() => setEmail('')}
                >
                ✕
              </span>
            )}
          </div>
          {emailFieldError && (
              <span className="text-left block w-full text-xs text-pink py-0.5 ">
              {fieldErrorMessage}
            </span>
          )}
        </div>
        <div className={"w-full pb-7"}>
          <div className="relative">
            <input
              type="text"
              value={source}
              onChange={e => setSource(e.target.value)}
              placeholder="How did you hear about us"
              name="source"
              className={`leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-purple-dark py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray ${
                sourceFieldError ? '' : 'hover:border-purple'
              } ${sourceFieldError ? 'border-pink' : 'border-lite'}`}
            />
            {source && (
              <span
                className="absolute	right-4 top-[50%] translate-y-[-50%] cursor-pointer text-sm animate-fadeIn text-white"
                onClick={() => setSource('')}
              >
                ✕
              </span>
            )}
          </div>
          {sourceFieldError && (
            <span className="text-left block w-full text-xs text-pink py-0.5 ">
              {fieldErrorMessage}
            </span>
          )}
        </div>
        <div
          className={
            isCompactView
              ? fieldContainerClasses + ' laptop:mt-0'
              : fieldContainerClasses +
                ' flex justify-center laptop:justify-start'
          }
        >
          <input
            type="hidden"
            name="b_d4caec21be60d280924827504_49d58a40fc"
            tabIndex="-1"
          />
          <input
            type="submit"
            value="Contact Us"
            name="subscribe"
            className="w-full cursor-pointer flex justify-center items-center bg-purple-bright text-white font-poppins font-normal text-center transition-all duration-300 rounded py-2 px-5 mt-2 laptop:mt-0 hover:bg-purple-bright-hover max-w-[182px]"
          />
        </div>
        {formSuccess !== false && (
          <div
            className="w-full laptop:my-1 text-left text-xs text-pink py-1.5"
            dangerouslySetInnerHTML={{__html: afterFormSubmitMessage}}
          ></div>
        )}
      </form>
      {formSuccess === false && (
          <h2 className="absolute inset-0 bg-purple-dark flex align-items-center justify-center w-full text-center text-white text-2xl font-bold">
            {afterFormSubmitMessage}
          </h2>
      )}
    </div>
  );
};

FooterForm.propTypes = {
  isCompactView: PropTypes.bool,
};

FooterForm.defaultProps = {
  isCompactView: false,
};

export default FooterForm;

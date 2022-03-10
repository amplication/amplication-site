import {useState} from 'react';
import Select from 'react-select';
import jsonp from 'jsonp';
import PropTypes from "prop-types";

const SubscribeForm = ({isCompactView}) => {
  const fieldErrorMessage = 'This field is required';
  const [email, setEmail] = useState('');
  const [emailFieldError, setEmailFieldError] = useState(false);
  const [fullName, setFullName] = useState('');
  const [fullNameFieldError, setFullNameFieldError] = useState(false);
  const [source, setSource] = useState('Other');
  const [sourceFieldError, setSourceFieldError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [afterFormSubmitMessage, setAfterFormSubmitMessage] = useState('');
  const sourceOptions = [
    {value: 'Reddit', label: 'Reddit'},
    {value: 'Friend told me', label: 'Friend told me'},
    {value: 'Colleague told me', label: 'Colleague told me'},
    {value: 'Other', label: 'Other'},
  ];
  const selectCustomStyles = {
    control: (base, state) => ({
      ...base,
      background: '#15192C',
      borderRadius: '0.5rem',
      borderColor: sourceFieldError ? '#CC2C3F' : '#444B66',
      padding: 0,
      boxShadow: null,
      textAlign: 'left',
      color: '#A3A8B8',
    }),
    menu: base => ({
      ...base,
      borderRadius: '0.5rem',
      marginTop: 0,
      background: '#15192C',
      color: '#A3A8B8'
    }),
    menuList: base => ({
      ...base,
      padding: 0,
      background: '#15192C',
      color: '#A3A8B8'
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#A3A8B8',
      background: '#15192C',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        background: '#7950ED',
        color: '#FFFFFF',
      }
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: source === 'Other' ? '#A3A8B8' : '#ffffff',
    })
  };

  const submitSubscriptionForm = async (e) => {
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
    if (!fullName) {
      isValid = false;
      setFullNameFieldError(true);
    } else {
      setFullNameFieldError(false);
    }
    if (!source.value) {
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

    let host = 'https://dev.us5.list-manage.com/subscribe/post-json?';
    let data = {
      u: process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_FORM_U,
      id: process.env.NEXT_PUBLIC_MAILCHIMP_ID,
      c: process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_FORM_C,
      EMAIL: email,
      FNAME: fullName,
      SOURCE: source.value,
      b_cc391beefd07bdde0f03f8e95_39a8feead1: '',
      subscribe: 'Subscribe',
      _: process.env.NEXT_PUBLIC_MAILCHIMP_SUBSCRIBE_FORM_,
    };
    host += new URLSearchParams(data).toString();

    jsonp(host, {
      param: 'c'
    }, function (err, data) {
      if (err) {
        console.log('err', err);
        setAfterFormSubmitMessage('Something is wrong');
        setFormSuccess(false);
      } else if (data.result !== "success" || ! 'result' in data) {
        setAfterFormSubmitMessage(('msg' in data ? data.msg : 'Something is wrong'));
        setFormSuccess(false);
      } else {
        setAfterFormSubmitMessage(data.msg);
        setFormSuccess(true);
      }

      setIsWaitingForResponse(false);
    });
  }

  let loaderClasses = 'w-full h-full absolute l-0 t-0 rounded-2xl transition-all opacity-50 pointer-events-none';
  loaderClasses += isWaitingForResponse ? ' bg-purple-light z-10 pointer-events-auto' : '';

  let containerClasses = 'w-full px-4 py-16 max-w-[600px] mx-auto laptop:max-w-[100%] laptop:flex laptop:items-center relative';
  if (isCompactView) {
    containerClasses += ' laptop:flex-col laptop:justify-start laptop:items-stretch laptop:px-7 laptop:pt-20 laptop:pb-[120px]';
  } else {
    containerClasses += '  laptop:justify-between laptop:px-16 laptop:py-14 laptop:max-w-[1436px]';
  }

  let titleClasses = 'text-white text-lg font-poppins font-bold text-left mb-6  laptop:text-2xl ';
  if (isCompactView) {
    titleClasses += ' laptop:w-full';
  } else {
    titleClasses += ' laptop:w-[calc(50%-20px)] laptop:mr-5 laptop:grow laptop:m-0';
  }

  let formClasses = 'w-full flex flex-col justify-start items-stretch';
  if (!isCompactView) {
    formClasses += ' laptop:max-w-[50%] laptop:w-[572px] laptop:flex-row laptop:flex-wrap laptop:items-start laptop:justify-between';
  }

  let fieldContainerClasses = 'mb-4';
  if (!isCompactView) {
    fieldContainerClasses += ' laptop:w-[calc(50%-8px)] laptop:my-1';
  }

  return (
    <div className='w-full rounded-2xl bg-purple-light bg-form-pattern-1-mobile bg-no-repeat bg-right-top laptop:bg-form-pattern-1-desktop transition-all'>
      <div className='w-full rounded-2xl bg-form-pattern-2-mobile bg-no-repeat bg-left-bottom laptop:bg-form-pattern-2-desktop relative'>
        <div className={loaderClasses}></div>
        <div className={containerClasses}>
          {formSuccess &&
          <h2 className='w-full text-center text-white text-2xl font-bold'>{afterFormSubmitMessage}</h2>
          }
          {!formSuccess &&
          <>
            <h2 className={titleClasses}>
              Sign up to stay up-to-date with our latest developments. We promise not to spam you.
            </h2>
            <form className={formClasses} onSubmit={(e) => submitSubscriptionForm(e)}>
              <div className={fieldContainerClasses}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="EMAIL"
                       placeholder='email@example.com'
                       className={'block w-full rounded-lg border border-solid bg-purple-dark py-2 px-3 font-poppins text-sm text-white placeholder:text-gray ' + (emailFieldError ? 'border-error-red' : 'border-lite')}/>
                {emailFieldError &&
                <span className='text-left block w-full text-xs text-error-red py-0.5 '>{fieldErrorMessage}</span>
                }
              </div>
              <div className={fieldContainerClasses}>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
                       placeholder='Full Name' name="FULLNAME"
                       className={'block w-full rounded-lg border border-solid bg-purple-dark py-2 px-3 font-poppins text-sm text-white placeholder:text-gray ' + (fullNameFieldError ? 'border-error-red' : 'border-lite')}/>
                {fullNameFieldError &&
                <span className='text-left block w-full text-xs text-error-red py-0.5 '>{fieldErrorMessage}</span>
                }
              </div>
              <div className={fieldContainerClasses}>
                <Select
                  className='text-sm text-gray'
                  name='source'
                  styles={selectCustomStyles}
                  defaultValue={{value: '', label: 'How did you hear about us'}}
                  options={sourceOptions}
                  onChange={setSource}
                  isSearchable={false}
                />
                {sourceFieldError &&
                <span className='text-left block w-full text-xs text-error-red py-0.5'>{fieldErrorMessage}</span>
                }
              </div>
              <div className={fieldContainerClasses}>
                <input type="hidden" name="b_d4caec21be60d280924827504_49d58a40fc" tabIndex="-1"/>
                <input type="submit" value="Subscribe" name="subscribe"
                       className="w-full cursor-pointer flex justify-center items-center bg-purple-bright text-white font-poppins text-base font-normal text-center rounded py-2 px-5"/>
              </div>
              {formSuccess === false &&
              <div className='w-full laptop:my-1 text-left text-xs text-error-red py-1.5' dangerouslySetInnerHTML={{__html: afterFormSubmitMessage}}></div>
              }
            </form>
          </>
          }
        </div>
      </div>
    </div>
  );
}

SubscribeForm.propTypes = {
  isCompactView: PropTypes.bool
};

SubscribeForm.defaultProps = {
  isCompactView: false
};

export default SubscribeForm
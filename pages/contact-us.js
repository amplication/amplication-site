import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';
import Image from 'next/image';
import {useRef, useState} from 'react';
import Contacts from '../public/images/contact-us.png';

const ContactUs = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const form = useRef(null);

  const submitSubscriptionForm = async e => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const fields = [];
    [...formData].forEach(item => {
      fields.push({
        name: item[0],
        value: item[1],
      });
    });

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/25691669/2d4a991a-1b94-463e-a0a6-8307f41d02da',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            submittedAt: Date.now(),
            fields: fields,
            context: {
              pageUri: 'contact-us',
              pageName: 'Contact Us',
            },
          }),
        }
      );
      const data = await response.json();
      if (data.inlineMessage) {
        setSuccessMsg(data.inlineMessage);
      }
    } catch (e) {
      console.log('err', e);
    }
  };

  return (
    <>
      <NextSeo
        title="Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
        canonical={helpers.getCanonical('/')}
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://user-images.githubusercontent.com/53312820/190913686-02c7deb1-da2f-41b8-aa31-065e00f6155c.png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <main className="w-full font-poppins z-10 amplication-base">
        <section className="page-welcome !pt-10 !pb-8 large:!py-[9vh] xlg:!py-[17vh]">
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="header-and-video align-items-center">
                  <div className="content-block overflow-hidden relative p-10 border rounded border-solid border-dark-black-70 bg-light-blue">
                    <h3 className="!font-bold !text-[32px] !leading-[48px]">
                      We&apos;re here for you
                    </h3>
                    <div className="font-normal text-lg leading-[27px] mb-10">
                      Let us know how we can help and we&apos;ll get back to you
                      ASAP.
                    </div>
                    <form
                      className="hubspot w-full flex flex-col justify-start items-stretch laptop:flex-row laptop:flex-wrap laptop:items-start laptop:justify-between"
                      method="POST"
                      onSubmit={e => submitSubscriptionForm(e)}
                      ref={form}
                    >
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
                          placeholder="Work email"
                          className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
                        />
                      </div>
                      <div className="relative w-full !mt-6">
                        <span className="font-semibold text-sm leading-[22px]">
                          What do you need from the Amplication team?
                        </span>
                        <div className="flex flex-wrap justify-between mt-1 w-full">
                          <div className="w-[calc(50%-12px)] laptop:w-[calc(25%-12px)]">
                            <input
                              id="radio-1"
                              type="radio"
                              name="what_would_you_like_to_do___purchase_page_"
                              value="Talk with Customer Success"
                              className="hidden"
                              required
                            />
                            <label
                              htmlFor="radio-1"
                              className="!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full px-2 py-6 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue"
                            >
                              Talk with
                              <br />
                              Customer Success
                            </label>
                          </div>
                          <div className="w-[calc(50%-12px)] laptop:w-[calc(25%-12px)]">
                            <input
                              id="radio-2"
                              type="radio"
                              name="what_would_you_like_to_do___purchase_page_"
                              value="Get Technical Support"
                              className="hidden"
                              required
                            />
                            <label
                              htmlFor="radio-2"
                              className="!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full px-2 py-6 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue"
                            >
                              Get Technical
                              <br />
                              Support
                            </label>
                          </div>
                          <div className="w-[calc(50%-12px)] laptop:w-[calc(25%-12px)]">
                            <input
                              id="radio-3"
                              type="radio"
                              name="what_would_you_like_to_do___purchase_page_"
                              value="Subscribe to our blog"
                              className="hidden"
                              required
                            />
                            <label
                              htmlFor="radio-3"
                              className="!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full px-2 py-6 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue"
                            >
                              Subscribe to
                              <br />
                              our blog
                            </label>
                          </div>
                          <div className="w-[calc(50%-12px)] laptop:w-[calc(25%-12px)]">
                            <input
                              id="radio-4"
                              type="radio"
                              name="what_would_you_like_to_do___purchase_page_"
                              value="Something Else"
                              className="hidden"
                              required
                            />
                            <label
                              htmlFor="radio-4"
                              className="!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full px-2 py-6 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue"
                            >
                              Something
                              <br />
                              Else
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="relative w-full !mt-6">
                        <span className="font-semibold text-sm leading-[22px]">
                          Or just leave a message and we&apos;ll get back to you
                        </span>
                        <div className="flex justify-between mt-2 w-full">
                          <label className="w-full mt-1 mb-0">
                            <textarea
                              name="contact_us_message__support"
                              placeholder="Message"
                              className="w-full leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
                              required
                              rows="6"
                            ></textarea>
                          </label>
                        </div>
                      </div>
                      <div className="relative w-full !mt-2">
                        <label className="w-full mt-1 mb-0 flex align-items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="what_would_you_like_to_do___purchase_page_"
                            className="shadow-none w-4 h-4 border rounded-sm border-solid border-white !bg-light-blue checked:!bg-purple-bright checked:!border-purple-bright focus:!bg-purple-bright"
                            required
                          />
                          <span className="ml-2 font-normal text-[10px] leading-[13px]">
                            By signing up, I agree to Amplication&apos;s Terms
                            of Service and Privacy Policy.
                          </span>
                        </label>
                      </div>
                      <div className="relative w-full !mt-6 !flex align-items-center">
                        <input
                          type="submit"
                          name="submit"
                          className="mt-1 flex justify-center items-center text-white font-poppins font-normal text-center rounded py-2 px-3 laptop:px-8 laptop:font-medium transition-all duration-300 bg-purple-bright hover:bg-purple-bright-hover text-[15px] h-[40px] whitespace-nowrap !px-4 ml-auto"
                          value="Send message"
                        />
                      </div>
                    </form>
                    <div
                      className={
                        successMsg === ''
                          ? 'hidden '
                          : '' +
                            'absolute left-0 right-0 top-0 bottom-0 text-center flex align-items-center justify-content-center flex-column bg-light-blue'
                      }
                    >
                      <svg
                        width="126"
                        height="132"
                        viewBox="0 0 126 132"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M34.4 68.3a57.6 57.6 0 0 0-8.5 1.6l-7.7 1.6c-2 .2-4 .3-5.7 0-3.8-.5-7.7-2.8-8.8-6.5a8.2 8.2 0 0 1 10.2-10l.4-.6c-4.4-5.4-.2-12.6 5.6-13 2.8-.3 6 1.2 8 3.5 4 4.5 4.2 12.4 5 19.4l.2 2.2c.2 1.5 2.6 1.2 2.4-.3l-.3-2.8c-1-8.3-1-17.3-7.7-22-4.3-3-7.4-2.3-7.8-2.4-2.5.2-5 1.4-7 3.7a9.7 9.7 0 0 0-2 9.8A10.2 10.2 0 0 0 6.6 72c8 4.8 18.3 0 28.1-1.3 2.4-.4 1.2-2.5-.2-2.3ZM99 59.2l4.3-.8c2.7-.6 5.3-1 7.7-1.8 2-.6 3.7-1.2 5.1-2.2 3.3-2 5.9-5.8 5.4-9.6-.6-5.7-7.8-9.8-13.4-5.2l-.6-.4c1.7-6.8-5-11.8-10.5-9.9-2.7 1-5 3.7-5.8 6.6-2 6.2 1.7 14.1 3.8 21.3.5 1.5-1.8 2.2-2.2.7-2.6-8.6-7.1-17.8-2.7-25.4 2.6-4.5 5.8-5.1 6.1-5.4 2.4-.8 5-.7 7.9.6a10 10 0 0 1 5.8 8.3c1.3-.5 2.8-.7 4.1-.7 7 .4 13.4 8.5 7.7 17-4.5 6.7-13.6 7.5-22.2 9.2-2 .4-3-1.7-.6-2.3ZM49.6 4.7a11 11 0 0 0-13 14.5c3.2 10.5 17.7 13.2 26.5 20.6 1.3.7 2.7-.7 1.6-1.9a44 44 0 0 0-6.3-4.3 156 156 0 0 0-5.1-2.8c-2.6-1.3-5-2.6-7.3-4a21.6 21.6 0 0 1-4.5-3.8c-2.6-3-4-7.6-2.4-11.3 2.4-5.4 11-7.2 15.2-1l.7-.1v-.1c.4-7.2 8.7-10.1 13.7-6.6 2.4 1.8 3.8 5.2 3.8 8.4 0 6.7-6.2 13.5-10.5 20-1 1.3 1 2.7 2 1.3 5.2-7.8 12.7-15.5 10.6-24.4C73.4 4 70.4 2.4 70.1 2a11.1 11.1 0 0 0-8-1.9c-3.9.5-7.2 3-8.5 6.6-1.2-1-2.6-1.7-4-2Z"
                          fill="#F85B6E"
                        />
                        <path
                          d="M82.7 119c.3.4.9.6 1.3.4.5-.3.7-.9.4-1.4l-3.4-6.6c-2-3.6 1.2-7.1 4.7-11 5-5.7 7-9.1 3.5-16.2a104 104 0 0 0-12.4-17.4l-1.6-1.1.5-7v-.5c.1-1.1.3-2.3-.9-3.3-.4-.4-1-.7-1.6-.8-.9-.2-2 0-3 .4s-2.1 1-3 2c-.6.8-1.1 1.6-1.5 2.6l-2.3-1.6-.3-.1a4.7 4.7 0 0 0-3.9 0c-.7.4-1.3 1-1.7 1.6a5 5 0 0 0 .7 6.1l6.6 5.8a4.7 4.7 0 0 0-2.6 2.2 7 7 0 0 0-.9 3.1c0 .8 0 1.7.3 2.5l-1.7-.3c-1 0-1.8.3-2.5.8-.7.6-1.2 1.3-1.5 2.3-.3.9-.3 1.9-.2 3h-1.4c-.6 0-1.3.3-1.8.6-.6.4-1.1.9-1.5 1.5a5.9 5.9 0 0 0-.2 6.2 22 22 0 0 1 1.5 4c.5 2 .1 1.9-.7 3.7-1.8 3.7-1.8 6.5.3 10.8L57 122c.2.5.7.7 1.2.5.3-.1.5-.3.6-.6a1 1 0 0 0 0-.7l-5.3-10.8c-1.7-3.4-1.9-5.7-.3-9 1.1-2.4 1.6-2.3 1-4.6-.3-1.3-1-3.4-1.8-4.9-.8-1.6-.6-3.1 0-4.1.3-.5.7-.8 1-1 .3-.2.7-.4 1-.4.8 0 1.5.2 2 1l3.3 7.2c.2.5.8.7 1.3.5.5-.3.7-.9.4-1.4l-3.3-7.2a7.3 7.3 0 0 1-.4-4.4c.1-.6.4-1 .8-1.3a2 2 0 0 1 1.3-.4c.9 0 2 .5 3.2 1.4l5 9.5c.3.5 1 .7 1.4.4.5-.2.6-.8.4-1.3l-5.2-9.6v-.2a6.4 6.4 0 0 1-1.4-4.3c0-.8.2-1.6.6-2.2.3-.6.8-1 1.3-1.2.5-.2 1.2-.2 2 0l1 1 10.2 14.8c.3.4.9.6 1.3.2.5-.3.6-.9.3-1.3l-10.2-15-.2-.2s-8.3-7-10-8.7a3 3 0 0 1-.9-2.3c0-.5.2-1 .5-1.3.2-.4.5-.7.9-.9.6-.3 1.4-.3 2.3 0l3.3 2.3 8 5.5 2 1.4c.8 1 8.6 10 12 16.8 3 6.1.8 9-3.4 13.8-4 4.5-7.6 8.5-5 13.4l3.4 6.6Zm-9.4-54.6-6-4.1c.4-1 .8-1.8 1.4-2.4a6 6 0 0 1 2.2-1.6c.7-.3 1.4-.4 2-.3l.6.3c.4.4.3 1 .3 1.7v.5l-.5 5.9Zm-13.9 62.3 2.3 4.8c.3.4.9.6 1.3.4.5-.3.7-.8.5-1.3l-2.3-4.8a1 1 0 0 0-1.2-.5 1 1 0 0 0-.6.6 1 1 0 0 0 0 .8Z"
                          fill="#fff"
                        />
                        <path
                          d="M82.4 104.3c.3-.4.3-1-.2-1.4a1 1 0 0 0-1.3.1 95.8 95.8 0 0 0-6.4 9 1 1 0 0 0 .3 1.5c.4.3 1 .1 1.3-.3a159.6 159.6 0 0 1 6.3-9Z"
                          fill="#fff"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M85.7 120.9c-.5 0-.9.4-.9.9s.4.9.9.9.8-.4.8-1c0-.4-.3-.8-.8-.8ZM31 85a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM45 55a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM16.1 22.1c1-.7 1.9-.4 3.2-1.6 1-.9 1-1.4 1.3-2.5.4-1.3 1.2-1.3 1.6 0 .4 1.1.4 1.6 1.4 2.5.7.7 1.3 1 2.2 1.2 1.6.5 1.5 1.1 0 1.6-1.2.4-1.8.6-2.6 1.7-.8 1-.9 2.2-1.4 2.8-.8.9-1.3-1.4-1.5-1.8-.4-1-1.3-1.9-2.4-2.3-.5-.2-2.6-.8-1.8-1.6ZM100.5 73c1 .2 1.3 1 2.9 1 1.1 0 1.5-.3 2.4-.8 1-.5 1.5 0 1 1s-.8 1.3-.8 2.4c0 1 .2 1.4.6 2.1.7 1.2.3 1.6-1 1-1-.5-1.4-.7-2.6-.6-1 .1-1.9.9-2.6.9-1 0 0-1.6.2-2 .4-1 .4-2 0-3-.2-.4-1.1-2-.1-2ZM80.4 18.2c.8.1 1.2.8 2.5.8 1 0 1.2-.2 2-.7 1-.4 1.3 0 .8.9-.4.8-.6 1-.6 2 0 .8.2 1.2.6 1.8.5 1 .2 1.4-.9.9-.8-.4-1.3-.6-2.3-.5-.9 0-1.6.7-2.1.7-1 0 0-1.4.1-1.7.4-.8.3-1.7 0-2.5-.2-.4-1-1.7-.1-1.7Z"
                          fill="#fff"
                        />
                      </svg>
                      <h3
                        className="!font-bold !text-[32px] !leading-[52px] max-w-[560px]"
                        dangerouslySetInnerHTML={{__html: successMsg}}
                      />
                      <div className="font-normal text-lg leading-[27px] mt-2 max-w-[560px]">
                        We invite you to stay logged in and discover more about
                        Amplication&apos;s capabilities, and how you can benefit
                        from our different plans.
                      </div>
                    </div>
                  </div>
                  <div className="relative align-items-center laptop:mt-[-20vw] laptop:mb-[-15vw] middle:my-0 middle:!max-w-[90%] w-full middle:min-h-[600px] flex align-items-center middle:!max-w-[53%]">
                    <div className="middle:absolute middle:my-auto min-w-[100vw] middle:min-w-full middle:w-[52vw] max-w-[1280px] middle:flex align-items-center">
                      <Image src={Contacts} alt={''} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

ContactUs.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      paddingTopClasses="laptop:pt-[100px]"
    >
      {page}
    </MainLayout>
  );
};

export default ContactUs;

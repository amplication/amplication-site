import { NextSeo } from 'next-seo';
import { MainLayout } from '../layouts';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Slider from '../components/Sections/Enterprise/Slider';

import helpers from '../helpers';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import avatar1 from '../public/images/testimonials/testimonial-1.png';
import avatar2 from '../public/images/testimonials/testimonial-2.png';
import avatar5 from '../public/images/testimonials/testimonial-5.png';
import avatar6 from '../public/images/testimonials/testimonial-6.png';
import avatar7 from '../public/images/testimonials/testimonial-7.png';
import Image from 'next/image';
import * as analytics from '../lib/analytics';
import PageSection from '../components/Common/PageSection';

const ContactUs = () => {
  const [formIsSended, setFormIsSended] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [radioValue, setRadioValue] = useState('radio-1');

  const router = useRouter();
  const form = useRef(null);

  const submitSubscriptionForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const fields = [];
    [...formData].forEach((item) => {
      if (item[1]) {
        fields.push({
          name: item[0],
          value: item[1],
        });
      }
    });

    setFormIsSended(true);

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
        },
      );
      const data = await response.json();
      if (data.inlineMessage) {
        setSuccessMsg(data.inlineMessage);

        const params = {};
        formData.forEach((value, key) => (params[key] = value));

        analytics.event({
          action: 'formSubmitted',
          params: {
            formName: 'contactUsForm',
            ...params,
          },
        });

        await router.push('/contact-us/thank-you');
      }
      setFormIsSended(false);
    } catch (e) {
      console.log('error', e);
    }
  };

  const onChangeHandler = (e) => {
    const styles = getComputedStyle(e.target, null),
      rows = parseInt(e.target.getAttribute('rows')) || 2,
      lines = parseInt(styles.getPropertyValue('line-height')) * rows,
      padding = parseInt(styles.getPropertyValue('padding-top')) * 2,
      border = parseInt(styles.getPropertyValue('border-width')) * 4;

    e.target.style.height = lines + padding + border + 'px';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const testimonials = [
    {
      text: 'Amplication has helped us at OpenCures develop new API services faster in our work on health data software for preventive health care. We were looking for a django alternative in NodeJS that fit our architecture strategy and found exactly what we were looking for in Amplication. The skills and energy of the team have made our contributions a great pleasure!',
      name: 'Vincenzo Domina',
      position: 'OpenCures Inc.',
      avatar: avatar1,
    },
    {
      text: 'Amplication is a game-changing open-source platform for Node.js app development, offering unparalleled flexibility and the ability to auto-generate production-ready backend in minutes. I highly recommend it for any Node.js developer.',
      name: 'Marko Denic',
      position: 'Senior Full-stack Developer, Ideenreich Websolutions',
      avatar: avatar2,
    },
    {
      text: "“We've used Amplication as a Node.js backend in one of our bigger projects. The platform's ability to quickly bootstrap Back-End common tasks has greatly increased our get-to-go productivity and allowed us to focus on our business logic earlier in the project's life cycle. The team at Amplication have also been very responsive and helpful in addressing any issues or concerns. If you're starting a project from scratch, We highly recommend taking a look at this platform first” wewrite.software",
      name: 'Avinoam',
      position: 'WeWrite',
    },
    {
      text: "As a Co-Founder and CTO of VijanaTech Tanzania (vijanatech.com), we needed a fast and reliable solution to be build our api and amplication was just a fit for us as a startup. The best thing is i don't have to worry about admin panel and all api code it just does everything for us. The product is best as it save a lot of time in debugging contrary to the old way where we had to spend numerous amount of hours debugging code.",
      name: 'Emmanuel Mtera',
      position: 'Co-Founder',
    },
    {
      text: "Digital Copilote is an innovation-oriented web agency. We have been using Amplication for several months. As we work in a non-monolithic way we use Amplication to create backend services. What we like about Amplication is its ease of use and the speed with which you get a robust and usable app. Seriously, an organized junior dev who knows a little bit about Amplication can bootstrap a backend service in a day that would take a week for a seasoned senior dev. To conclude a 100% functional and serious product that saves us a lot of development hours and offers a rigorous framework allowing even junior devs to create POC or MVP type products that can be sent to production. In the end, our customers are happy because they end up with a project that costs half as much as before we used Amplication, and our developers are just as happy because they don't always develop the same project boostraping and focus on the business process of the project.",
      name: 'Thibaut Lefort',
      position: 'CEO, Digital Copilote',
      avatar: avatar5,
    },
    {
      text: "Looks like I don't actually need to worry about the internals of pagination, authorization, API documentation, routing and a bunch more when I build my next Node.js application... 🔥",
      name: 'Liran Tal 🛫 ModernFrontends #London 🇬🇧',
      position: '@liran_tal',
      avatar: avatar6,
    },
    {
      text: "been testing @amplication for production... It's actually good! as the base. The generated code is satisfyingly clean and the structures are well built. Good job open-source, good job.",
      name: 'Arian',
      position: '@ArianMirahmadi',
      avatar: avatar7,
    },
  ];

  return (
    <>
      <NextSeo
        title="Node.js App Development: Open Source Platform | Amplication"
        description="Amplication is the most flexible open-source platform for Node.js app development.
        We enable developers to auto-generate production-ready backend in minutes. Design modelsand roles,
         deploy your app, connect with REST or GraphQL API, sync with GitHub. You own the code."
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
        <section className="!py-12 large:!py-[100px]">
          <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
            <div className="row align-items-center">
              <div className="col-12 flex items-center justify-content-center max-laptop:flex-col">
                <div className="w-full max-w-[599px] overflow-hidden relative p-10 max-laptop:px-0">
                  <h2 className="!font-bold !text-[34px] !leading-10 !mb-3">
                    Reach out to the team!
                  </h2>
                  <h3 className="font-normal leading-[27px]">
                    We’re always looking for ways to help our customers make the
                    best use of Amplication.
                  </h3>
                  <div className="w-full font-normal  leading-[1.56em] mt-8">
                    <div className="font-light  leading-[27px] !mb-8">
                      Amplication is a very flexible open-source backend
                      development platform that saves engineers from repetitive
                      coding tasks and long development cycles. It enables you
                      to rapidly build mission-critical services with any
                      architecture at any scale. Use Amplication to:
                    </div>
                    <ul className="font-light leading-7 list-disc list-inside">
                      <li>Easily generate all core backend functionality</li>
                      <li>
                        Continuously sync the generated code to your GitHub repo
                      </li>
                      <li>Create microservices or monolithic architecture</li>
                      <li>Create a production-ready Node.js application</li>
                    </ul>
                  </div>
                </div>
                <div className="w-full max-w-[599px] overflow-hidden relative p-10 max-laptop:p-6 pt-7 border rounded border-solid border-dark-black-70 bg-light-blue z-10 max-laptop:order-[-1]">
                  <form
                    className="hubspot w-full flex flex-col justify-start items-stretch laptop:flex-row laptop:flex-wrap laptop:items-start laptop:justify-between"
                    method="POST"
                    onSubmit={(e) => submitSubscriptionForm(e)}
                    ref={form}
                  >
                    <div className="relative w-full !mt-6">
                      <span className="font-semibold text-sm leading-[22px] max-laptop:text-[16px]">
                        Tell us how you are using Amplication, so we can better
                        help you achieve your goals:
                      </span>
                      <div className="flex flex-wrap justify-between mt-1 w-full">
                        <div className="w-[calc(50%-8px)] laptop:w-[calc(25%-12px)]">
                          <input
                            checked={radioValue === 'radio-1'}
                            id="radio-1"
                            type="radio"
                            name="how_are_you_using_amplication"
                            value="Not using"
                            className="hidden"
                            onChange={() => setRadioValue('radio-1')}
                            required
                          />
                          <label
                            htmlFor="radio-1"
                            className={
                              (radioValue === 'radio-1'
                                ? 'bg-dark-black-70 border border-solid border-lite shadow-radio '
                                : '') +
                              '!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full p-2 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue select-none'
                            }
                          >
                            Not using
                          </label>
                        </div>
                        <div className="w-[calc(50%-8px)] laptop:w-[calc(25%-12px)]">
                          <input
                            checked={radioValue === 'radio-2'}
                            id="radio-2"
                            type="radio"
                            name="how_are_you_using_amplication"
                            value="Evaluating"
                            className="hidden"
                            onChange={() => setRadioValue('radio-2')}
                            required
                          />
                          <label
                            htmlFor="radio-2"
                            className={
                              (radioValue === 'radio-2'
                                ? 'bg-dark-black-70 border border-solid border-lite shadow-radio '
                                : '') +
                              '!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full p-2 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue select-none'
                            }
                          >
                            Evaluating
                          </label>
                        </div>
                        <div className="w-[calc(50%-8px)] laptop:w-[calc(25%-12px)]">
                          <input
                            checked={radioValue === 'radio-3'}
                            id="radio-3"
                            type="radio"
                            name="how_are_you_using_amplication"
                            value="Actively building"
                            onChange={() => setRadioValue('radio-3')}
                            className="hidden"
                            required
                          />
                          <label
                            htmlFor="radio-3"
                            className={
                              (radioValue === 'radio-3'
                                ? 'bg-dark-black-70 border border-solid border-lite shadow-radio '
                                : '') +
                              '!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full p-2 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue select-none'
                            }
                          >
                            Actively building
                          </label>
                        </div>
                        <div className="w-[calc(50%-8px)] laptop:w-[calc(25%-12px)]">
                          <input
                            checked={radioValue === 'radio-4'}
                            id="radio-4"
                            type="radio"
                            name="how_are_you_using_amplication"
                            value="In production"
                            className="hidden"
                            onChange={() => setRadioValue('radio-4')}
                            required
                          />
                          <label
                            htmlFor="radio-4"
                            className={
                              (radioValue === 'radio-4'
                                ? 'bg-dark-black-70 border border-solid border-lite shadow-radio '
                                : '') +
                              '!flex cursor-pointer h-[calc(100%-16px)] align-items-center justify-center w-full p-2 text-center mt-2 text-sm leading-[22px] text-gray border rounded border-solid border-dark-black-70 bg-light-blue select-none'
                            }
                          >
                            In production
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-4 w-full">
                      <span className="font-semibold text-sm leading-[22px] max-laptop:text-[16px]">
                        Our sales team would love to set up a call/chat.
                      </span>
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
                        placeholder="Work email"
                        className="leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
                      />
                    </div>
                    <div className="block relative w-full !mt-6">
                      <span className="font-semibold text-sm leading-[22px] max-laptop:text-[16px]">
                        We would like to hear more about what you want to do
                        with Amplication:
                      </span>
                      <div className="flex justify-between mt-2 w-full">
                        <label className="w-full mt-1 mb-0">
                          <textarea
                            rows="4"
                            onChange={onChangeHandler}
                            name="message"
                            placeholder="Message"
                            className="w-full leading-input focus:border-purple !shadow-hidden block w-full rounded-lg border border-solid bg-light-blue py-2 pl-3 pr-8 font-poppins text-sm text-white placeholder:text-gray hover:border-purple border-lite"
                          ></textarea>
                        </label>
                      </div>
                    </div>
                    <div className="relative w-full !mt-2">
                      <label className="w-full mt-1 mb-0 flex align-items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="LEGAL_CONSENT.subscription_type_142787872"
                          className="shadow-none w-4 h-4 border rounded-sm border-solid border-white !bg-light-blue checked:!bg-purple-bright checked:!border-purple-bright focus:!bg-purple-bright"
                          required
                        />
                        <span className="ml-2 font-normal text-[10px] leading-[13px]">
                          By submitting this form, I agree to Amplication&apos;s
                          Terms of Service and Privacy Policy.
                        </span>
                      </label>
                    </div>
                    <div className="relative w-full !mt-6 !flex align-items-center">
                      <input
                        disabled={formIsSended ? 'disabled' : ''}
                        type="submit"
                        name="submit"
                        className="min-w-[130px] mt-1 flex justify-center items-center text-white font-poppins font-normal text-center rounded py-2 px-3 laptop:px-8 laptop:font-medium transition-all duration-300 bg-purple-bright hover:bg-purple-bright-hover text-[15px] h-[40px] whitespace-nowrap !px-4 mx-auto"
                        value="Submit"
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
                      dangerouslySetInnerHTML={{ __html: successMsg }}
                    />
                    <div className="font-normal text-lg leading-[27px] mt-2 max-w-[560px]">
                      We invite you to stay logged in and discover more about
                      Amplication&apos;s capabilities, and how you can benefit
                      from our different plans.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-column bg-light-blue py-20 pb-14">
          <Swiper
            className="!max-w-[100%] bg-quote bg-no-repeat bg-[center_0]"
            slidesPerView={1}
            loop={true}
            autoHeight={true}
            modules={[Pagination]}
            pagination={{
              type: 'bullets',
              clickable: true,
              clickableClass: 'swiper-pagination-clickable !relative pt-4',
              bulletClass: 'swiper-pagination-bullet !bg-white',
              bulletActiveClass:
                'swiper-pagination-bullet-active relative top-[1px] !bg-purple-bright !w-2.5 !h-2.5',
            }}
          >
            {testimonials.map((testimonial, index) => {
              return (
                <SwiperSlide key={index} className="w-full min-w-full">
                  <div className="w-full flex flex-column align-items-center w-[90%] max-w-[880px] mx-auto">
                    <div className="font-light text-lg max-laptop:text-sm leading-[27px] text-center text-white">
                      {testimonial.text}
                    </div>
                    <div className="flex align-items-center mt-6">
                      <div className="!w-[35px] !h-[35px] overflow-hidden rounded-[100%]">
                        {testimonial.avatar ? (
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        ) : (
                          <span className="text-lg bg-[#5d5dff] h-full flex align-items-center justify-center">
                            {helpers.getInitials(testimonial.name)}
                          </span>
                        )}
                      </div>
                      {testimonial.name && testimonial.position && (
                        <div className="flex flex-column ml-2">
                          <div className="font-semibold text-xs leading-[18px]">
                            {testimonial.name}
                          </div>
                          <div className="font-normal text-[10px] leading-[15px]">
                            {testimonial.position}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <PageSection className={'!pt-5 !pb-4 laptop:!py-20 '} innerClassName={"flex-grow"}>
          <Slider />
        </PageSection>
      </main>
    </>
  );
};

ContactUs.getLayout = function getLayout(page) {
  return (
    <MainLayout
      footerClass="bg-light-blue"
      paddingTopClasses="laptop:pt-[100px]"
      hideFooterBanner={true}
    >
      {page}
    </MainLayout>
  );
};

export default ContactUs;

import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <a onClick={toggleOpen} className="cursor-pointer w-full">
      <div className="flex flex-col justify-between  items-start border border-solid border-dark-black-70  rounded-lg p-4">
        <div className="flex flex-row w-full">
          <span className="flex-1 text-lg text-white pr-4 ">{question}</span>
          <span
            className={`text-md text-white self-start justify-self-end transition-transform duration-400 ease-in  ${
              isOpen ? 'rotate-[270deg]' : 'rotate-90'
            } `}
          >
            &lt;
          </span>
        </div>

        <div
          className={`text-sm text-gray overflow-hidden transition-all duration-400 ease-in  ${
            isOpen ? 'max-h-0 pt-0' : 'max-h-[100px] pt-4 '
          } `}
        >
          {answer}
        </div>
      </div>
    </a>
  );
};

const PricingFAQ = () => {
  return (
    <div className="max-w-[960px] m-auto">
      <h2 className="my-12 mx-auto  text-[32px] !font-semibold leading-[48px] tracking-normal text-center ">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-2">
        <Question
          question="What are the differences between the free and the enterprise tier?"
          answer={
            <div>
              The Free plan includes database and model management, role-based
              permissions, and both GraphQL & REST API support.
              <br />
              The Enterprise plan adds unlimited projects, unlimited services,
              unlimited team members, advanced security features, additional git
              sync providers, dedicated support, and includes SSO.
            </div>
          }
        />
        <Question
          question="Does Amplication support advanced security features like 2FA, audit logs, and SSO for organizational security concerns?"
          answer={
            <div>
              Yes, Amplication&lsquo;s Enterprise plan is equipped with advanced
              security features to meet the needs of your organization. This
              includes support for{' '}
              <a
                className="text-secondary-purple"
                target="_blank"
                rel="noreferrer"
                href="https://docs.amplication.com/enterprise-sso/"
              >
                Single Sign-On (SSO)
              </a>
              , audit logs, and Two-Factor Authentication (2FA).
            </div>
          }
        />
        <Question
          question="We have multiple teams in the organization, can we use one account to manage separate teams?"
          answer="Yes, the Enterprise plan lets you have unlimited projects, services, and team members. You can manage all your teams from the same organization in your preferred structure."
        />
        <Question
          question="Can I pay to Amplication through my AWS account (AWS billing)?"
          answer="Yes, we support this billing method. Please contact us and we will help you handle it."
        />
        <Question
          question="We have our own best practices and standards - can we ask Amplication to generate the code in our own flavor?"
          answer={
            <div>
              Amplication offers a structured way to{' '}
              <a
                className="text-secondary-purple"
                target="_blank"
                rel="noreferrer"
                href="https://docs.amplication.com/custom-code/"
              >
                add custom code
              </a>{' '}
              and modify your generated code.
              <br />
              We also provide various{' '}
              <a
                className="text-secondary-purple"
                target="_blank"
                rel="noreferrer"
                href="https://docs.amplication.com/getting-started/plugins/"
              >
                plugins
              </a>
              , like Prettier and ESLint, so you can format your code exactly
              how you need it.
              <br />
              Furthermore, you can create{' '}
              <a
                className="text-secondary-purple"
                target="_blank"
                rel="noreferrer"
                href="https://docs.amplication.com/enterprise-private-plugins/"
              >
                private plugins
              </a>{' '}
              that are accessible only within your organization.
            </div>
          }
        />
        <Question
          question="Will your generated code override my code changes?"
          answer={
            <div>
              No, we respect your code changes.
              <br></br>
              Amplication&lsquo;s Smart Git Sync feature ensures that your
              custom code always takes precedence over the generated code.
              <br></br>
              For more details on how this works, please refer to our{' '}
              <a
                className="text-secondary-purple"
                target="_blank"
                rel="noreferrer"
                href="https://docs.amplication.com/smart-git-sync/"
              >
                documentation
              </a>
              .
            </div>
          }
        />
      </div>
    </div>
  );
};

export default PricingFAQ;

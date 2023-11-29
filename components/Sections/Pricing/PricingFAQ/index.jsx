import React, { useState } from 'react';
import styles from './style.module.css'; // Import the CSS module

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
      <button className={styles["question-toggle"]}>
        <strong>{question}</strong>
        <span className={styles["toggle-symbol"]}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className={`${styles["question-answer"]} ${isOpen ? styles.open : ""}`}>{answer}</div>}
    </div>
  );
};

const PricingFAQ = () => {
  return (
    <section className="bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 className="text-white text-center">FAQ</h2>
          <section className={styles["faq-section"]}>
            <Question
              question="What are the differences between the free and the enterprise tier?"
              answer={
                <div>
                  The Free plan includes database and model management, role-based
                  permissions, and both GraphQL & REST API support.
                  <br></br>
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
                  Yes, Amplication's Enterprise plan is equipped with advanced
                  security features to meet the needs of your organization. This
                  includes support for{" "}
                  <a href="https://docs.amplication.com/enterprise-sso/">
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
            answer="Yes, we support this billing method. Please contact us and we'll help you handle it."
            />
            <Question
              question="We have our own best practices and standards - can we ask Amplication to generate the code in our own flavor?"
              answer={
                <div>
                  Amplication offers a structured way to{" "}
                  <a href="https://docs.amplication.com/custom-code/">
                    add custom code
                  </a>{" "}
                  and modify your generated code.
                  <br />
                  <br />
                  We also provide various{" "}
                  <a href="https://docs.amplication.com/getting-started/plugins/">
                    plugins
                  </a>
                  , like Prettier and ESLint, so you can format your code exactly
                  how you need it.
                </div>
              }
            />
            <Question
              question="Will your generated code override my code changes?"
              answer={
                <div>
                  No, we respect your code changes.
                  <br></br>
                  Amplication's Smart Git Sync feature ensures that your custom code
                  always takes precedence over the generated code.
                  <br></br>
                  For more details on how this works, please refer to our{" "}
                  <a href="https://docs.amplication.com/smart-git-sync/">
                    documentation
                  </a>
                  .
                </div>
              }
            />
          </section>
        </div>
      </section>
  );
};

export default PricingFAQ;

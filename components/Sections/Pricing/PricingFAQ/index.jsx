import React, { useState } from 'react';
import styles from './style.module.css'; // Import the CSS module

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
      <button className={styles['question-toggle']}>
        <strong>{question}</strong>
        <span className={styles['toggle-symbol']}>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={`${styles['question-answer']} ${isOpen ? styles.open : ''}`}>{answer}</div>}
    </div>
  );
};

const PricingFAQ = () => {
  return (
    <section className="bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <h2 class="text-white text-center">FAQ</h2>
          <section className={styles['faq-section']}>
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
              question="Due to security regulations, my enterprise require supporting relevant capabilities, like 2FA, audit log, SSO and more. Do you support it?"
              answer="The Enterprise edition gives you access to advanced security features like SSO and audit logs are provided."
            />
            <Question
              question="We have multiple teams in the organization, can we use one account to manage separate teams?"
              answer="Yes, the Enterprise plan lets you have unlimited projects, services, and team members. You can manage all your teams from the same organization in your preferred structure."
            />
            <Question
              question="We are working with the enterprise edition of GitLab / BitBucket, will it work with Amplication?"
              answer={
                <div>
                  Amplication's compatibility with git providers varies based on the
                  plan:
                  <ul>
                    <li>
                      <strong>Free Plan:</strong> Supports GitHub.
                    </li>
                    <li>
                      <strong>Enterprise Plan:</strong> Supports Bitbucket, AWS
                      CodeCommit, and GitLab.
                    </li>
                  </ul>
                  We have to plans to add more git providers in the future.
                </div>
              }
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
                  We provide guides on how to add actions to REST API controllers,
                  add custom DTOs (Data Transfer Objects), add queries to GraphQL
                  resolver, and more on our documentation.
                </div>
              }
            />
            <Question
              question="Will your generated code override my code changes?"
              answer={
                <div>
                  Yes, Amplication's Smart Git Sync feature ensures that your custom
                  code always takes precedence over the generated code. Our system
                  intelligently combines both, managing the syncing process
                  efficiently. This means that your changes will not be overridden
                  and will be seamlessly integrated with any new changes from
                  Amplication. For more details on how this works, please refer to
                  our{" "}
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

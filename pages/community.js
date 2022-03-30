import Image from "next/image";
import DocumentHead from "../components/Common/DocumentHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import ImgFeatureRequest from '../public/images/community/feature-request.svg';
import ImgReportBug from '../public/images/community/report-bug.svg';
import ImgContributeDocs from '../public/images/community/contribute-docs.svg';
import ImgPullRequest from '../public/images/community/pull-request.svg';
import ImgGithubStars from '../public/images/community/github-stars.svg';
import ImgSocial from '../public/images/community/social.svg';
import ImgChat from '../public/images/community/chat.svg';
import ImgIssue from '../public/images/community/issue.svg';
import ImgDocs from '../public/images/community/docs.svg';

const Community = () => {
  return (
    <>
      <DocumentHead
        pageTitle="Join our community & contribute to Amplication"
        pageDescription="Join us in building the next generation of development tools. Any contribution counts."
        includeAssets={true}
      />

      <div className='page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[143px] bg-purple-dark relative'>
        <Header/>

        <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">

          <section className="page-hero bg-page-hero">
            <div className="container-custom">
              <div className="row d-flex align-items-end align-items-lg-center">
                <div className="col-12 col-lg-7">
                  <div className="hero-header">
                    <h1 className="main-title">We're better together.</h1>

                    <h3 className="h3">
                      Join us in building the next generation of development tools.
                      Any contribution counts.
                    </h3>
                    <a
                      href="https://github.com/amplication/amplication"
                      className="btn btn-primary"
                    >
                      <span className="social-link github social-white"> </span>
                      Get Involved
                    </a>
                  </div>
                </div>
                <div className="hero-bg col-12 offset-lg-1 col-lg-4">

                </div>
              </div>
            </div>
          </section>

          <section className="">
            <div className="container-custom">
              <div className="row align-items-center justify-content-center mb-5">
                <h2 className="h2 text-center">Contribute to Amplication</h2>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="contribute-pane"
                  id="feature-request"
                  role="tabpanel"
                  aria-labelledby="feature-request-tab"
                >
                  <div className="side-by-side">
                    <div className="image-container">
                      <Image src={ImgFeatureRequest} alt="pull request" />
                    </div>
                    <div>
                      <div className="bracket-box">
                        <span>Submit</span>
                        a feature request
                      </div>
                      <div className="description-box-black10">
                        Help improve Amplication by submitting your ideas.
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title="
                        className="btn btn-outline-secondary"
                      >
                        Submit feature request
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="contribute-pane"
                  id="bug-report"
                  role="tabpanel"
                  aria-labelledby="bug-report-tab"
                >
                  <div className="side-by-side">
                    <div className="image-container">
                      <Image src={ImgReportBug} alt="bug report" />
                    </div>
                    <div>
                      <div className="bracket-box">
                        <span>Create</span>
                        a bug report
                      </div>
                      <div className="description-box-black10">
                        If you see an error message or run into an issue, please
                        report it so we can make this platform the best it can be!
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title="
                        className="btn btn-outline-secondary"
                      >
                        Create bug report
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="contribute-pane"
                  id="update-docs"
                  role="tabpanel"
                  aria-labelledby="update-docs-tab"
                >
                  <div className="side-by-side">
                    <div className="image-container">
                      <Image src={ImgContributeDocs} alt="docs" />
                    </div>
                    <div>
                      <div className="bracket-box">
                        <span>Write</span>
                        and update the docs
                      </div>
                      <div className="description-box-black10">
                        Help us write, edit, and improve the docs.<br/>
                        Our docs are a work in progress, so be sure to check it from
                        time to time for new articles.
                      </div>
                      <a
                        target="_blank"
                        href="https://docs.amplication.com/"
                        className="btn btn-outline-secondary"
                      >
                        See the docs
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="contribute-pane"
                  id="pull-request"
                  role="tabpanel"
                  aria-labelledby="pull-request-tab"
                >
                  <div className="side-by-side">
                    <div className="image-container">
                      <Image src={ImgPullRequest} alt="pull request" />
                    </div>
                    <div>
                      <div className="bracket-box">
                        <span>Send</span>
                        a pull request
                      </div>
                      <div className="description-box-black10">
                        Want to create a new feature or improve existing
                        functionality? <br/>PRs are welcomed and encouraged.
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/amplication/amplication/blob/master/CONTRIBUTING.md"
                        className="btn btn-outline-secondary"
                      >
                        Learn how to contribute
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="bg-gradient-community">
            <section className="bg-transparent">
              <div className="container-custom">
                <div
                  className="text-center align-items-center justify-content-center mb-5"
                >
                  <h2 className="h2">Spread the word</h2>
                  <div className="row">
                    <h3 className="h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4">
                      Help us build the community by sharing Amplication with your
                      colleagues and fellow developers.
                    </h3>
                  </div>
                  <div className="action-panel-list build-community">
                    <div className="panel">
                      <Image src={ImgGithubStars} alt="GitHub" />
                      <div className="bracket-box">
                        <span>Star</span>
                        us on GitHub
                      </div>
                      <div className="description description-box-black10">
                        Checkout our repository on GitHub and don't forget to star us.
                      </div>
                      <div className="actions">
                        <a
                          target="_blank"
                          href="https://github.com/amplication/amplication"
                          className="btn btn-outline-secondary"
                        >
                          Open the repo
                        </a>
                      </div>
                    </div>
                    <div className="panel">
                      <Image src={ImgSocial} alt="Social" />
                      <div className="bracket-box">
                        <span>Follow</span>
                        us on social media
                      </div>
                      <div className="description description-box-black10">
                        Get the latest updates and news on Twitter and Facebook.
                        Retweets, shares, and likes will help us
                        spread&nbsp;the&nbsp;word.
                      </div>
                      <div className="actions">
                        <a
                          className="social-link twitter"
                          href="https://twitter.com/amplication"
                          target="_blank"
                          title="Amplication on Twitter"
                        >
                        </a>
                        <a
                          className="social-link facebook"
                          href="https://www.facebook.com/amplicationcom/"
                          target="_blank"
                          title="Amplication on Facebook"
                        >
                        </a>
                        <a
                          className="social-link linkedin"
                          href="https://www.linkedin.com/company/amplication"
                          target="_blank"
                          title="Amplication on LinkedIn"
                        >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-transparent">
              <div className="container-custom">
                <div className="text-center align-items-center justify-content-center mb-5">
                  <h2 className="h2">Get support</h2>
                  <div className="row">
                    <h3 className="h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4">
                      Share your questions with the community, no question should be
                      left unanswered.
                    </h3>
                  </div>
                  <div className="action-panel-list support">
                    <div className="panel">
                      <Image src={ImgChat} alt="Chat" />
                      <div className="bracket-box">
                        <span>Chat</span>
                        with us
                      </div>
                      <div className="description">
                        Join our Discord channel and chat with other Amplication
                        users, contributors and maintainers who would love to give a
                        hand where&nbsp;needed.
                      </div>
                      <div className="actions">
                        <a
                          target="_blank"
                          href="https://discord.gg/Z2CG3rUFnu"
                          className="btn btn-primary"
                        >
                          Join our Discord channel
                        </a>
                      </div>
                    </div>
                    <div className="panel">
                      <Image src={ImgIssue} alt="Issue"/>
                      <div className="bracket-box">
                        <span>Report</span>
                        an issue
                      </div>
                      <div className="description">
                        If you encounter an issue, please report it. Others may have
                        the same&nbsp;issue.
                      </div>
                      <div className="actions">
                        <a
                          target="_blank"
                          href="https://github.com/amplication/amplication/issues"
                          className="btn btn-primary"
                        >
                          View all issues
                        </a>
                      </div>
                    </div>
                    <div className="panel">
                      <Image src={ImgDocs} alt="Docs"/>
                      <div className="bracket-box">
                        <span>Read</span>
                        the docs
                      </div>
                      <div className="description">
                        Our docs are a work in progress, and you can always find
                        new&nbsp;articles.
                      </div>
                      <div className="actions">
                        <a
                          target="_blank"
                          href="https://docs.amplication.com/docs/getting-started"
                          className="btn btn-primary"
                        >
                          Read the docs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </main>

        <Footer />
        <Background />
      </div>
    </>
  )
}

export default Community;

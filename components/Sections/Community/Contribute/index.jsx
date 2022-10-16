import Title from '../../../Posts/PostCard/Title';
import Link from 'next/link';
import Image from 'next/image';
import ImgFeatureRequest from '../../../../public/images/community/feature-request.svg';
import ImgReportBug from '../../../../public/images/community/report-bug.svg';
import ImgContributeDocs from '../../../../public/images/community/contribute-docs.svg';
import ImgPullRequest from '../../../../public/images/community/pull-request.svg';

const Contribute = () => {
  return (
    <section>
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="row align-items-center justify-content-center mb-5">
          <Title level={2} className="h2 text-center">
            Contribute to Amplication
          </Title>
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
                <div className="w-[50%] max-w-[290px]">
                  <Image src={ImgFeatureRequest} alt="pull request" />
                </div>
              </div>
              <div>
                <div className="bracket-box">
                  <span>Submit</span>a feature request
                </div>
                <div className="description-box-black10 text-base text-white">
                  Help improve Amplication by submitting your ideas.
                </div>
                <Link href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=">
                  <a target="_blank" className="btn btn-transparent">
                    Submit feature request
                  </a>
                </Link>
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
                <div className="w-[50%] max-w-[290px]">
                  <Image src={ImgReportBug} alt="bug report" />
                </div>
              </div>
              <div>
                <div className="bracket-box">
                  <span>Create</span>a bug report
                </div>
                <div className="description-box-black10 text-base text-white">
                  If you see an error message or run into an issue, please
                  report it so we can make this platform the best it can be!
                </div>
                <Link href="https://github.com/amplication/amplication/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=">
                  <a target="_blank" className="btn btn-transparent">
                    Create bug report
                  </a>
                </Link>
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
                <div className="w-[50%] max-w-[290px]">
                  <Image src={ImgContributeDocs} alt="docs" />
                </div>
              </div>
              <div>
                <div className="bracket-box">
                  <span>Write</span>
                  and update the docs
                </div>
                <div className="description-box-black10 text-base text-white">
                  Help us write, edit, and improve the docs.
                  <br />
                  Our docs are a work in progress, so be sure to check it from
                  time to time for new articles.
                </div>
                <Link href="https://docs.amplication.com/">
                  <a target="_blank" className="btn btn-transparent">
                    See the docs
                  </a>
                </Link>
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
                <div className="w-[50%] max-w-[290px]">
                  <Image src={ImgPullRequest} alt="pull request" />
                </div>
              </div>
              <div>
                <div className="bracket-box">
                  <span>Send</span>a pull request
                </div>
                <div className="description-box-black10 text-base text-white">
                  Want to create a new feature or improve existing
                  functionality? <br />
                  PRs are welcomed and encouraged.
                </div>
                <Link href="https://github.com/amplication/amplication/blob/master/CONTRIBUTING.md">
                  <a target="_blank" className="btn btn-transparent">
                    Learn how to contribute
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;

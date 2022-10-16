import Title from '../../../Posts/PostCard/Title';
import Link from 'next/link';
import Image from 'next/image';
import ImgChat from '../../../../public/images/community/chat.svg';
import ImgIssue from '../../../../public/images/community/issue.svg';
import ImgDocs from '../../../../public/images/community/docs.svg';

const Support = () => {
  return (
    <section className="bg-transparent">
      <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
        <div className="text-center align-items-center justify-content-center mb-5">
          <Title level={2} className="h2">
            Get support
          </Title>
          <div className="row">
            <Title
              level={3}
              className="h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4"
            >
              Share your questions with the community, no question should be
              left unanswered.
            </Title>
          </div>
          <div className="action-panel-list support">
            <div className="panel">
              <Image src={ImgChat} alt="Chat" />
              <div className="bracket-box">
                <span>Chat</span>
                with us
              </div>
              <div className="description text-base text-white">
                Join our Discord channel and chat with other Amplication users,
                contributors and maintainers who would love to give a hand
                where&nbsp;needed.
              </div>
              <div className="actions">
                <Link href="https://discord.gg/Z2CG3rUFnu">
                  <a target="_blank" className="btn btn-primary">
                    Join our Discord channel
                  </a>
                </Link>
              </div>
            </div>
            <div className="panel">
              <Image src={ImgIssue} alt="Issue" />
              <div className="bracket-box">
                <span>Report</span>
                an issue
              </div>
              <div className="description text-base text-white">
                If you encounter an issue, please report it. Others may have the
                same&nbsp;issue.
              </div>
              <div className="actions">
                <Link href="https://github.com/amplication/amplication/issues">
                  <a target="_blank" className="btn btn-primary">
                    View all issues
                  </a>
                </Link>
              </div>
            </div>
            <div className="panel">
              <Image src={ImgDocs} alt="Docs" />
              <div className="bracket-box">
                <span>Read</span>
                the docs
              </div>
              <div className="description text-base text-white">
                Our docs are a work in progress, and you can always find
                new&nbsp;articles.
              </div>
              <div className="actions">
                <Link href="https://docs.amplication.com/docs/getting-started/">
                  <a target="_blank" className="btn btn-primary">
                    Read the docs
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

export default Support;

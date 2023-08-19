import PropTypes from 'prop-types';

const Roadmap = ({ customClass }) => {
  const mystyle = {
    color: ' #A787FF',
  };
  return (
    <>
      <div className="row m-container p-container align-items-center mb-2 text-white">
        <h2 className="roadmap-heading">
          What&apos;s next? <br />
          Great things coming down the{' '}
          <span style={mystyle}>&lt;roadmap&gt;</span>
        </h2>
        <p className="roadmap-paragraph">
          While we continuously work alongside our community to make Amplication
          Community Edition better,
          <br />
          we are extending its capabilities into Enterprise Edition to meet the
          requirements and standards of large-scale organizations and
          enterprises.
        </p>
      </div>
      <div className="row d-flex justify-content-between align-items-stretch large:w-[94.5%]">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">APIs &amp; UI</div>
            <ul className="roadmap-list">
              <li className="done">GraphQL API</li>
              <li className="done">REST API</li>
              <li className="done">React Admin UI</li>
              <li className="text-white">Subscriptions</li>
              <li className="text-white">Websockets</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">Database</div>
            <ul className="roadmap-list">
              <li className="done">Design data model</li>
              <li className="done">PostgreSQL</li>
              <li className="done">MySQL</li>
              <li className="done">MongoDB</li>
              <li className="text-white">ERD View</li>
              <li className="text-white">Connect to your own database</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">Framework</div>
            <ul className="roadmap-list">
              <li className="done">Roles &amp; Permissions</li>
              <li className="done">Identity Management</li>
              <li className="done">Plugin System &amp; marketplace</li>
              <li className="done">Monorepo</li>
              <li className="text-white">Logging &amp; auditing</li>
              <li className="text-white">Monitoring &amp; observability</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">Microservices</div>
            <ul className="roadmap-list">
              <li className="done">Modular services</li>
              <li className="done">Queues</li>
              <li className="text-white">Other transports</li>
              <li className="text-white">Secrets</li>
              <li className="text-white">Environment variables</li>
            </ul>
          </div>
        </div>{' '}
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">
              Git &amp; Custom Code
            </div>
            <ul className="roadmap-list">
              <li className="done">Custom Code</li>
              <li className="done">Continuos sync with Git</li>
              <li className="done">Auto merge and conflict management</li>
              <li className="text-white">GitLab and other Git services</li>
              <li className="text-white">Multiple branches</li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="roadmap-box">
            <div className="roadmap-title font-dmmono">CI/CD</div>
            <ul className="roadmap-list">
              <li className="done">Docker</li>
              <li className="done">Helm charts</li>
              <li className="done">GitHub Actions</li>
              <li className="text-white">Terraform</li>
              <li className="text-white">Connect to private cloud</li>
              <li className="text-white">GitOps</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Roadmap.propTypes = {
  customClass: PropTypes.string,
};

Roadmap.defaultProps = {
  customClass: '',
};

export default Roadmap;

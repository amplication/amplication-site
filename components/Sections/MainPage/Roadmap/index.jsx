const Roadmap = () => {
  const mystyle = {
    color:" #A787FF"
  };
  return (
    <>
      <section className="page-roadmap" id="roadmap">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div
            className="row align-items-center justify-content-center justify-content-md-start mb-4 text-white"
          >
            <h2 className="roadmap-heading">
       
              What&apos;s next? <br/>Great things coming down the <span style={mystyle}>&lt;roadmap&gt;</span>
            </h2>
            <p className="roadmap-paragraph">
            While we continuously work alongside our community to make Amplication Community Edition better,<br/> we are extending its capabilities into Enterprise Edition to meet the requirements and standards<br/> of large-scale organizations and enterprises. 
            </p>
          </div>
          <div className="row d-flex justify-content-between align-items-stretch">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">APIs &amp; UI</div>
                <ul className="roadmap-list">
                  <li className="text-base done">GraphQL API</li>
                  <li className="text-base done">REST API</li>
                  <li className='text-base done'>React Admin UI</li>
                  <li className='text-base text-white'>Subscrptions</li>
                  <li className='text-base text-white'>Websockets</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Database</div>
                <ul className="roadmap-list">
                  <li className="text-base done">Design data model</li>
                  <li className='text-base text-white'>MongoDB &amp; other databases</li>
                  <li className='text-base text-white'>ERD View</li>
                  <li className='text-base text-white'>Connect to your own database</li>
                </ul>
              </div>
           </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Framework</div>
                <ul className="roadmap-list">
                <li className='text-base done'>Roles &amp; Permissions</li>
                <li className='text-base done'>Identity Management</li>
                  <li className='text-base text-white'>Plugin System &amp; marketplace</li>
                  <li className='text-base text-white'>Monorepo</li>
                  <li className='text-base text-white'>Logging &amp; auditing</li>
                  <li className='text-base text-white'>Monitoring &amp; observability</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Microservices</div>
                <ul className="roadmap-list">
                <li className='text-base text-white'>Modular services</li>
                <li className='text-base text-white'>Queues</li>
                <li className='text-base text-white'>Other transports</li>
                <li className='text-base text-white'>Canvas pages</li>
                  <li className='text-base text-white'>Secrets</li>
                  <li className='text-base text-white'>Environment variables</li>
                </ul>
              </div>
            </div> <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Git &amp; Custom Code</div>
                <ul className="roadmap-list">
                <li className='text-base done'>Custom Code</li>
                <li className='text-base done'>Continuos sync with Git</li>
                <li className='text-base text-white'>GitLab and other Git services</li>
                <li className='text-base text-white'>Auto merge and conflict management</li>
                  <li className='text-base text-white'>Multiple branches</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">CI/CD</div>
                <ul className="roadmap-list">
                  <li className='text-base done'>Docker</li>
                  <li className="text-base text-white">Terraform</li>
                  <li className="text-base text-white">Helm charts</li>
                  <li className="text-base text-white">Connect to private cloud</li>
                  <li className='text-base text-white'>GitHub Actions</li>
                  <li className='text-base text-white'>GitOps</li>
                </ul>
              </div>
            </div>
          </div><br/><div  className="roadmap-link">
          Want to dive into features? Check out our <a className="official-roadmap-link" href="https://docs.amplication.com/docs/about/roadmap"> official public roadmap</a> to learn more. 
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap
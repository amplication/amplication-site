const Roadmap = () => {
  return (
    <>
      <section className="page-roadmap" id="roadmap">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div
            className="row align-items-center justify-content-center justify-content-md-start mb-4 text-white"
          >
            <h2 className="h2 text-left col-12">
              What&apos;s next? <br/>Great things are coming.
            </h2>
          </div>
          <div className="row d-flex justify-content-between align-items-stretch">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Integration</div>
                <ul className="roadmap-list">
                  <li className="text-base done">GraphQL API</li>
                  <li className="text-base done">REST API</li>
                  <li className='text-base text-white'>Connectors library</li>
                  <li className='text-base text-white'>Custom connectors</li>
                  <li className='text-base text-white'>SMS</li>
                  <li className='text-base text-white'>E-mail</li>
                  <li className='text-base text-white'>Push notifications</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Database</div>
                <ul className="roadmap-list">
                  <li className="text-base done">Design data model</li>
                  <li className='text-base text-white'>Connect to your own database</li>
                  <li className='text-base text-white'>Import schema from existing database</li>
                  <li className='text-base text-white'>Use multiple data sources</li>
                  <li className='text-base text-white'>More data types</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Business Logic</div>
                <ul className="roadmap-list">
                  <li className="text-base done">Roles and Permissions</li>
                  <li className='text-base text-white'>Decision tables</li>
                  <li className='text-base text-white'>Expressions</li>
                  <li className='text-base text-white'>Condition builders</li>
                  <li className='text-base text-white'>Visual flow editors for custom logic</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Framework</div>
                <ul className="roadmap-list">
                  <li className='text-base text-white'>Testing</li>
                  <li className='text-base text-white'>IAM and SSO</li>
                  <li className='text-base text-white'>Logging and auditing</li>
                  <li className='text-base text-white'>Performance, monitoring, and scaling</li>
                  <li className='text-base text-white'>Debugging</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Front-end</div>
                <ul className="roadmap-list">
                  <li className="text-base done">Auto-generated Admin UI</li>
                  <li className='text-base text-white'>Canvas pages</li>
                  <li className='text-base text-white'>Built-in component library</li>
                  <li className='text-base text-white'>Fully custom clients</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">More</div>
                <ul className="roadmap-list">
                  <li className='text-base text-white'>Collaboration</li>
                  <li className="text-base done">Custom code with TS</li>
                  <li className='text-base text-white'>Integration with DevOps tools and services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Roadmap
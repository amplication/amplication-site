const Roadmap = () => {
  return (
    <>
      <section className="page-roadmap" id="roadmap">
        <div className="container-custom">
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
                  <li className="done">GraphQL API</li>
                  <li className="done">REST API</li>
                  <li>Connectors library</li>
                  <li>Custom connectors</li>
                  <li>SMS</li>
                  <li>E&#8209;mail</li>
                  <li>Push notifications</li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Database</div>
                <ul className="roadmap-list">
                  <li className="done">Design data model</li>
                  <li>Connect to your own database</li>
                  <li>Import schema from existing database</li>
                  <li>Use multiple data sources</li>
                  <li>More data types</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Business Logic</div>
                <ul className="roadmap-list">
                  <li className="done">Roles and Permissions</li>
                  <li>Decision tables</li>
                  <li>Expressions</li>
                  <li>Condition builders</li>
                  <li>Visual flow editors for custom logic</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Framework</div>
                <ul className="roadmap-list">
                  <li>Testing</li>
                  <li>IAM and SSO</li>
                  <li>Logging and auditing</li>
                  <li>Performance, monitoring, and scaling</li>
                  <li>Debugging</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">Front-end</div>
                <ul className="roadmap-list">
                  <li className="done">Auto-generated Admin UI</li>
                  <li>Canvas pages</li>
                  <li>Built&#8209;in component library</li>
                  <li>Fully custom clients</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="roadmap-box">
                <div className="roadmap-title">More</div>
                <ul className="roadmap-list">
                  <li>Collaboration</li>
                  <li className="done">Custom code with TS</li>
                  <li>Integration with DevOps tools and services</li>
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
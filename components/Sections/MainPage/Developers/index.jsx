const Developers = () => {
  return(
    <>
      <section className="page-developers bg-transparent">
        <div className="container-custom">
          <div className="row align-items-center justify-content-center mb-5">
            <h2 className="h2 text-center">What type of developer are you?</h2>
          </div>

          <div className="type-cards">
            <div className="type-card">
              <div className="bracket-box">
                <span>Front-end</span>
                developer
              </div>

              <ul className="type-list">
                <li>Use Amplication UI or CLI to create your app</li>
                <li>
                  Design data models and create REST & GraphQL APIs
                  without&nbsp;coding.
                </li>
                <li>
                  No need for server-side development skills since Amplication
                  auto-generates back-end&nbsp;code.
                </li>
                <li>
                  You can focus entirely on developing your next
                  great&nbsp;app&nbsp;😎
                </li>
              </ul>
              <div className="spacer"></div>
              <a href="https://app.amplication.com" className="btn btn-primary btn-lg">
                Get Started
              </a>
            </div>

            <div className="type-card">
              <div className="bracket-box">
                <span>Full-stack</span>
                developer
              </div>
              <ul className="type-list">
                <li>
                  Amplication auto-generates an app based on
                  TypeScript&nbsp;and&nbsp;Node.js.
                </li>
                <li>
                  Generated apps include NestJS, Prisma, REST & GraphQL API, a
                  React admin UI, logging, authentication
                  and&nbsp;authorization.
                </li>
                <li>
                  Safely customize your generated app Node.js code using your
                  favorite IDE.
                </li>
                <li>
                  Decide whether to download the app within a Docker container
                  that’s ready for deployment or to deploy to the
                  Amplication&nbsp;cloud.
                </li>
                <li>
                  At any point you’re free to download the source code and
                  continue development elsewhere.
                </li>
              </ul>
              <div className="spacer"></div>
              <a href="https://app.amplication.com" className="btn btn-primary btn-lg">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Developers
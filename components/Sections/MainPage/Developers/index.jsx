import Link from "next/link";

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
                <li className={'text-base text-white'}>Use Amplication UI or CLI to create your Node.JS app</li>
                <li className={'text-base text-white'}>
                  Design data models and create REST & GraphQL APIs
                  without&nbsp;coding.
                </li>
                <li className={'text-base text-white'}>
                  No need for server-side development skills since Amplication
                  auto-generates back-end&nbsp;code.
                </li>
                <li className={'text-base text-white'}>
                  You can focus entirely on developing your next
                  great&nbsp;app&nbsp;😎
                </li>
              </ul>
              <div className="spacer"></div>
              <Link
                href={'https://app.amplication.com'}
                passHref={true}
              >
                <a className="btn btn-primary btn-lg">
                  Get Started
                </a>
              </Link>
            </div>

            <div className="type-card">
              <div className="bracket-box">
                <span>Full-stack</span>
                developer
              </div>
              <ul className="type-list">
                <li className={'text-base text-white'}>
                  Amplication auto-generates an app based on
                  TypeScript&nbsp;and&nbsp;Node.js.
                </li>
                <li className={'text-base text-white'}>
                  Generated apps include NestJS, Prisma, REST & GraphQL API, a
                  React admin UI, logging, authentication
                  and&nbsp;authorization.
                </li>
                <li className={'text-base text-white'}>
                  Safely customize your generated app Node.js code using your
                  favorite IDE.
                </li>
                <li className={'text-base text-white'}>
                  Decide whether to download the app within a Docker container
                  that’s ready for deployment or to deploy to the
                  Amplication&nbsp;cloud.
                </li>
                <li className={'text-base text-white'}>
                  At any point you’re free to download the source code and
                  continue development elsewhere.
                </li>
              </ul>
              <div className="spacer"></div>
              <Link
                href={'https://app.amplication.com'}
                passHref={true}
              >
                <a className="btn btn-primary btn-lg">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Developers
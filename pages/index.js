import { NextSeo } from 'next-seo';
import Image from 'next/image';

const MaintenancePage = () => {
  return (
    <>
      <NextSeo
        title="Amplication - Maintenance Mode"
        description="Amplication continues to support existing customers. Access documentation, sign in to your workspace, or explore the open-source project."
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://user-images.githubusercontent.com/53312820/190913686-02c7deb1-da2f-41b8-aa31-065e00f6155c.png',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <div className="min-h-screen w-full bg-black font-poppins text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-bright/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-turquoise/5 rounded-full blur-[150px] pointer-events-none" />

        <main className="relative z-10 max-w-[1152px] mx-auto px-6 py-12 laptop:py-20">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/amplication-logo-purple.svg"
              alt="Amplication"
              width={200}
              height={44}
              priority
            />
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl laptop:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text">
              A new chapter begins
            </h1>
            <p className="text-lg laptop:text-xl text-gray max-w-[800px] mx-auto">
              Amplication remains available for our community and existing customers. Meanwhile, the team is building the future of software development.
            </p>
          </div>

          {/* What's Next Section - Full Width (Overcut Theme) */}
          <div className="p-6 laptop:p-8 rounded-xl bg-[#262626] border border-[#d1f801]/30 mb-12 relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#d1f801]/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative flex flex-col laptop:flex-row laptop:items-center gap-6">
              <div className="flex items-center gap-4 flex-shrink-0">
                <Image
                  src="/images/overcut-logo.svg"
                  alt="Overcut"
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <h2 className="text-xl font-semibold text-white">What We&apos;re Building Next</h2>
              </div>
              <div className="flex-1">
                <p className="text-[#cfcfcf] text-sm laptop:text-base">
                  The team behind Amplication is now building <strong className="text-[#d1f801]">Overcut</strong> — a platform for agent-driven SDLC workflows, automation, and enterprise orchestration.
                </p>
              </div>
              <a
                href="https://overcut.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#d1f801] hover:bg-[#c4e801] text-[#191919] transition-all duration-200 font-semibold text-sm uppercase tracking-wide whitespace-nowrap hover:shadow-[0_0_4px_5px_rgba(143,188,26,0.4)]"
              >
                Explore Overcut
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three Cards Grid */}
          <div className="grid gap-6 mb-6 laptop:grid-cols-3">
            {/* Sign In Card */}
            <a
              href="https://app.amplication.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-dark-black-100/50 border border-dark-black-70 hover:border-turquoise/50 transition-all duration-300 hover:bg-dark-black-100/70"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise/20 transition-colors">
                  <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-turquoise transition-colors">Sign in to Amplication</h3>
                  <p className="text-lite text-sm mb-4">Log in to an existing workspace.</p>
                  <span className="text-turquoise text-sm font-medium flex items-center gap-1">
                    app.amplication.com
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            {/* Documentation Card */}
            <a
              href="https://docs.amplication.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-dark-black-100/50 border border-dark-black-70 hover:border-turquoise/50 transition-all duration-300 hover:bg-dark-black-100/70"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise/20 transition-colors">
                  <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-turquoise transition-colors">Documentation</h3>
                  <p className="text-lite text-sm mb-4">Access Amplication&apos;s documentation.</p>
                  <span className="text-turquoise text-sm font-medium flex items-center gap-1">
                    docs.amplication.com
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>



            {/* Open Source Card */}
            <a
              href="https://github.com/amplication/amplication"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-dark-black-100/50 border border-dark-black-70 hover:border-turquoise/50 transition-all duration-300 hover:bg-dark-black-100/70"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise/20 transition-colors">
                  <svg className="w-6 h-6 text-turquoise" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-turquoise transition-colors">Open Source</h3>
                  <p className="text-lite text-sm mb-4">Deploy locally, explore the codebase, or build on top of it.</p>
                  <span className="text-turquoise text-sm font-medium flex items-center gap-1">
                    github.com/amplication
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>



          {/* Footer */}
          <footer className="text-center text-gray text-sm pt-8 border-t border-dark-black-70">
            <p>Proudly supporting our community — and excited for what&apos;s next.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default MaintenancePage;

import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import ReactMarkdown from 'react-markdown';
import markdown from '../content/sla.md';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

const SlaPage = () => {
  return (
    <>
      <NextSeo
        title="SLA | Amplication"
        description="Amplication's Service Level Agreement (SLA) for Enterprise and Pro plans."
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base circles-bg">
        <section className="pt-4 pt-md-11 home-background">
          <div className="container mx-auto">
            <div className="p-4 row d-flex justify-content-between align-items-stretch policy-content-align">
              <div>
                <ReactMarkdown
                  className="blog-content"
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, rehypeHighlight]}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
SlaPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default SlaPage;

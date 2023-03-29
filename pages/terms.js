import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import ReactMarkdown from 'react-markdown';
import markdown from '../content/terms.md';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

const Terms = () => {
  return (
    <>
      <NextSeo
        title="Terms and Conditions | Amplication"
        description="Amplications Terms and Conditions. Please read the terms of use for our website. By accessing or using Amplications website, ​you agree to these terms."
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
Terms.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Terms;

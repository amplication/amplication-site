import Head from "next/head";

const DocumentHead = ({pageTitle, pageDescription}) => {
  return (
    <Head>
      <title>{pageTitle} - Amplication</title>
      <meta name='description' content={pageDescription}/>
      <link rel='icon' href='./public/images/favicon.ico'/>
    </Head>
  );
}

export default DocumentHead

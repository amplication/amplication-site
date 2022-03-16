import Head from "next/head";
import PropTypes from "prop-types";

const DocumentHead = ({pageTitle, pageDescription, pageImage}) => {
  return (
    <Head>
      <title>{pageTitle} - Amplication</title>
      <meta name='description' content={pageDescription}/>
      {pageImage &&
        <meta property="og:image" content={pageImage} />
      }
      <link rel='icon' href='/images/favicon.ico'/>
    </Head>
  );
}

DocumentHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
};

DocumentHead.defaultProps = {
  pageDescription: '',
  pageImage: '',
};

export default DocumentHead

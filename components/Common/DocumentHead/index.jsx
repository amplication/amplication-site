import Head from "next/head";
import PropTypes from "prop-types";

const DocumentHead = ({pageTitle, pageDescription}) => {
  return (
    <Head>
      <title>{pageTitle} - Amplication</title>
      <meta name='description' content={pageDescription}/>
      <link rel='icon' href='/images/favicon.ico'/>
    </Head>
  );
}

DocumentHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
};

DocumentHead.defaultProps = {
  pageDescription: '',
};

export default DocumentHead

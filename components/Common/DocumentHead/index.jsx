import Head from 'next/head';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';

const DocumentHead = ({pageTitle, pageDescription, pageImage}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{pageTitle}{router.pathname && router.pathname === '/' ? '' : ' - Amplication'}</title>
      <meta name='description' content={pageDescription}/>
      {pageImage &&
        <meta property='og:image' content={pageImage} />
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

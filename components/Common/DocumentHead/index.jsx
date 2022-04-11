import Head from 'next/head';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const DocumentHead = ({pageTitle, pageDescription, pageImage, isBlog}) => {
  const router = useRouter();

  return (
    <Head>
      <title>
        {pageTitle}{router.pathname && router.pathname === '/' ? '' : ' - Amplication'}
      </title>
      {pageImage &&
        <meta property='og:image' content={pageImage} />
      }
      <meta charSet="utf8" />
      <meta name='description' content={pageDescription}/>
      <link rel='icon' href='/images/favicon.ico'/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="robots" content="index,follow" />
    </Head>
  );
}

DocumentHead.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  isBlog: PropTypes.bool
};

DocumentHead.defaultProps = {
  pageDescription: '',
  pageImage: '',
  isBlog: false,
};

export default DocumentHead

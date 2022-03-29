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
      <meta name='description' content={pageDescription}/>
      <link rel='icon' href='/images/favicon.ico'/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="robots" content="index,follow" />
      {!isBlog &&
        <>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="/styles/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.1/lity.css" />
        </>
      }
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

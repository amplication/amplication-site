import DocumentHead from '../components/Common/DocumentHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CommunityHero from '../components/Sections/Community/Hero';
import CommunityContribute from '../components/Sections/Community/Contribute';
import CommunitySupport from '../components/Sections/Community/Support';
import CommunitySpread from '../components/Sections/Community/Spread';

const Community = () => {
  return (
    <>
      <DocumentHead
        pageTitle='Join our community & contribute to Amplication'
        pageDescription='Join us in building the next generation of development tools. Any contribution counts.'
        includeAssets={true}
      />

      <div className='page bg-dark-black-100 min-h-screen flex flex-col justify-start justify-items-stretch overflow-hidden pt-[60px] laptop:pt-[110px] bg-purple-dark relative'>
        <Header/>

        <main className='w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base'>
          <CommunityHero />

          <CommunityContribute />

          <div className='bg-gradient-community'>
            <CommunitySpread />
            <CommunitySupport />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Community;

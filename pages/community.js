import CommunityHero from '../components/Sections/Community/Hero'
import CommunityChampions from '../components/Sections/Community/Champions'
import CommunityContribute from '../components/Sections/Community/Contribute'
import CommunitySupport from '../components/Sections/Community/Support'
import CommunitySpread from '../components/Sections/Community/Spread'
import { NextSeo } from 'next-seo'
import { MainLayout } from '../layouts'

const Community = () => {
  return (
    <>
      <NextSeo
        title='Join our community & contribute to Amplication'
        description='Join us in building the next generation of development tools. Any contribution counts.'
      />
      <main className='w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base'>
        <CommunityHero />
        <CommunityContribute />
        <div className='bg-gradient-community'>
          <CommunitySpread />
          <CommunityChampions />
          <CommunitySupport />
        </div>
      </main>
    </>
  )
}
Community.getLayout = function getLayout(page) {
  return <MainLayout hideBackground>{page}</MainLayout>
}
export default Community

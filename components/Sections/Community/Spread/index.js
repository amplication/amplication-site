import Title from '../../../Posts/PostCard/Title';
import Link from 'next/link';
import Image from 'next/image';
import ImgGithubStars from '../../../../public/images/community/github-stars.svg';
import ImgSocial from '../../../../public/images/community/social.svg';

const Spread = () => {
  return (
    <section className='bg-transparent'>
      <div className='container-custom'>
        <div className='text-center align-items-center justify-content-center mb-5'>
          <Title level={2} className='h2'>Spread the word</Title>
          <div className='row'>
            <Title level={3} className='h3 col-12 col-lg-8 offset-lg-2 pr-4 pl-4'>
              Help us build the community by sharing Amplication with your
              colleagues and fellow developers.
            </Title>
          </div>
          <div className='action-panel-list build-community'>
            <div className='panel'>
              <Image src={ImgGithubStars} alt='GitHub' />
              <div className='bracket-box'>
                <span>Star</span>
                us on GitHub
              </div>
              <div className='description description-box-black10'>
                Checkout our repository on GitHub and don&apos;t forget to star us.
              </div>
              <div className='actions'>
                <Link href='https://github.com/amplication/amplication'>
                  <a target='_blank' className='btn btn-outline-secondary'>
                    Open the repo
                  </a>
                </Link>
              </div>
            </div>
            <div className='panel'>
              <Image src={ImgSocial} alt='Social' />
              <div className='bracket-box'>
                <span>Follow</span>
                us on social media
              </div>
              <div className='description description-box-black10'>
                Get the latest updates and news on Twitter and Facebook.
                Retweets, shares, and likes will help us
                spread&nbsp;the&nbsp;word.
              </div>
              <div className='actions'>
                <Link href='https://twitter.com/amplication'>
                  <a className='social-link twitter' target='_blank' title='Amplication on Twitter'>
                  </a>
                </Link>
                <Link href='https://www.facebook.com/amplicationcom/'>
                  <a className='social-link facebook' target='_blank' title='Amplication on Facebook'>
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/company/amplication'>
                  <a className='social-link linkedin' target='_blank' title='Amplication on LinkedIn'>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spread

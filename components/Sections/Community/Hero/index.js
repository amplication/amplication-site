import Title from '../../../Posts/PostCard/Title';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='page-hero bg-page-hero !-mt-8'>
      <div className='w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop'>
        <div className='row d-flex align-items-end align-items-lg-center'>
          <div className='col-12 col-lg-7'>
            <div className='hero-header'>
              <Title level={1} className='main-title'>We&apos;re better together.</Title>

              <Title level={3} className='h3 text-white my-4 line-clamp-0'>
                Join us in building the next generation of development tools.<br></br>
                Any contribution counts.
              </Title>
              <Link href='https://github.com/amplication/amplication'>
                <a className='btn btn-primary'>
                  <span className='social-link github social-white'> </span>
                  Get Involved
                </a>
              </Link>
            </div>
          </div>
          <div className='hero-bg col-12 offset-lg-1 col-lg-4'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import Image from 'next/image';
import Who1 from '../../../../public/images/about/who-1.svg';
import Who2 from '../../../../public/images/about/who-2.svg';
import Who3 from '../../../../public/images/about/who-3.svg';
import Who4 from '../../../../public/images/about/who-4.svg';
import What1 from '../../../../public/images/about/what-1.svg';
import What2 from '../../../../public/images/about/what-2.svg';
import What3 from '../../../../public/images/about/what-3.svg';
import What4 from '../../../../public/images/about/what-4.svg';
import Why1 from '../../../../public/images/about/why-1.svg';
import Why2 from '../../../../public/images/about/why-2.svg';
import Why3 from '../../../../public/images/about/why-3.svg';
import Why4 from '../../../../public/images/about/why-4.svg';
import {useState} from 'react';

const Steps = () => {
  const [activeTab, setActiveTab] = useState('data-models');
  const [fadingState, setFadingState] = useState(true);
  const animationDelay = 100;

  const tabHandler = function (event, value) {
    event.preventDefault();

    setFadingState(false);
    setActiveTab(value);
    setTimeout(fading, animationDelay);
  };
  const fading = function () {
    setFadingState(true);
  };

  return (
    <>
      <section className="background-transparent py-8">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box" data-aos="fade-up">
                <span>Who</span>we are?
              </div>
              <div className="feature-description text-base text-white max-w-[542px]" data-aos="fade-up" data-aos-delay="300">
                We are a group of creators who loves open-source, community and low-code. Our mission is to simplify application development, unlock frictionless developer experience and bring best practices to any developer in any organization. We believe this approach will shape the next-generation programming. Meet our team.
              </div>
            </div>
            <div className="col-sm-12 col-md-6 relative h-[430px]">
              <div className="absolute" data-aos="zoom-in" data-aos-delay="500"><Image src={Who1} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="700"><Image src={Who2} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="900"><Image src={Who3} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="1100"><Image src={Who4} alt={'github sync'} /></div>
            </div>
          </div>

          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box" data-aos="fade-up">
                <span>What</span> we do it?
              </div>
              <div className="feature-description text-base text-white max-w-[542px]" data-aos="fade-up" data-aos-delay="300">
                Our vision is to create one platform for Node.js app development that will empower professional developers in creating business applications and extend platform capabilities, with the open-source community's power of collaboration & transparency.
              </div>
            </div>
            <div className="col-sm-12 col-md-6 relative h-[430px]">
              <div className="absolute" data-aos="zoom-in" data-aos-delay="500"><Image src={What1} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="700"><Image src={What2} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="900"><Image src={What3} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="1100"><Image src={What4} alt={'github sync'} /></div>
            </div>
          </div>

          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box" data-aos="fade-up">
                <span>Why</span> we do it?
              </div>
              <div className="feature-description text-base text-white" data-aos="fade-up" data-aos-delay="300">
                As our platform is open-source, we are looking to create an ecosystem around the project, where you, the professional developers, will always have the freedom to fork and maintain the platform yourselves, with no vendor lock-in.
              </div>
            </div>
            <div className="col-sm-12 col-md-6 relative h-[430px]">
              <div className="absolute" data-aos="zoom-in" data-aos-delay="500"><Image src={Why1} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="700"><Image src={Why2} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="900"><Image src={Why3} alt={'github sync'} /></div>
              <div className="absolute" data-aos="zoom-in" data-aos-delay="1100"><Image src={Why4} alt={'github sync'} /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;

import Image from 'next/image';
import Link from 'next/link';
import DataModelsIcon from '../../../../public/images/steps/data-models.svg';
import Step1 from '../../../../public/images/steps/step-1.svg';
import Step2 from '../../../../public/images/steps/step-2.svg';
import Step3 from '../../../../public/images/steps/step-3.svg';
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
              <div className="bracket-box">
                <span>Who</span>we are?
              </div>
              <div className="feature-description text-base text-white max-w-[542px]">
                We are a group of creators who loves open-source, community and low-code. Our mission is to simplify application development, unlock frictionless developer experience and bring best practices to any developer in any organization. We believe this approach will shape the next-generation programming. Meet our team.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image src={Step1} alt={'github sync'} />
            </div>
          </div>

          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span>What</span> we do it?
              </div>
              <div className="feature-description text-base text-white max-w-[542px]">
                Our vision is to create one platform for Node.js app development that will empower professional developers in creating business applications and extend platform capabilities, with the open-source community's power of collaboration & transparency.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image src={Step2} alt={'github sync'} />
            </div>
          </div>

          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span>Why</span> we do it?
              </div>
              <div className="feature-description text-base text-white">
                As our platform is open-source, we are looking to create an ecosystem around the project, where you, the professional developers, will always have the freedom to fork and maintain the platform yourselves, with no vendor lock-in.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image src={Step3} alt={'rest api'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;

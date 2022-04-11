import Image from "next/image";
import Link from "next/link";
import DeployIcon from '../../../../public/images/steps/deploy.svg';
import DataModelsIcon from '../../../../public/images/steps/data-models.svg';
import RolesIcon from '../../../../public/images/steps/roles.svg';
import SyncWithGithubIcon from '../../../../public/images/steps/sync_with_github.svg';
import AdminUiIcon from '../../../../public/images/steps/admin-ui.svg';
import ConnectIcon from '../../../../public/images/steps/connect.svg';
import {useEffect, useState} from 'react';
import { useRouter, Router } from "next/router";

const Steps = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('data-models');
  const [fadingState, setFadingState] = useState(true);
  const animationDelay = 100;

  const tabHandler = function(event, value) {
    event.preventDefault();

    setFadingState(false);
    setActiveTab(value);
    setTimeout(fading, animationDelay);
  }
  const fading = function() {
    setFadingState(true);
  }

  return (
    <>
      <section className="page-steps">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row align-items-center justify-content-center mb-4">
            <h2 className="h2 text-center">How does it work?</h2>
          </div>

          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span>Design</span>
                models & roles
              </div>
              <div className="feature-description text-base text-white">
                Define data entities and role-based access through
                Amplication&apos;s UI or CLI, and Amplication will auto-generate
                your database, an Admin UI, and API.
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              data-aos="fade-up-left"
              style={{height: '620px'}}
            >
              <ul className="nav nav-tabs feature-images-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    href={'#data-models'}
                    passHref={true}
                  >
                    <a
                      className={`nav-link ${(activeTab === 'data-models' ? 'active' : '')}`}
                      onClick={(e) => {tabHandler(e, 'data-models')}}
                      aria-controls="data-models"
                      aria-selected="true"
                    >Data models</a
                    >
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    href={'#roles'}
                    passHref={true}
                  >
                    <a
                      className={`nav-link ${(activeTab === 'roles' ? 'active' : '')}`}
                      onClick={(e) => {tabHandler(e,'roles')}}
                      aria-controls="roles"
                      aria-selected="false"
                    >Roles</a
                    >
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${(activeTab === 'data-models' ? 'active' : '')} ${((fadingState && activeTab === 'data-models') ? 'show' : '')}`}
                  id="data-models"
                  role="tabpanel"
                  aria-labelledby="data-models-tab"
                >
                  <Image
                    src={DataModelsIcon}
                    alt={'data model design'}
                  />
                </div>
                <div
                  className={`tab-pane fade ${(activeTab === 'roles' ? 'active' : '')} ${((fadingState && activeTab === 'roles') ? 'show' : '')}`}
                  id="roles"
                  role="tabpanel"
                  aria-labelledby="roles-tab"
                >
                  <Image
                    src={RolesIcon}
                    alt={'assign roles'}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row feature d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-md-6 pr-3 order-md-2 pr-md-3 pl-lg-5">
              <div className="bracket-box">
                <span>Deploy</span> your app in one click
              </div>
              <div className="feature-description text-base text-white">
                Deploy your app to the Amplication cloud, or get a Docker
                container to deploy elsewhere.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-right">
              <Image
                src={DeployIcon}
                alt={'one click app deployment'}
              />
            </div>
          </div>
          <div
            className="row feature d-flex justify-content-between align-items-center"
          >
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box">
                <span>Sync</span> your app with GitHub
              </div>
              <div className="feature-description text-base text-white">
                Amplication syncs your app code into Node.js format to your GitHub
                repository so you can keep developing and custom code your app
                using your favorite IDE and the skills you have already mastered.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image
                src={SyncWithGithubIcon}
                alt={'github sync'}
              />
            </div>
          </div>
          <div
            className="row feature d-flex justify-content-between align-items-center"
          >
            <div className="col-sm-12 col-md-6 pr-3 order-md-2 pr-md-3 pl-lg-5">
              <div className="bracket-box">
                <span>Access</span> your app
              </div>
              <div className="feature-description text-base text-white">
                Our auto-generated admin UI based on your data model schema
                enables you to access your data with ease.
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image
                src={AdminUiIcon}
                alt={'admin ui'}
              />
            </div>
          </div>
          <div
            className="row feature d-flex justify-content-between align-items-center"
          >
            <div className="col-sm-12 col-md-6 pr-3">
              <div className="bracket-box no-bottom-margin"><span>Connect</span></div>
              <div className="bracket-box">your code using REST or GraphQL</div>
              <div className="feature-description text-base text-white">
                Start working with your API from any REST or GraphQL client
                (React, Angular, Vue, Flutter, iOS, Android, Go, Node.js, Python
                and more).
              </div>
            </div>
            <div className="col-sm-12 col-md-6" data-aos="fade-up-left">
              <Image
                src={ConnectIcon}
                alt={'rest api'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps
import Image from "next/image";
import Link from "next/link";
import OpenSourceIcon from '../../../../public/images/features/open_source_icon.svg';
import CodeGeneratorIcon from '../../../../public/images/features/Code_Generator_icon.svg';
import SyncWithGithubIcon from '../../../../public/images/features/sync_with_github.svg';
import VersionControlIcon from '../../../../public/images/features/Version_control_icon.svg';
import CustomCodeIcon from '../../../../public/images/features/custom_code_icon.svg';
import VendorLockIcon from '../../../../public/images/features/vendor_lock_icon.svg';
import DockerContainersIcon from '../../../../public/images/features/Docker_containers_icon.svg';
import RolesIcon from '../../../../public/images/features/Roles_icon.svg';
import AdminUiIcon from '../../../../public/images/features/admin_ui_icon.svg';
import SecurityAndPerformanceIcon from '../../../../public/images/features/Security_and_performance_icon.svg';
import CloudAgnosticIcon from '../../../../public/images/features/Cloud_agnostic_icon.svg';
import CommandLineInterfaceIcon from '../../../../public/images/features/command_line_interface_icon.svg';

const GetList = () => {
  return (
    <>
      <section className="bg-transparent">
        <div className="container-custom">
          <div className="row align-items-center justify-content-center mb-4">
            <h2 className="h2 text-center">What do you get?</h2>
          </div>
          <div className="features">
            <div className="col-12 pt-4 row d-flex justify-content-between align-items-start" id="features">
              <Link
                href={'/features#open-source'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="50"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={OpenSourceIcon}
                    alt={'open source'}
                  />
                  <div className="feature-card-text">Open&#8209;source project</div>
                </a>
              </Link>
              <Link
                href={'/features#custom-code'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="100"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={CodeGeneratorIcon}
                    alt={'code generator'}
                  />
                  <div className="feature-card-text">
                    TypeScript & Node.js source&nbsp;code
                  </div>
                </a>
              </Link>
              <Link
                href={'/features#sync-with-github'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="150"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={SyncWithGithubIcon}
                    alt={'Sync with GitHub'}
                  />
                  <div className="feature-card-text">Sync with GitHub</div>
                </a>
              </Link>
              <Link
                href={'/features#version-control'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="200"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={VersionControlIcon}
                    alt={'version control'}
                  />
                  <div className="feature-card-text">Version control</div>
                </a>
              </Link>
              <Link
                href={'/features#custom-code'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="250"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={CustomCodeIcon}
                    alt={'custom code'}
                  />
                  <div className="feature-card-text">Custom Code</div>
                </a>
              </Link>
              <Link
                href={'/features#code-generation'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="300"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={VendorLockIcon}
                    alt={'vendor lock'}
                  />
                  <div className="feature-card-text">
                    Freedom to continue on your&nbsp;own
                  </div>
                </a>
              </Link>
              <Link
                href={'/features#deployment'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="350"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={DockerContainersIcon}
                    alt={'docker container'}
                  />
                  <div className="feature-card-text">
                    Docker ready to be&nbsp;deployed
                  </div>
                </a>
              </Link>
              <Link
                href={'/features#identity-permissions'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="400"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={RolesIcon}
                    alt={'role based access control'}
                  />
                  <div className="feature-card-text">
                    Role&#8209;based access&nbsp;control
                  </div>
                </a>
              </Link>
              <Link
                href={'/features#admin-ui'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="450"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={AdminUiIcon}
                    alt={'admin ui cms'}
                  />
                  <div className="feature-card-text">React Admin UI</div>
                </a>
              </Link>
              <Link
                href={'/features#identity-permissions'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="500"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={SecurityAndPerformanceIcon}
                    alt={'security and performance'}
                  />
                  <div className="feature-card-text">Security & performance</div>
                </a>
              </Link>
              <Link
                href={'/features#deployment'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="550"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={CloudAgnosticIcon}
                    alt={'cloud agnostic'}
                  />
                  <div className="feature-card-text">Cloud agnostic</div>
                </a>
              </Link>
              <Link
                href={'/features#cli'}
                passHref={true}
              >
                <a
                  className="feature-card"
                  data-aos-delay="600"
                  data-aos-anchor="#features"
                >
                  <Image
                    src={CommandLineInterfaceIcon}
                    alt={'cloud agnostic'}
                  />
                  <div className="feature-card-text">Command Line Interface</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetList
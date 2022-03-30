import Image from "next/image";
import databaseIcon from '../../../../public/images/database.svg';
import githubIcon from '../../../../public/images/github.svg';
import dockerIcon from '../../../../public/images/docker.svg';

const Features = () => {
  const features = [
    {
      title: 'Database',
      icon: databaseIcon,
      content: 'Easily create data models and&nbsp;configure role&#8209;based\n' +
        '              access&nbsp;control with a simple and intuitive UI or CLI',
    },
    {
      title: 'GitHub',
      icon: githubIcon,
      content: 'Continuously push the generated application to your GitHub\n' +
        '              repository'
    },
    {
      title: 'Docker',
      icon: dockerIcon,
      content: 'Get a Docker container with your database, a Node.js application\n' +
        '              and a React client',
    }
  ];
  return (
    <>
      <section className="page-welcome-solution bg-transparent">
        <div className="container-custom">
          <div className="solution">
            {features.map((item, index) => {
              return (
                <div className="solution-card" key={index}>
                  <span className="solution-icon">
                    {item.icon &&
                      <Image
                        src={item.icon}
                        alt={item.title ?? ''}
                      />
                    }
                  </span>
                  <span className={'text-base text-white leading-6'} dangerouslySetInnerHTML={{__html: item.content}}></span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
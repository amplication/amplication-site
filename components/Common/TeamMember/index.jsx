import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

const TeamMember = ({ name, position, image, links }) => {
  return (
    <>
      <div className="team-member">
        {image && <Image src={image} alt={name} width={300} height={430} />}
        <div className="team-member__info">
          <div className="team-member__name">{name}</div>
          <div className="team-member__title">{position}</div>
          {links.length > 0 && (
            <div className="team-member__links">
              {links.map((link, index) => {
                return (
                  <Link href={link.href ?? ''} passHref={true} key={index}>
                    <a target="_blank" rel="noreferrer">
                      <span className={link.iconClass ?? ''}></span>
                    </a>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  image: PropTypes.object,
  buttons: PropTypes.array,
  links: PropTypes.array,
};

TeamMember.defaultProps = {
  name: '',
  position: '',
  image: {},
  buttons: [],
  links: [],
};

export default TeamMember;

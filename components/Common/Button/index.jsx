import PropTypes from 'prop-types';
import Link from "next/link";

// Background Colors
const ButtonColorsConfig = {
  purpleDark: 'bg-purple-dark',
  purpleBright: 'bg-purple-bright',
};

const Button = ({text, isAlignFull, backgroundColor, isLink, href }) => {
  let classes = 'flex justify-center items-center text-white font-poppins text-base font-normal text-center rounded py-2 px-5 laptop:px-8';
  classes += `${isAlignFull ? ' w-full' : ''}`;
  classes += ` ${ButtonColorsConfig[backgroundColor]}`;

  if (isLink) {
    return (
      <Link
        href={href}>
        <a className={classes}>
          {text}
        </a>
      </Link>
    )
  }
  return (
    <button className={classes}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isAlignFull: PropTypes.bool,
  backgroundColor: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string,
};

Button.defaultProps = {
  isAlignFull: false,
  backgroundColor: 'purpleDark',
  isLink: false,
  href: '',
};

export default Button

import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

// Background Colors
const ButtonColorsConfig = {
  purpleDark: 'bg-purple-dark hover:bg-purple-bright-hover',
  purpleBright: 'bg-purple-bright',
  purpleBrightHover: 'hover:bg-purple-bright-hover',
};

const Button = ({
  text,
  isAlignFull,
  backgroundColor,
  hoverBackgroundColor,
  isLink,
  href,
  onClick,
  className,
  delayLinkMs,
}) => {
  const router = useRouter();

  let classes =
    'flex justify-center items-center text-white font-poppins font-normal text-center rounded py-2 px-3 laptop:px-8 laptop:font-medium transition-all duration-300';
  classes += `${isAlignFull ? ' w-full' : ''}`;
  classes += ` ${ButtonColorsConfig[backgroundColor]}`;
  classes += ` ${ButtonColorsConfig[hoverBackgroundColor]}`;
  classes += ` ${className}`;

  const handleClick = useCallback(
    (e) => {
      onClick && onClick(e);

      if (delayLinkMs) {
        e.preventDefault();
        setTimeout(() => {
          console.log('href', href);
          router.push(href);
        }, delayLinkMs);
      }
    },
    [delayLinkMs, href, onClick, router],
  );

  if (isLink) {
    return (
      <Link href={href}>
        <a onClick={handleClick} className={classes}>
          {text}
        </a>
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isAlignFull: PropTypes.bool,
  backgroundColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  isLink: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  isAlignFull: false,
  backgroundColor: 'purpleDark',
  isLink: false,
  href: '',
  onClick: undefined,
  className: undefined,
};

export default Button;

import Link from "next/link";

const Button = ({text, isAlignFull = false, backgroundColor = 'purple-dark', isLink = false, href= '' }) => {
  let classes = 'flex justify-center items-center text-white font-poppins text-base font-normal text-center rounded py-2 px-5';
  classes += `${isAlignFull ? ' w-full' : ''}`;
  //classes += ` bg-[${backgroundColor}]`;
  classes += ` bg-purple-dark`;

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

export default Button
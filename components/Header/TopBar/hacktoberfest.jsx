import Link from 'next/link';

const HacktoberfestBar = () => {
  return (
    <div className="relative z-10 w-full bg-light-blue laptop:mb-[-1px]">
      <Link href="/hacktoberfest-2023">
        <a className="w-full flex justify-center text-center items-center max-w-container m-container p-container py-2 cursor-pointer hover:opacity-50 transition-opacity duration-300">
          Amplication is a proud sponsor of Hacktoberfest 2023. Click here to
          participate.
        </a>
      </Link>
    </div>
  );
};

export default HacktoberfestBar;

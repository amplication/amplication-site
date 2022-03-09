import Link from "next/link";

const CategoriesList = () => {
  return (
    <div className='w-full'>
      <h4 className='w-full text-white text-2xl font-poppins font-semibold text-left mb-4'>
        Categories
      </h4>
      <ul className='w-full flex flex-wrap justify-start items-center gap-x-1.5 gap-y-2'>
        <li>
          <Link href='/test'>
            <a className='text-white text-xs font-poppins font-medium py-1 px-2 border border-lite border-solid rounded-2xl bg-light-blue inline-block'>
              Company news
            </a>
          </Link>
        </li>
        <li>
          <Link href='/test'>
            <a className='text-white text-xs font-poppins font-medium py-1 px-2 border border-lite border-solid rounded-2xl bg-light-blue inline-block'>
              Could security
            </a>
          </Link>
        </li>
        <li>
          <Link href='/test'>
            <a className='text-white text-xs font-poppins font-medium py-1 px-2 border border-lite border-solid rounded-2xl bg-light-blue inline-block'>
              Open source projects
            </a>
          </Link>
        </li>
        <li>
          <Link href='/test'>
            <a className='text-white text-xs font-poppins font-medium py-1 px-2 border border-lite border-solid rounded-2xl bg-light-blue inline-block'>
              Open source projects
            </a>
          </Link>
        </li>
        <li>
          <Link href='/test'>
            <a className='text-white text-xs font-poppins font-medium py-1 px-2 border border-lite border-solid rounded-2xl bg-light-blue inline-block'>
              Task management
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default CategoriesList
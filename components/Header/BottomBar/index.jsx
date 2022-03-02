const BottomBar = () => {
  return (
    <div className='w-full bg-transparent laptop:bg-purple-dark'>
      <div className='w-full container-desktop-enlarged'>
        <span className='text-white font-ubuntumono text-xs text-center laptop:text-base py-3 px-4 laptop:py-2 bg-purple-bright inline-block rounded-b'>
          0.11.0
        </span>
      </div>
    </div>
  )
}

export default BottomBar;
import Link from "next/link";

const StartNow = () => {
  return (
      <>
        <section className="background-transparent w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop !pt-28 !pb-40">
          <h2 className="main-title text-center mx-auto !mb-12 !text-[50px] max-w-[960px]">Help us shape the best developer platform in the world</h2>
          <div className="d-flex justify-content-center align-items-center">
            <Link href={'https://discord.gg/Z2CG3rUFnu'} passHref={true} >
              <a target="_blank" className="btn btn-primary btn-sm w-[182px] !h-10 mr-3" rel="noreferrer">
                View careers
              </a>
            </Link>
            <Link href={'https://discord.gg/Z2CG3rUFnu'} passHref={true} >
              <a target="_blank" className="btn btn-outline-secondary btn-sm w-[182px] !h-10 ml-3 text-black80" rel="noreferrer">
                Join community
              </a>
            </Link>
          </div>
        </section>
      </>
  );
};

export default StartNow;

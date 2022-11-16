import Logo1 from '../../../../public/images/logotypes/logo-1.svg';
import Logo2 from '../../../../public/images/logotypes/logo-2.svg';
import Logo3 from '../../../../public/images/logotypes/logo-3.svg';
import Logo4 from '../../../../public/images/logotypes/logo-4.svg';
import Logo5 from '../../../../public/images/logotypes/logo-5.svg';
import Logo6 from '../../../../public/images/logotypes/logo-6.svg';
import Logo7 from '../../../../public/images/logotypes/logo-7.svg';
import Image from 'next/image';

const Slider = () => {
    return (
        <>
            <section className="features-page-feature !pt-24 !pb-20">
                <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
                    <h2 className="h2 text-center">Empowering developers from leading companies</h2>
                    <div className="mt-2 px-14 flex align-items-center">
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo1} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo2} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo3} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo4} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo5} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo6} alt="pull request" />
                        </div>
                        <div className="flex justify-content-center py-4 min-w-[197px] w-[14.2857%]">
                            <Image src={Logo7} alt="pull request" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Slider;

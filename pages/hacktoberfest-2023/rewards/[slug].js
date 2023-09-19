import { NextSeo } from 'next-seo';
import { MainLayout } from '../../../layouts';
import Hero from '../../../components/Sections/Hacktoberfest/Hero';
import PropTypes from 'prop-types';

const Plugins = ({ couponCode }) => {


    return (
        <>
            <NextSeo
                title="Plugins: Extend the generated code with plugins | Amplication"
                description="Extend and customize your services by using plugins for various technologies and integrations."
            />
            <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
                <Hero />
                <div className='relative align-items-center flex-col  w-full  flex '>

                    <a href={`https://app.amplication.com/login?coupon-code=${couponCode}`}>Redeem code</a>


                </div>
            </main >
        </>
    );
};


export const getServerSideProps = async (context) => {

    return {
        props: {
            couponCode: context.params.slug || ""
        },
    };
};


Plugins.propTypes = {
    couponCode: PropTypes.string,
};

Plugins.defaultProps = {
    couponCode: "",
};

Plugins.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export default Plugins;

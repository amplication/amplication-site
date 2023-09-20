import { NextSeo } from 'next-seo';
import PageSection from '../../../components/Common/PageSection';
import RedeemCoupon from '../../../components/Sections/Hacktoberfest/Hero/redeem-coupon';
import About from '../../../components/Sections/Hacktoberfest/Steps/about';
import HowTo1 from '../../../components/Sections/Hacktoberfest/Steps/how-to1';
import HowTo2 from '../../../components/Sections/Hacktoberfest/Steps/how-to2';
import HowTo3 from '../../../components/Sections/Hacktoberfest/Steps/how-to3';
import Win from '../../../components/Sections/Hacktoberfest/Steps/win';
import OpenSource from '../../../components/Sections/Hacktoberfest/Steps/open-source';
import PropTypes from 'prop-types';
import { MainLayout } from '../../../layouts';

const Reward = ({ couponCode }) => {


    return (
        <>
            <NextSeo
                title="Celebrate Open-source and Hacktoberfest 2023 with Amplication | Amplication"
                description="We're inviting you to experience the joy and learning that comes from contributing to open-source projects like Amplication. Win digital swag and additional major prizes."
            />
            <main className="font-jetbrains w-full z-10 ">
                <RedeemCoupon couponCode={couponCode} />
                <PageSection alternate >
                    <OpenSource />
                </PageSection>
                <PageSection  >
                    <About />
                </PageSection>
                <PageSection alternate >
                    <Win />
                </PageSection>
                <PageSection  >
                    <HowTo1 />
                </PageSection>
                <PageSection alternate >
                    <HowTo2 />
                </PageSection>
                <PageSection  >
                    <HowTo3 />
                </PageSection >
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


Reward.propTypes = {
    couponCode: PropTypes.string,
};

Reward.defaultProps = {
    couponCode: "",
};


Reward.getLayout = function getLayout(page) {
    return <MainLayout paddingTopClasses={"laptop:pt-[90px]"} hideFooterBanner={true} >{page}</MainLayout>;
};
export default Reward;

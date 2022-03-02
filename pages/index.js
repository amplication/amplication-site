import DocumentHead from '../components/Common/DocumentHead';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({posts, tags}) => (
  <>
    <DocumentHead
      pageTitle="Page Title"
      pageDescription="Page Description"/>

    <div className='page min-h-screen flex flex-col justify-start justify-items-stretch'>
      <Header />
      <Footer />
    </div>
  </>
);

export default Home
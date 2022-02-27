import DocumentHead from "./DocumentHead";
import TopBar from "./TopBar";

const Header = ({pageTitle, pageDescription}) => {
    return (
        <>
            <DocumentHead
                pageTitle={pageTitle}
                pageDescription={pageDescription}
            >
            </DocumentHead>
            <header>
                <TopBar/>
            </header>
        </>
    );
};

export default Header
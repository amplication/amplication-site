import Header from "../Header";
import Posts from "../Posts";

const Main = () => {
    return (
        <>
            <Header/>
            <main className={'w-full bg-dark-black-100'}>
                <Posts/>
            </main>
        </>
    )
}

export default Main

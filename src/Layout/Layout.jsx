import NavBar from "../component/NavBar/NavBar";

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
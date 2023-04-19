import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main className="App">
            <nav>Navbar</nav>
            <Outlet />
        </main>
    );
}

export default Layout;
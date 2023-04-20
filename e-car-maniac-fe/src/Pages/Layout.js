import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <main className="App">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">E-Car Maniac</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/get/list-all" class="nav-link" >Cars</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/add" class="nav-link" >Add a Car</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Coming Soon</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </main>
    );
}

export default Layout;
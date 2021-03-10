
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-custom">
            <div className="container-lg">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contents">Content</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    );
};

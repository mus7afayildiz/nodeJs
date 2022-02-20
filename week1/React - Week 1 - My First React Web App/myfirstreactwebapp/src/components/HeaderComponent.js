//Header component olusturulur ve export edilir
function HeaderComponent() {
    return (
        <div className="bg-primary">
            <div className="container text-white">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-4">LOGO</span>
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><a href="#" className="nav-link text-white fs-5">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white fs-5">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-white fs-5">Contact</a></li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default HeaderComponent;







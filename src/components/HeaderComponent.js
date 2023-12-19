const MysiteHeader = () => {
    return(
    <div class="site-header">
        <nav className="navbar navbar-expand bg-warning">
            <ul className="navbar-nav">
                <li className="nav-item"><img className="header-logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0"></img></li>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Cart Value</a></li>
            </ul>
        </nav>
    </div>
    )
};
export default MysiteHeader;
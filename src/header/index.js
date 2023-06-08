import { FiMenu } from "react-icons/fi";

const Header = () => {
    return <header className="header">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#">
            <img src={require("./img/omnifood-logo.png")} className="logo" alt="omnifood logo" />
        </a>

        <nav className="main-nav">
            <ul className="main-nav-list">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a className="main-nav-link" href="#">關於我們</a></li>
                <li><a className="main-nav-link" href="#meal">各式料理</a></li>
                <li><a className="main-nav-link" href="#testimonials">客戶推薦</a></li>
                <li><a className="main-nav-link" href="#pricing">方案</a></li>
                <li><a className="main-nav-link nav-cta" href="#cta">搶先體驗</a></li>
            </ul>
        </nav>
        <button className="btn-mobile-nav">
            <FiMenu size={25}/>
        </button>

    </header>
}

export default Header
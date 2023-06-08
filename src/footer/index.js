const Footer = () => {
    return <footer className="footer">
        <div className="container grid grid-footer ">
            <div className="logo-col">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="footer-logo">
                    <img src={require("./img/omnifood-logo.png")} className="logo" alt="omnifood logo"></img>
                </a>
                <ul className="social-links">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#"><ion-icon className="social-icon" name="logo-instagram"></ion-icon></a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#"><ion-icon className="social-icon" name="logo-facebook"></ion-icon></a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a href="#"><ion-icon className="social-icon" name="logo-twitter"></ion-icon></a></li>
                </ul>
                <p className="copyright">copyright &copy;2023 by Omnifood</p>
            </div>
            <div className="address-col">
                <p className="footer-heading">關於</p>
                <address className="contacts">
                    <p className="address">
                        地址：台中市南屯區黎明路一段250號
                    </p>
                    <p>
                        <a className="footer-link" href="tel:415-201-6370">415-201-6370</a><br /><br />
                        <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
                    </p>
                </address>
            </div>
            <nav className="nav-col">
                <p className="footer-heading">會員</p>
                <ul className="footer-nav">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">建立帳戶</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">登入</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">iOS應用程式</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">Android應用程式</a></li>
                </ul>
            </nav>
            <nav className="nav-col">
                <p className="footer-heading">企業</p>
                <ul className="footer-nav">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">關於Omnifood</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">企業專區</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">烹飪合作夥伴</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">職業機會</a></li>
                </ul>
            </nav>
            <nav className="nav-col">
                <p className="footer-heading">資源</p>
                <ul className="footer-nav">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">食譜目錄</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">幫助中心</a></li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <li><a className="footer-link" href="#">隱私權與條款</a></li>
                </ul>
            </nav>
        </div>
    </footer>
}
export default Footer
const Hero = () => {
    return  <section className="section-hero">
    <div className="hero">
        <div className="hero_text-box">
            <h1 className="heading-primary">
                健康每一天！<br />優質餐食直達你家門
            </h1>
            <p className="hero-description">
                智能的全年365天食物訂閱服務，讓你重新享受健康的飲食。根據你的個人口味和營養需求量身定制。
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn--full margin-right-sm">訂閱我們</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn--outline">了解更多</a>
            <div className="delivered-meals">
                <div className="delivered-imgs">
                    <img src={ require("../img/customers/customer-1.jpg")} alt="送餐人員"></img>
                    <img src={ require("../img/customers/customer-2.jpg")} alt="送餐人員"></img>
                    <img src={ require("../img/customers/customer-3.jpg")} alt="送餐人員"></img>
                    <img src={ require("../img/customers/customer-4.jpg")} alt="送餐人員"></img>
                    <img src={ require("../img/customers/customer-5.jpg")} alt="送餐人員"></img>
                    <img src={ require("../img/customers/customer-6.jpg")} alt="送餐人員"></img>
                </div>
                <p className="delivered-text">去年我們已經提供了超過<span>25,000+</span>次的服務！</p>
            </div>
        </div>

        <div className="hero-img-box">
            <img src={require("../img/hero.png")} className="hero-img" alt="女生吃東西"></img>
        </div>
    </div>
</section>

}

export default Hero
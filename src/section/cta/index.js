const Cta =()=>{
return  <section className="section-cta" id="cta">
<div className="container">
    <div className="cta">
        <div className="cta-text-box">
            <h2 className="heading-secondary">
                免費享用第一餐!
            </h2>
            <p className="cta-text">
                心動不如馬上行動，你還在等甚麼? 趕快加入我們吧!
            </p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <form className="cta-form" action="#">
                <div>
                    <label htmlFor="full-name">全名</label>
                    <input id="full-name" type="text" placeholder="Your name" required></input>
                </div>
                <div>
                    <label htmlFor="full-email">email</label>
                    <input id="full-email" type="email" placeholder="me@example.com" required></input>
                </div>
                <div>
                    <label htmlFor="select-where">從哪裡知道我們的?</label>
                    <select id="select-where" required>
                        <option value="">請選擇</option>
                        <option value="friends">朋友</option>
                        <option value="youtube">Youtube</option>
                        <option value="facebook">Facebook</option>
                        <option value="others">其他</option>
                    </select>
                </div>
                <button className="btn btn--form">立即訂餐</button>
            </form>
        </div>
        <div className="cta-img-box" role="img" aria-label="女生吃東西"></div>
    </div>
</div>
</section>
}
export default Cta
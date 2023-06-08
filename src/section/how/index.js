const How = () => {
return <section className="section-how">
        <div className="container">
            <span className="subheading">怎麼操作?</span>
            <h2 className="heading-secondary">三個簡單步驟，每天都帶來健康</h2>
        </div>
        <div className="container grid grid--2-cols grid--center-v">
            {/* <!-- 步驟1 --> */}
            <div className="step-text-box">
                <p className="step-number">01</p>
                <h3 className="heading-tertiary">告訴我們你喜歡什麼!
                </h3>
                <p className="step-description">
                    告訴我們你喜歡什麼（和不喜歡什麼）：永遠不要再浪費時間思考要吃什麼！
                    Omnifood的人工智能將為您創建一個100％個性化的每週膳食計劃。
                    它確保您獲得所需的所有營養和維生素，無論您遵循什麼飲食方式！
                </p>
            </div>

            <div className="step-img-box">
                <img src={require("../img/app/app-screen-1.png")} className="step-img" alt="第一步驟"></img>
            </div>

            {/* <!-- 步驟2 --> */}
            <div className="step-img-box">
                <img src={require("../img/app/app-screen-2.png")} className="step-img" alt="第二步驟"></img>
            </div>
            <div className="step-text-box">
                <p className="step-number">02</p>
                <h3 className="heading-tertiary">批准您的每週膳食計劃
                </h3>
                <p className="step-description">
                    每週一次，批准由Omnifood人工智能為您生成的膳食計劃。您可以更改食材，更換整餐，甚至添加您自己的食譜。
                </p>
            </div>
            {/* <!-- 步驟3 --> */}
            <div className="step-text-box">
                <p className="step-number">03</p>
                <h3 className="heading-tertiary">在方便的時間接收餐點
                </h3>
                <p className="step-description">
                    城市中最好的廚師每天為您烹飪選定的餐點，我們將按照您的要求將其遞送到您的門口。您可以每天更改交付時間表和地址！
                </p>
            </div>

            <div className="step-img-box">
                <img src={require("../img/app/app-screen-3.png")} className="step-img" alt="第三步驟"></img>
            </div>
        </div>
    </section>
}
export default How

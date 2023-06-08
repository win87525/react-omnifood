import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoMdInfinite } from "react-icons/io";
import { IoNutritionOutline } from "react-icons/io5";

const Pricing = () => {
    return <section className="section-pricing" id="pricing">
        <div className="container">
            <span className="subheading">兩種價格方案</span>
            <h2 className="heading-secondary">價格已包括所有方案。用戶可以隨時取消訂閱。</h2>
        </div>

        <div className="container grid grid--2-cols margin-bottom-md">
            <div className="pricing-plan pricing-plan--starter">
                <header className="plan-header">
                    <p className="plan-name">入門版</p>
                    <p className="plan-price"><span>$</span>2000</p>
                    <p className="plan-text">每天一餐只需要70元</p>
                </header>
                <ul className="list">
                    <li className="list-item">
                        <IoMdCheckmark color="#e67e22" size={30} /><span>每天<strong>1</strong>餐</span>
                    </li>
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>上午11點至晚上9點</span>
                    </li>
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>免費配送</span>
                    </li>
                    <li className="list-item"> <IoMdClose color="#e67e22" size={30} /><span></span>
                    </li>
                </ul>
                <div className="plan-sing-up">
                    <a href="" className="btn btn--full">現在就開始!</a>
                </div>
            </div>
            <div className="pricing-plan pricing-plan--complete">
                <header className="plan-header">
                    <p className="plan-name">完整版</p>
                    <p className="plan-price"><span>$</span>4500</p>
                    <p className="plan-text">每天兩餐只需要150元</p>
                </header>
                <ul className="list">
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>每天<strong>2</strong>餐</span>
                    </li>
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>全天候訂購</span>
                    </li>
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>免費配送</span>
                    </li>
                    <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>搶先獲得最新食譜</span>
                    </li>
                </ul>
                <div className="plan-sing-up">
                    <a href="" className="btn btn--full">現在就開始!</a>
                </div>
            </div>
        </div>


        <div className="container grid">
            <aside className="plan-details">
                已包含所有項目適用。您可以隨時取消。兩個方案都包括以下內容。
            </aside>
        </div>

        <div className="container grid grid--4-cols">
            <div className="feature">
                <div style={{ width: '50px', height: '50px' }}>
                    <IoMdInfinite color="#e67e22" size={50} />
                </div>
                <p className="feature-title">不用在自己做飯了</p>
                <p className="feature-text">我們的訂閱服務涵蓋全年365天，包括主要的假日。</p>
            </div>
            <div className="feature">
                <div style={{ width: '50px', height: '50px' }}>
                    <IoNutritionOutline color="#e67e22" size={50} />
                </div>
                <p className="feature-title">本地有機食材</p>
                <p className="feature-text">我們的廚師只使用當地、新鮮和有機的食材來準備您的餐點。</p>
            </div>
            <div className="feature">
                <IoMdCheckmark color="#e67e22" size={30} />
                <p className="feature-title"><strong>0</strong>浪費</p>
                <p className="feature-text">我們所有的合作夥伴都使用可重複使用的容器來包裝您的所有餐點。</p>
            </div>
            <div className="feature">
                <IoMdCheckmark color="#e67e22" size={30} />
                <p className="feature-title">隨時暫定</p>
                <p className="feature-text">有安排要去度假嗎？只需暫停您的訂閱，我們會退還未使用的天數。</p>
            </div>

        </div>
    </section>
}
export default Pricing
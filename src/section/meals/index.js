import { IoMdCheckmark } from "react-icons/io";
import { IoFlameOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const Meals =()=>{
return   <section className="section-meals" id="meal">
<div className="container center-text">
    <span className="subheading">示範餐點</span>
    <h2 className="heading-secondary">我們將從5,000+的食譜中進行選擇</h2>
</div>
<div className="container grid grid--3-cols margin-bottom-md">
    <div className="meal">
        <img src={require("../img/meals/meal-1.jpg")} className="meal-img" alt="餃子"></img>
        <div className="meal-content">
            <div className="meal-tags">
                <span className="tag tag--vegetarian">純素</span>
            </div>
            <p className="meal-title">日式餃子</p>
            <ul className="meal-attributes">
                <li className="meal-attribute">
                <IoFlameOutline className="list-icon" />
                    <span><strong>650</strong>卡路里</span>
                </li>
                <li className="meal-attribute">
                <IoRestaurantOutline className="list-icon"/>
                    <span>營養評分&reg;<strong>74</strong></span>
                </li>
                <li className="meal-attribute">
                <IoStarOutline className="list-icon" />
                    <span><strong>4.9</strong>評分 (357)</span>
                </li>
            </ul>
        </div>
    </div>

    <div className="meal">
        <img src={require("../img/meals/meal-2.jpg")} className="meal-img" alt="餃子"></img>
        <div className="meal-content">
            <div className="meal-tags">
                <span className="tag tag--vegetarian">純素</span>
                <span className="tag tag--paleo">原始食材</span>
            </div>
            <p className="meal-title">酪梨沙拉</p>
            <ul className="meal-attributes">
                <li className="meal-attribute">
                <IoFlameOutline className="list-icon" />
                    <span><strong>400</strong>卡路里</span>
                </li>
                <li className="meal-attribute">
                <IoRestaurantOutline className="list-icon" />
                    <span>營養評分&reg;<strong>92</strong></span>
                </li>
                <li className="meal-attribute">
                <IoStarOutline className="list-icon"/>
                    <span><strong>4.4</strong>評分 (441)</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="diets">
        <h3 className="heading-tertiary">適用任何飲食方式：</h3>
        <ul className="list">
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>素食主義者</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>純素主義者</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>食用魚類者</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>無麩質</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>無乳糖</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>生酮飲食</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>古法飲食</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>低FODMAP飲食</span></li>
            <li className="list-item"> <IoMdCheckmark color="#e67e22" size={30} /><span>適合兒童</span></li>
        </ul>
    </div>
</div>
<div className="container all-recipes">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="link">查看所有&rarr;</a>
</div>
</section>
}
export default Meals
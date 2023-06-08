const Testimonials = ()=>{
return  <section className="section-testimonials" id="testimonials">
<div className="testimonials-container">
    <span className="subheading">使用推薦</span>
    <h2 className="heading-secondary">只要你嘗試過了，就回不去!</h2>
    <div className="testimonials">
        <figure className="testimonial">
            <img src={require( "../img/customers/dave.jpg")} className="testimonial-img" alt=""></img>
            <blockquote className="testimonial-text">
                便宜、健康又美味的餐點，甚至不需要手動訂購！這感覺真的很神奇。
            </blockquote>
            <p className="testimonial-name">&mdash; 戴夫·布萊森</p>
        </figure>


        <figure className="testimonial">
            <img src={require( "../img/customers/ben.jpg")} className="testimonial-img" alt=""></img>
            <blockquote className="testimonial-text">
                這個AI算法真的太厲害了，它每次都能為我選擇到合適的餐點。不再需要擔心飲食問題真是太棒了！
            </blockquote>
            <p className="testimonial-name">&mdash; 本·哈德利</p>
        </figure>


        <figure className="testimonial">
            <img src={require( "../img/customers/steve.jpg")} className="testimonial-img" alt=""></img>
            <blockquote className="testimonial-text">
                他真是我的救星！我剛剛開始創業，所以沒有時間做飯。現在沒有他每天幫我準備的餐點我真的無法生活！
            </blockquote>
            <p className="testimonial-name">&mdash;史蒂夫·米勒</p>
        </figure>

        <figure className="testimonial">
            <img src={require( "../img/customers/hannah.jpg")} className="testimonial-img" alt=""></img>
            <blockquote className="testimonial-text">
                我為整個家庭都訂了，它不但節省了我們很多時間！而且所有的食物都是有機的、純素的，且不含塑料!
            </blockquote>
            <p className="testimonial-name">&mdash; 漢娜·史密斯</p>
        </figure>
    </div>
</div>
<div className="gallery">
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-1.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-2.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-3.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-4.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-5.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-6.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-7.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-8.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-9.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-10.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-11.jpg")} alt="食物照片"></img>
    </figure>
    <figure className="gallery-item">
        <img src={require("../img/gallery/gallery-12.jpg")} alt="食物照片"></img>
    </figure>
</div>
</section>
}
export default Testimonials
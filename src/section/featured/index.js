const Featured = () => {
return   <section className="section-featured">
<div className="container">
    <h2 className="heading-featured-in">AS FEATURED IN</h2>
    <div className="logos">
        <img src={require("../img/logos/techcrunch.png")} alt=""></img>
        <img src={require("../img/logos/business-insider.png")} alt=""></img>
        <img src={require("../img/logos/the-new-york-times.png")} alt=""></img>
        <img src={require("../img/logos/forbes.png")} alt=""></img>
        <img src={require("../img/logos/usa-today.png")} alt=""></img>
    </div>
</div>
</section>
}
export default Featured
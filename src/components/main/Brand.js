const path = process.env.PUBLIC_URL;

function Brand(){
    return(
        <section id="brand">
            <div class="brand__inner">
                <h1>LOREM IPSUM</h1>
                <div class="brand__wrap">
                    <article
                        class="brand__txt">
                            <i class="fas far fa-circle"></i>
                            <h2>LOREM IPSUM</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora velit tempore magnam ducimus soluta exercitationem.</p>
                            <a href="#">MORE</a>
                                        
                    </article>
                    <article class="brand__pic1">
                        <img src={path+"/img/brand.jpeg"} alt="브랜드 이미지1"/>
                    </article>
                    <article class="brand__pic2">
                        <img src={path+"/img/brand.jpeg"} alt="브랜드 이미지2"/>
                    </article>
                    <article class="brand__pic3">
                        <img src={path+"/img/brand.jpeg"} alt="브랜드 이미지3"/>
                    </article>
                </div>
            </div>
        </section>

    )
}
export default Brand;
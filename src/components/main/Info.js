const path = process.env.PUBLIC_URL;
//<img className="visualImage" alt="이미지" src={path+"/img/arch27.jpeg"} />
//<img src={path+"/img/pic.jpeg"} />

function Info() {
    return (
        <div id="info">
            <div class="info__inner">
                <div class="info__wrap">
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    <article>
                        <div class="pic">
                            <img src={path+"/img/pic.jpeg"} />
                        </div>
                    </article>
                    
                </div>
            </div>
        </div>
    )
}

export default Info;

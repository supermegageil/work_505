const path = process.env.PUBLIC_URL;


function Visual() {
    return (
        <figure id="visual">
            <img className="visualImage" alt="이미지" src={path+"/img/arch27.jpeg"} />
            <div className="blackbox">
                <div className="blackbox__inner">
                    <div className="yellowbox">Lorem, ipsum dolor.</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem itaque nam neque nobis necessitatibus aliquam quasi dignissimos accusantium quod suscipit.</p>
                </div>
            </div>
        </figure>
        

    )

}
export default Visual;

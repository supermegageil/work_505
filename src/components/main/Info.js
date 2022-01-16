const path = process.env.PUBLIC_URL;


function Info() {
    return (
        <figure id="info">
            <img className="infoImage" alt="이미지" src={path+"/img/arch5.jpeg"} />
        </figure>
        
    )
}

export default Info;

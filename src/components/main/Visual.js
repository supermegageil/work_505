const path = process.env.PUBLIC_URL;


function Visual() {
    return (
        <figure id="visual">
            <img className="visualImage" alt="이미지" src={path+"/img/arch27.jpeg"} />
        </figure>
        
    )
    
}
export default Visual;

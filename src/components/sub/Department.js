import { useEffect, useRef } from "react";
const path = process.env.PUBLIC_URL;

function Department(){

  return (
   <div id="department">
      <div className="department__inner">
        <h1>LOREM IPSUM</h1>
        <div class="department__wrap">
            <article>
                <div class="pic">
                <img src={path+"/img/team.jpeg"} />
                </div>
                <h2><a href="#">Lorem, ipsum.</a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2><a href="#">Lorem, ipsum.</a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2><a href="#">Lorem, ipsum.</a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </article>
            <article>
                <div class="pic">
                    <img src={path+"/img/team.jpeg"} />
                </div>
                <h2><a href="#">Lorem, ipsum.</a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Department;
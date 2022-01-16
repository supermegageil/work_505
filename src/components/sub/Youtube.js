import axios from 'axios';
import {useEffect, useState, useRef} from 'react';

function Youtube(){
  const frame = useRef(null);
  let [data, setData] = useState([]);
  let [isPop, setIsPop] = useState(false);
  let [index, setIndex] = useState(0);

  const api_key = "AIzaSyClmDMoUAOVqnfaM5m7fQa7Wrm9yJqBeZ8";
  const playListId ="PLLoUbL4kq1KiWN9_82ViMcIwwkT68RMdN";
  const num = 10;
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`; 

  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{    
        setData(json.data.items);        
      })
      frame.current.classList.add('on');
  },[]);

  return (
    <main className="youtube" ref={frame}>
      <div className="inner">
        <h1><a href="#">Youtube</a></h1>

        <section className="frame">
          {            
            data.map((item, index)=>{
              let tit = item.snippet.title;
              let tit_len = tit.length;
              let desc = item.snippet.description;
              let desc_len = desc.length;              

              return (
                <article key={index}>
                  <div className="inner">  
                    <div className="txt">
                      <h2>{(tit_len > 30) ? tit =  tit.substr(0,30)+"..." : tit}</h2>
                      <p>{(desc_len > 150) ? desc =  desc.substr(0,150)+"..." : desc}</p>
                    </div>
                    <div className="pic" onClick={()=>{
                      setIsPop(true);
                      setIndex(index);
                    }}>
                      <img src={item.snippet.thumbnails.medium.url} />                      
                    </div>
                  </div>
                </article>
              )
            })
          }
        </section>

        {isPop ? <Pop /> : null}
      </div>
    </main>
  )

  function Pop(){    
    return (
      <aside className="pop">
        <iframe 
          src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId}  width='100%' height='100%' allowFullScreen
        ></iframe>
        <span onClick={()=>{
          setIsPop(false);
        }}>close</span>
      </aside>
    )
  }
}

export default Youtube;
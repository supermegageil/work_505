
import axios from "axios";
import {useEffect, useState} from "react";

const body = document.querySelector("body");

function Gallery(){
    let [items, setItems] = useState([]);
    let [isPop, setIsPop] = useState(false);
    let [index, setIndex] = useState(0);


    const api_key="4f0c7aacc8689e7a16060a7f710cf848";
    const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=12&format=json&nojsoncallback=1`;

    useEffect(()=>{
        axios
          .get(url)
          .then(json=>{
            console.log(json);
            setItems(json.data.photos.photo);
          })
      },[]);

    return (
        <main className="gallery">
            <div className="inner">
                <h1><a href="#">Gallery</a></h1>

                <section className="">
                    {
                        items.map((item,index)=>{
                            const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`

                            return(
                                <article key={index}>
                                  <div className="inner">
                                    <div className="pic" onClick={()=>{setIsPop(true);

                                      setIndex(index);
                                      console.log(index);}}>
                                      <img src={imgSrc} />
                                    </div>
              
                                  <h2>{item.title}</h2>
                                </div>
                              </article>
                            )              
                          })
                        }
                      
                </section>
            </div>
            { isPop ? <Pop /> : null }
        </main>
    )
    function Pop(){
      const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

    useEffect(()=>{
      console.log("pop 생성")
      body.style.overflow = "hidden";

      return ()=>{
        console.log("pop 제거");
        body.style.overflow = "auto";
        }
      },[]);  

      return (
        <aside className="pop">
          <img src={imgSrc} />
          <p>{items[index].title}</p>
          <span onClick={()=>{
            setIsPop(false);
          }}>Close</span>
        </aside>
      )            
  }
}

export default Gallery;

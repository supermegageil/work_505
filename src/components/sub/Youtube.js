// My Play List Id: PLLoUbL4kq1KiWN9_82ViMcIwwkT68RMdN
// Youtube API KEY: AIzaSyClmDMoUAOVqnfaM5m7fQa7Wrm9yJqBeZ8 

import axios from 'axios';
import {useEffect, useState} from 'react';

function Youtube(){
    let [data, setData] = useState([]);

    const api_key = "AIzaSyClmDMoUAOVqnfaM5m7fQa7Wrm9yJqBeZ8";
    const playListId = "PLLoUbL4kq1KiWN9_82ViMcIwwkT68RMdN";
    const num = 4;
    const url =  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;

    useEffect(()=>{
        axios
            .get(url)
            .then(json=>{
                console.log(json.data.items);
                setData(json.data.items);
            })
        },[]);


    return (
        < main className="youtube">
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
                                        
                                        <h2>{(tit_len > 40) ? tit =  tit.substr(0,40)+"..." : tit}</h2>
                                        <p>{(desc_len > 150) ? desc =  desc.substr(0,150)+"..." : desc}</p>
                                        </div>
                                        < div className="pic">
                                            <img src={item.snippet.thumbnails.medium.url} />                      
                    
                                        </div>
                                    </div>
                                </article>    
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default Youtube;

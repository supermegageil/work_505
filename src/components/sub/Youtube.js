// My Play List Id: PLLoUbL4kq1KiWN9_82ViMcIwwkT68RMdN
// Youtube API KEY: AIzaSyClmDMoUAOVqnfaM5m7fQa7Wrm9yJqBeZ8 

import axios from 'axios';
import {useEffect, useState} from 'react';

function Youtube(){
    let [data, setData] = useState([]);

    const api_key = "AIzaSyClmDMoUAOVqnfaM5m7fQa7Wrm9yJqBeZ8";
    const playListId = "PLLoUbL4kq1KiWN9_82ViMcIwwkT68RMdN";
    const num = 3;
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
        <main>
            <div className="inner">
                <h1><a href="#">Youtube</a></h1>
            </div>
        </main>
    )
}

export default Youtube;

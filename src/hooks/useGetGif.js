import { useEffect, useState } from "react";
import { GifService } from "../services/data.service";

export const UseGetGif = (category) =>{
    let [state, setState] = useState({
        data: []
    })

    useEffect(()=>{
        GifService(category).then(imgs =>{
            setState({
                data: imgs
            })
        });

    },[category]);

    return state;
} 
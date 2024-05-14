import {useState, useEffect} from "react";
import axios from "axios";
import ArtworksTest from "../pages/artworks/Artworks";

export default function gettingArtworks(){

    const [works, getWorks] = useState('');
    const url = "localhost:7700/api/";

    useEffect(() => {
        getAllWorks();
    }, []);

    const getAllWorks = ()=> {
        axios.get('${url}/artworks')
             .then((resp)=>{
                 const allWorks = resp.data.artwork;
                 gettingArtworks(allWorks);
             })
        .catch(err=>console.error("error:"+err));
    }
        return(
            <ArtworksTest works={works}/>
        )

}
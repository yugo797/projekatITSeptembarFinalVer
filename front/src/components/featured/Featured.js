import React, {useEffect, useState} from "react";
import "./FeaturedStyle.css"
import {DataList} from "../../fetching/fetch_data";

const FeaturedWork = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const artworkData = await DataList("http://localhost:7700/api/artworks?featured=true");
                console.log("Podaci:", artworkData);
                setArtworks(artworkData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching artwork data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="featured">
            {loading ? (
                "Loading data"
            ) : (
                <>
                    {artworks.length > 0 ? (
                        <div className="featuredContainer">
                            <div className="featuredItem">
                                {artworks[0].picsURLs && artworks[0].picsURLs.length > 0 ? (
                                    <img src={artworks[0].picsURLs[0]} alt={artworks[0].name} className="featuredImg" />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className="featuredItem">
                                {artworks[1].picsURLs && artworks[1].picsURLs.length > 0 ? (
                                    <img src={artworks[1].picsURLs[0]} alt={artworks[1].name} className="featuredImg" />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>No artworks available</p>
                    )}

                    <div className="descriptionContainer">
                        {artworks.length > 0 && (
                            <>
                                <div className="featuredDesc">
                                    <div className="name">{artworks[1].name}</div>
                                    <div className="desc">{artworks[1].description}</div>
                                </div>
                                <div className="featuredDesc">
                                    <div className="name">{artworks[0].name}</div>
                                    <div className="desc">{artworks[0].description}</div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>

    );


};
export default FeaturedWork;

/*
const Featured = () =>{

    const data = ArtworkList("localhost:7700/api/artworks/byPeriod/Renaissance");
    console.log(data);

    return (
        <div className="featured">
            { !data ? ("loafing"):(
                <>
                    <div className="featuredContainer">

                        <div className="featuredItem">
                            <img src={data[0].picsURLs[0]} alt={data[0].name} className="featuredImg"/>
                        </div>

                        <div className="featuredItem">
                            <img src={data[1].picsURLs[0]} alt={data[1].name} className="featuredImg"/>
                        </div>

                    </div>


                    <div className="descriptionContainer">
                        <div className="featuredDesc">
                            <div className="name">{data[1].name}</div>
                            <div className="desc">{data[1].description}</div>
                        </div>
                        <div className="featuredDesc">
                            <div className="name">{data[0].name}</div>
                            <div className="desc">{data[1].description}</div>
                        </div>
                    </div>
                </>
                )
                 }
        </div>
    );
};

export default Featured;
*/

/*
<div className="featuredContainer">
                <div className="featuredItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Mikelandjelo" className="featuredImg"/>
                </div>

                <div className="featuredItem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="van gog" className="featuredImg"/>
                </div>

            </div>
            <div className="descriptionContainer">
                <div className="featuredDesc">
                    <div className="name">Name Placeholder</div>
                    <div className="desc">111111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quis metus eu iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae nunc et leo feugiat cursus. Suspendisse ultrices sagittis sem, nec porttitor massa varius sit amet. Proin semper ligula dolor, efficitur varius turpis posuere vitae. Donec nec.</div>
                </div>
                <div className="featuredDesc">
                    <div className="name">Name Placeholder</div>
                    <div className="desc">lorem ipsum dolor sinet 222222</div>
                </div>
            </div>
* */
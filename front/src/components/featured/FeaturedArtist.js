import React, {useEffect, useState} from "react";
import "./FeaturedStyle.css"
import {DataList} from "../../fetching/fetch_data";

const FeaturedArtist = () => {
    const [artists, setArtist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const artistData = await DataList("http://localhost:7700/api/artists?featured=true");
                console.log("Podaci:", artistData);
                setArtist(artistData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching artist data:', error);
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
                    {artists.length > 0 ? (
                        <div className="featuredContainer">
                            <div className="featuredItem">
                                {artists[0].picURL && artists[0].picURL.length > 0 ? (
                                    <img src={artists[0].picURL} alt={artists[0].name} className="featuredImg" />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <div className="featuredItem">
                                {artists[1].picURL && artists[1].picURL.length > 0 ? (
                                    <img src={artists[1].picURL} alt={artists[1].name} className="featuredImg" />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>No artworks available</p>
                    )}

                    <div className="descriptionContainer">
                        {artists.length > 0 && (
                            <>
                                <div className="featuredDesc">
                                    <div className="name">{artists[1].name}</div>
                                    <div className="desc">{artists[1].biography}</div>
                                </div>
                                <div className="featuredDesc">
                                    <div className="name">{artists[0].name}</div>
                                    <div className="desc">{artists[0].biography}</div>
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>

    );


};
export default FeaturedArtist;
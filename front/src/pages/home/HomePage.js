import "./HomeStyle.css";
import Navbar from "../../components/nav/Navbar";
import Header from "../../components/headrer/Header";
import Footer from "../../components/footer/Footer";
import {useEffect, useState} from "react";
import {DataList} from "../../fetching/fetch_data";
import _ from "lodash"
import {Link} from "react-router-dom";

const HomePage = () => {
    const [artworks, setArtworks] = useState([]);
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const artworksData = await DataList("http://localhost:7700/api/artworks/");
                const artistsData = await DataList("http://localhost:7700/api/artists/");

                setArtworks(artworksData);
                setArtists(artistsData);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching artwork data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const artwokCopy = artworks;
    const stistCopy = artists;
    const randArtworks = _.sampleSize(artwokCopy, 5);
    const randArtists = _.sampleSize(stistCopy, 5);

    return(<div className="all">
            <Navbar />

            <section className="artistsSection">
                <div className="sectionContainer">
                    <h2 className="sectionTitle">Featured Artists</h2>
                    <div className="artistGallery">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                {randArtists.map((artist, index) => (
                                    <div className="artistCard" key={index}>
                                        <img
                                            src={artist.picURL}
                                            alt={artist.name}
                                            className="artistImage"
                                        />
                                        <h3 className="artistName">{artist.name}</h3>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="artworksSection">
                <div className="sectionContainer">
                    <h2 className="sectionTitle">Featured Artworks</h2>
                    <div className="artworkGallery">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                {randArtworks.map((work, index) => (
                                    <div className="artworkCard" key={index}>
                                        <Link to={`/singleArtwork/${work._id}`} style={{color:"inherit", textDecoration:"none"}}>
                                            <img
                                                src={work.picsURLs[0]}
                                                alt={work.name}
                                                className="artworkImage"
                                            />
                                            <h3 className="artworkName">{work.name}</h3>
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
import React, {useEffect, useState} from "react";
import "./ArtistsStyle.css"
import Nav2 from "../../components/nav/Nav2";
import Footer from "../../components/footer/Footer";
import {DataList} from "../../fetching/fetch_data";
import FeaturedArtist from "../../components/featured/FeaturedArtist";
import ReactPaginate from "react-paginate";

const Artists = () =>{

    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

    //pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 9;


    useEffect(() => {
        async function fetchData() {
            try {
                const artistData = await DataList("http://localhost:7700/api/artists/");
                console.log("Podaci:", artistData);
                setArtists(artistData);
                setTotalPages(Math.ceil(artists.length / itemsPerPage));

                setLoading(false);
            } catch (error) {
                console.error('Error fetching artist data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const eIndex = startIndex + itemsPerPage;
    const subset = artists.slice(startIndex, eIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div className="artists">
            <Nav2 />
            <FeaturedArtist />
            <div className="divisionLine"></div>
            { loading?("loading"):(
            <>
                <div className="artistList">
                    {subset.map((artist, index)=>(
                        <div className="aListItem" key={index}>
                            <img src={artist.picURL} alt={artist.name} className="aListImg"/>
                            <div className="aListTitle">
                                <h2>{artist.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <ReactPaginate
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                    previousLabel={"←"}
                    nextLabel={"→"}
                    containerClassName={"pagination-container"}
                    activeClassName={"active-page"}
                />
            </>
            )

            }
            <Footer />
        </div>
    );
};
//→←
export default Artists;

/*
 <div className="artistList">
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Portrait_de_Picasso%2C_1908.jpg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://th-thumbnailer.cdn-si-edu.com/Po5QmgivJaemnKo8zX2Iv2JuzOc=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/1c/8b/1c8bd1a1-80e2-4beb-ad84-c26a84ad3769/dp152808.jpg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://sothebys-com.brightspotcdn.com/2f/ef/ead5e8f5441ca3a52746e989e7bc/salvador-dali-1.jpg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://i5.walmartimages.com/asr/d88a6c0f-fb83-4c0c-8234-7739472a7588.833e6d7b09ae34b7f8af3e99945dbff0.jpeg" alt="pablo" className="aListImg"/>
 </div>
 <div className="aListItem">
 <div className="aListTitle">
 <h2>Artist Name Placeholder</h2>
 </div>
 <img src="https://xdn.tf.rs//2020/07/09/440px-raffaellosanzio-830x0.jpg" alt="pablo" className="aListImg"/>
 </div>
 </div>
 */


/*
<div className="featuredArtistsContainer">
                <div className="featuredArtist">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="Mikelandjelo" className="featuredImg"/>
                </div>

                <div className="featuredArtist">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="van gog" className="featuredImg"/>
                </div>

            </div>
            <div className="descriptionContainer">
                <div className="featuredDesc">lorem ipsum dolor sinet 111111</div>
                <div className="featuredDesc">lorem ipsum dolor sinet 222222</div>
            </div>
*/
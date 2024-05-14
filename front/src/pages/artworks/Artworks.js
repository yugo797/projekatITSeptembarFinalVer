import React, {useEffect, useState} from "react";
import "./ArtworksStyle.css";
import Nav2 from "../../components/nav/Nav2";
import Footer from "../../components/footer/Footer";
import {DataList} from "../../fetching/fetch_data";
import FeaturedWork from "../../components/featured/Featured";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

const Artworks = () =>{

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    //pgn
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        async function fetchData() {
            try {
                const artworksData = await DataList("http://localhost:7700/api/artworks/");

                setArtworks(artworksData);

                setTotalPages(Math.ceil(artworks.length / itemsPerPage));

                setLoading(false);
            } catch (error) {
                console.error('Error fetching artwork data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const eIndex = startIndex + itemsPerPage;
    const subset = artworks.slice(startIndex, eIndex);

    const handlePageChange = async (selectedPage) => {
        await setCurrentPage(selectedPage.selected);
    };

    return (
        <div className="artworks">
            <Nav2 />
            <FeaturedWork />

            <div className="divisionLine"></div>

            {loading?("loading"):(
                <>
                <div className="artworksList">

                    {
                        subset.map((artwork, index)=>(
                        <div className="atListItem" key={index}>
                            <Link to={`/singleArtwork/${artwork._id}`}>
                            <img src={artwork.picsURLs[0]} alt={artwork.name} className="atListImg"/>
                            <div className="atListTitle">
                                <h2>{artwork.name}</h2>
                            </div>
                            </Link>
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
            )}

            <Footer />
        </div>
    );
};

export default Artworks;

/*
<div className="artworksList">
                <div className="atListItem">
                    <img src="https://media.posterlounge.com/img/products/480000/474874/474874_poster.jpg" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
                <div className="atListItem">
                    <img src="https://cdn.shopify.com/s/files/1/0849/4704/files/First-image_Fb-size_grande.jpg?10773543754915177139" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
                <div className="atListItem">
                    <img src="https://imgix.ranker.com/node_img/1117/22320903/original/the-desperate-man-self-portrait-artwork-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
                <div className="atListItem">
                    <img src="https://dreamsinparis.com/wp-content/uploads/2022/05/Eugene-Delacroix-self-portrait-771x1024.jpg" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
                <div className="atListItem">
                    <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/the-meaning-of-art-square-brackets-serge-averbukh.jpg" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
                <div className="atListItem">
                    <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/the-meaning-of-art-square-brackets-serge-averbukh.jpg" alt="pablo" className="atListImg"/>
                    <div className="atListTitle">
                        <h2>Painting Name Placeholder</h2>
                    </div>
                </div>
            </div>
 */
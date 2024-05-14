import {Link} from "react-router-dom";

const SearchResult = ({ searchItem }) => {
    return (
        <div className="resultContainer">
            <img src={searchItem.picsURLs[0]} alt={searchItem.name} style={{width:100, height:110} }/>
        <>
            <Link to={`/singleArtwork/${searchItem._id}`}>
                <button> SSSSSSSSSignulat </button>
            </Link>
        </>

        </div>
    );
};

export default SearchResult;
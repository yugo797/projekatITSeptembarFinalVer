import React, {useEffect, useState} from "react";
import "./NavbarStyle.css";
import {Link} from "react-router-dom";
import SearchResult from "../../pages/searchedpages/SearchResultPG";
import {DataList} from "../../fetching/fetch_data";
const Navbar = () => {


    const [inputValue, setInputValue] = useState('')
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState([]);


    async function fetchData() {
        try {
            //?name=${inputValue}
            const artworksData = await DataList(`http://localhost:7700/api/artworks/`);

            const fin = inputValue.toLowerCase()

            const finData = artworksData.filter(
                work => work.name.toLowerCase().includes(fin) || work.author.toLowerCase().includes(fin)
            );

            setSearchItem(finData);
            setLoading(false);

            console.log(finData);

        } catch (error) {
            console.error('Error fetching search:', error);
            setLoading(false);
        }
    }

    async function handleClick() {
        if(inputValue){
            try {
                await fetchData();
            } catch (error) {
                console.error('Error fetching artwork data in search:', error);
            }
        } else {

        }
    }

    return (
        <div className="navbar">
            <div className="navContainer">

                <div className="navList">

                    <div className="navListItem">
                        <Link to="/artists" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                                Artists
                            </span>
                        </Link>
                    </div>

                    <div className="navListItem">
                        <Link to="/artworks" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                                Artworks
                            </span>
                        </Link>
                    </div>
                    <div className="navListItem">
                        <Link to="/periods" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                                Periods
                            </span>
                        </Link>
                    </div>

                    <div className="navListItem navSearch">
                        <input type="text"
                               placeholder="Know what you're looking for?"
                               onChange={(e) => setInputValue(e.target.value)}
                               className="navSearchInput"/>
                        <button className="navSrcButton" onClick={handleClick}>Search</button>
                    </div>
                </div>
            </div>
            <div className="srcCony">
                {loading?(""):(
                <>
                    {searchItem.map((item=>(
                        <SearchResult key = {item._id} searchItem={item} />
                    )))
                    }
                </>
                )
                }
            </div>
        </div>
    );
}
export default Navbar;
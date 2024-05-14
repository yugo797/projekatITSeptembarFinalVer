import {useLocation} from "react-router-dom";
import {DataList} from "../../fetching/fetch_data";
import {useEffect, useState} from "react";
import "./SingleArtworkSTyle.css";

const SingleWork = () => {

    const location = useLocation();
    const path = location.pathname;
    const id = path.split("/")[2];

    const [loading, setLoading] = useState(true);
    const [itemData, setData] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const artworkData = await DataList(`http://localhost:7700/api/artworks/find/${id}`);
                setData(artworkData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching artwork data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="singleWorkContainer">
            {loading?("loading"): (
              <>
                  <h2 className="workName">{itemData.name}</h2>
                  <img src={itemData.picsURLs[0]} alt={itemData.name} className="workImage"/>
                  <h2 className="workAuthor">{itemData.author}</h2>
                  <h2 className="workPeriod">{itemData.period}</h2>
                  <div className="workDescription">{itemData.description}</div>

              </>
          )}
        </div>
    );
};
export default SingleWork;

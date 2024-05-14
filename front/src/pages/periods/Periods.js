import React, {useEffect, useState} from "react";
import "./PeriodsStyle.css";
import Nav2 from "../../components/nav/Nav2";
import {DataList} from "../../fetching/fetch_data";

const Periods = () =>{

    const [periods, setPeriods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const periodData = await DataList("http://localhost:7700/api/periods/");
                console.log("Podaci:", periodData);
                setPeriods(periodData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching periods data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);


    return (
        <div className="periods">
            <Nav2 />
            <div className="periodsContainer">

                {loading?("loading"):(
                    <>
                        {periods.map((period, index)=>(
                            <div className="periodName" key={index}>
                                <h2>{period.name}</h2>
                                <h4>{period.span}</h4>
                                <div className="notableArtworks">
                                    <img src={period.representativeWorks[0]} alt="pic" className="representativeImage"/>
                                    <img src={period.representativeWorks[1]} alt="pic" className="representativeImage"/>
                                    <img src={period.representativeWorks[2]} alt="pic" className="representativeImage"/>
                                </div>
                            </div>
                            )
                        )}
                    </>
                )
                }

            </div>
        </div>
    );
};

export default Periods;

/*
<div className="periodName">
                    <h2>Periodt Name</h2>
                    <div className="notableArtworks">
                        <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/the-meaning-of-art-square-brackets-serge-averbukh.jpg" alt="pic" className="representativeImage"/>
                        <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/the-meaning-of-art-square-brackets-serge-averbukh.jpg" alt="pic" className="representativeImage"/>
                        <img src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/the-meaning-of-art-square-brackets-serge-averbukh.jpg" alt="pic" className="representativeImage"/>
                    </div>
                </div>
 */
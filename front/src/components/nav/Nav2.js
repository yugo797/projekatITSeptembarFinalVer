import React from "react";
import "./Nav2Style.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBrush, faClock, faIgloo, faUserPen} from "@fortawesome/free-solid-svg-icons";


const Nav2 = () => {
    return (
        <div className="nav2">
            <div className="nav2Container">

                <div className="nav2List">

                    <div className="nav2ListItem">
                        <Link to="/artists" style={{color:"inherit", textDecoration:"none"}}>
                             <span>
                                 <FontAwesomeIcon icon={faUserPen} style={{color: "#ffffff",}} className="icon"/>
                                 Artists
                             </span>
                        </Link>
                    </div>

                    <div className="nav2ListItem">
                        <Link to="/artworks" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                                <FontAwesomeIcon icon={faBrush} style={{color: "#ffffff",}} className="icon"/>
                                Artworks
                            </span>
                        </Link>
                    </div>

                    <div className="nav2ListItem">
                        <Link to="/periods" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                                <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} className="icon"/>
                                Periods
                            </span>
                        </Link>
                    </div>

                    <div className="nav2ListItem">
                        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                            <span>
                            <FontAwesomeIcon icon={faIgloo} style={{color: "#ffffff",}} className="icon"/>
                            Home
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nav2;
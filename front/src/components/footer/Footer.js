import React from "react";
import "./FooterStyle.css"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="fLists">
                <ul className="fListElems">
                    <li className="listItem"> About us </li>
                    <li className="listItem"> Phone contact </li>
                    <li className="listItem"> E-mail contact </li>
                </ul>
                <ul className="fListElems">
                    <Link to="/artworks" style={{color:"inherit", textDecoration:"none"}}>
                        <li className="listItem"> Browse all artworks </li>
                    </Link>
                    <Link to="/artists" style={{color:"inherit", textDecoration:"none"}}>
                        <li className="listItem"> Browse by artists </li>
                    </Link>
                    <Link to="/periods" style={{color:"inherit", textDecoration:"none"}}>
                        <li className="listItem"> Browse by periods </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
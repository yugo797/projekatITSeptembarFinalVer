import "./HeaderStyle.css";
import React from "react";
import {Link, useNavigate} from "react-router-dom";

const Header = ({isLoggedIn, setIsLoggedIn, isAdmin}) =>{
const navigate = useNavigate();
    function navReg(){
        navigate('/register')
    }
    function navLog(){
        navigate('/login')
    }
    function navSub(){
        navigate('/submit')
    }
    function logOut(){
        setIsLoggedIn(false);
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">Home Page</span>
                </Link>
                <div className="headerItems">
                    {!isLoggedIn?(
                      <>
                        <button className="headerButton" onClick={navReg} >Register User</button>
                        <button className="headerButton" onClick={navLog}>Login User</button>
                      </>
                    ):(
                    <>
                        {isAdmin && (
                            <Link to="/admin" style={{ color: "inherit", textDecoration: "none" }}>
                                <button className="headerButton">Admin Panel</button>
                            </Link>
                        )}
                        <button className="headerButton" onClick={navSub}>Submit</button>
                        <button className="headerButton" onClick={logOut}>Log out</button>
                    </>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Header;
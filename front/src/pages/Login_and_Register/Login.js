import "./LoginStyle.css";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({setIsLoggedIn, setIsAdmin, setToken}) => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(null);
   const handleClick = async (e)=>{
        e.preventDefault();
       try{
           const resp = await axios.post("http://localhost:7700/api/auth/login", {
               username,
               password,
           });

           if(resp.status===200){
               console.log("logged in");
               setIsLoggedIn(true);
               if (resp.data.autorizovan){
                   setIsAdmin(true);
                   setToken(resp.data.token);
               }
               else{
                setIsAdmin(false)
               }
               navigate('/')
           }

       } catch (err){
           setIsLoggedIn(false);
           setIsAdmin(false)
           console.error("nope", err);
           setErr(err);
       }

    }

    return(
        <div className="login">
            <div className="loginContainer">
                <form id="loginForm">
                    <h2>User Log In</h2>

                    <label htmlFor="username">Username</label>
                    <input type="text"
                           placeholder="Enter your username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           placeholder="Enter your password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="buttons" onClick={handleClick}>Log in</button>


                </form>
            </div>
            {err && <span id="errMsg">{err.message}</span>}
        </div>
    );
}

export default Login;

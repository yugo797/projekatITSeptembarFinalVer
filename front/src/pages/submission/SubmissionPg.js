import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./SubmissionStyle.css"

const SubmissionPg = () => {


    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [period, setPeriod] = useState("");
    const [picsURLs, setPicsURLs] = useState([]);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function handleURLinput(e){
        const inputText = e.target.value;
        const urlsArray = inputText.split(",").map((url) => url.trim());
        setPicsURLs(urlsArray);
    }
    async function handleClick(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7700/api/artworks/", {
                name,
                author,
                period,
                picsURLs,
                description,
            });

            if (response.status === 200) {

                console.log("successful post");
                navigate(`/singleArtwork/${response.data._id}`)
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }

    return (
        <div className="submissionContainer">
            <form className="subForm">

                <h2>Artwork Submission Form</h2>

                <label htmlFor="name">Artwork name</label>
                <input type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="author">Artwork author</label>
                <input type="text"
                       value={author}
                       onChange={(e)=>setAuthor(e.target.value)}
                />
                <label htmlFor="period">Artwork period</label>
                <input type="text"
                       value={period}
                       onChange={(e) => setPeriod(e.target.value)}
                />
                <label htmlFor="urls">URLs [Separate by ,]</label>
                <input type="text"
                       value={picsURLs.join(",")}
                       onChange={handleURLinput}
                />
                <label htmlFor="description">Artwork description</label>
                <input type="text"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                />

                <button className="buttons" onClick={handleClick}>Submit</button>


            </form>
        </div>
    )
}
export default SubmissionPg;
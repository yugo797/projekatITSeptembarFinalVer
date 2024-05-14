import axios from "axios";

export async function DataList(url) {
    try{
        const response = await axios.get(url);
        return response.data;
    }catch(err){
        throw(err);
    }
}

/*
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url);
                setData(res.data)
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    const fetchAgain = async () => {

        setLoading(true);
        try {
            const res = await axios.get(url);
            setData((res).data)
        } catch (err) {
            setError(err);
        }
        setLoading(false);
        };

    return {data, loading, error, fetchAgain};
}

export default useFetch;*/

import axios from "axios";
import { useEffect, useState } from "react"

const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
     const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
     };
     
     getData();
    }, [url]);
    
    return {data, isLoading, error};
}

export default useFetchData;
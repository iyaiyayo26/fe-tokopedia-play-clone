import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Input, InputGroup, InputRightElement, SimpleGrid} from '@chakra-ui/react'
import VideoCard from "../Component/VideoCard";
import { useNavigate } from "react-router-dom";
import LoadingMessage from "../Component/LoadingMessage";
import ErrorMessage from "../Component/ErrorMessage";

const Videos = () => {
    const [brand, setBrand] = useState('');
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const url_videos = 'https://be-tokopedia-play-clone-production.up.railway.app/api/videos';

    useEffect(() => {
        getVideos();
    }, [url_videos]);

    const getVideos = async () => {
        try {
            const response = await axios.get(url_videos);
            setVideos(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    const searchBrand = async () => {
        try {
            const response = await axios.get(`https://be-tokopedia-play-clone-production.up.railway.app/api/search?brand=${brand}`);
            setVideos(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    if(isLoading){
        return <LoadingMessage />
    }
    
    if(error){
        return <ErrorMessage errorMessage={error.message}/>
    }

    return(
        <>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Search brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' backgroundColor={'#48BB78'} onClick={searchBrand}>Search</Button>
                </InputRightElement>
            </InputGroup>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mt={10}>
                {
                    videos.map(vid => (
                        <VideoCard
                            key={vid._id} 
                            img_url={vid.image_url}
                            brand={vid.brand}
                            description={vid.description}
                            onClick={() => navigate(`/video/${vid._id}`)}
                        />
                    ))
                }
            </SimpleGrid>
        </>
    )
}

export default Videos;
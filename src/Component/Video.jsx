import { Box } from "@chakra-ui/react";
import useFetchData from "../Hooks/useFetchData";
import LoadingMessage from "./LoadingMessage";
import ErrorMessage from "./ErrorMessage";

const Video = ({videoId}) => {
    const video_url = 'https://be-tokopedia-play-clone-production.up.railway.app/api/videos';
    
    const {data, isLoading, error} = useFetchData(video_url);

    if(isLoading){
        return <LoadingMessage />
    }
    
    if(error){
        return <ErrorMessage errorMessage={error.message}/>
    }
    return(
        <>
            {
                data.map(d => (
                    d._id === videoId && (
                        <Box key={d._id} >
                        <iframe width="560"height="315" src={d.video_url}  title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> 
                        </Box>
                    )
                ))
            }
            
        </>
    )
}

export default Video;
import { Box, Card, Heading } from "@chakra-ui/react";
import useFetchData from "../Hooks/useFetchData";

const Video = ({videoId}) => {
    const video_url = 'http://localhost:5000/api/videos';
    
    const {data, isLoading, error} = useFetchData(video_url);

    if(isLoading){
        return(
            <Heading size='xl'>Loading...</Heading>
        )
    }
    
    if(error){
            return(
                <Card align='center'>
                    <Heading size='xl'>Error: {error.message}</Heading>
                </Card>
            )
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
import { Box, Grid, GridItem} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CommentForm from "../Component/CommentForm";
import ProductList from "../Component/ProductList";
import Video from "../Component/Video";

const VideoDetail = () => {
    let { videoId } = useParams();

    return(
        <>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} marginLeft={30} marginTop={30} marginBottom={30} marginRight={30}>
                <GridItem w='100%' >
                    {/*nampilin produk  */}
                    <ProductList 
                        videoId={videoId}
                    />
                </GridItem>
                <GridItem w='95%' h='500' >
                    {/* watch video */}
                    <Video videoId={videoId}/>
                    <Box marginTop={8} >
                        <CommentForm 
                            videoId={videoId}
                        />
                    </Box>
                </GridItem>
            </Grid>
            
        </>

    )
}

export default VideoDetail;
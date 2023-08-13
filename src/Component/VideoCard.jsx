import { Button, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";


const VideoCard = ({img_url, brand, description, onClick}) => {
    
    return(
        <Card maxW='sm' >
            <CardBody>
                <Image
                src={img_url}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                /> 
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{brand}</Heading>
                    <Text>{description}</Text>
                <Button backgroundColor={'#48BB78'} onClick={onClick}>watch</Button>
                </Stack>
            </CardBody> 
        </Card>
    )
}

export default VideoCard;
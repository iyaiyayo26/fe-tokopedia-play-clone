import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return(
        <Card align='center'>
            <CardHeader>
                <Heading size='xl'>404</Heading>
            </CardHeader>
            <CardBody>
                <Heading size='xl'>Page Not Found</Heading>
            </CardBody>
            <CardFooter>
                <Button backgroundColor={'#48BB78'} onClick={() => navigate('/')}>Back to Home</Button>
            </CardFooter>
        </Card>
    )
}

export default NotFound;
import { Card, Heading } from "@chakra-ui/react"

const ErrorMessage = ({errorMessage}) => {
    return(
        <Card align='center'>
            <Heading size='xl'>Error: {errorMessage}</Heading>
        </Card>
    )
}

export default ErrorMessage;
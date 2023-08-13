import { Card, CardBody, Text } from "@chakra-ui/react";

const CommentList = ({username, comment, timestamp}) => {
    return(
        <Card variant={'filled'}>
            <CardBody>
                <Text><strong>{username}: </strong>{comment}</Text>
                <Text>{timestamp}</Text>                   
            </CardBody>
        </Card>
    )
}

export default CommentList;
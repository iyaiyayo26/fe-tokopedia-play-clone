import { Button, Card, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const CommentForm = ({videoId}) => {
    const endpoint = 'https://be-tokopedia-play-clone-production.up.railway.app/api/comment/'

    const [data, setData] = useState({
        username: '',
        comment: ''
    })
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const toast = useToast();

    useEffect(() => {
        getComments();
    },[data]);

    const handle = (e) => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    if(error){
        return alert(error.message);
    }
     
    const submitComment = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${endpoint}${videoId}`, {
                username: data.username,
                comment: data.comment
            });
            setData({
                username: '',
                comment: ''
            })
            
        } catch (error) {
            setError(error);

        }
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${endpoint}${videoId}`);
            setComments(response.data)
        } catch (error) {
            setError(error);
        }
    }

    const changeDateFormat = (timestamp) => {
        const originalDate = new Date(timestamp);
        const newDateFormat = `${originalDate.getFullYear()}/${(originalDate.getMonth() + 1).toString().padStart(2, '0')}/${originalDate.getDate().toString().padStart(2, '0')} - ${originalDate.getHours().toString().padStart(2, '0')}:${originalDate.getMinutes().toString().padStart(2, '0')}`;
        return newDateFormat;
    }

    return(
        <Card variant={'elevated'} padding={5}>
            <form onSubmit={(e) => submitComment(e)}>
                <FormLabel>Username</FormLabel>
                <Input placeholder='Username' 
                    type="text"
                    id="username"
                    value={data.username}
                    required
                    onChange={(e) => handle(e)}
                />
                <FormLabel>Comment:</FormLabel>
                <Textarea
                    type="text"
                    id="comment"
                    required
                    value={data.comment}
                    onChange={(e) => handle(e)}
                />
                <Button type="submit" marginTop={5} marginBottom={5} backgroundColor={'#48BB78'}>submit</Button>
            </form>
            <Card variant={"outline"} padding={3}>
                {
                    comments.map(c => (
                        <CommentList 
                            key={c._id}
                            username={c.username}
                            comment={c.comment}
                            timestamp={changeDateFormat(c.timestamp)}
                        />

                    ))
                }
            </Card>
        </Card>
    )
}

export default CommentForm;
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text } from "@chakra-ui/react"
import useFormatToRupiah from "../Hooks/useFormatToRupiah";

const ProductCard = ({title, price, link}) => {
    const formattedValue = useFormatToRupiah(price);

    
    return(
        <Card size={'sm'}>
            <CardHeader>
            <Image
                src="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Heading size='md'>{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{formattedValue}</Text>
            </CardBody>
            <CardFooter>
                <a href={link}>
                    <Button background={'#48BB78'}>BUY</Button>
                </a>
            </CardFooter>
        </Card>
    )
}

export default ProductCard;
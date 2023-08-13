import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useFetchData from "../Hooks/useFetchData";

const ProductList = ({videoId}) => {
    const productlist_url = `http://localhost:5000/api/video/product/${videoId}`;

    const {data, isLoading, error} = useFetchData(productlist_url);

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

    const formatToRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    }

    return(
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
                    {
                        data.map(product => (
                            <ProductCard 
                                key={product._id}
                                title={product.title}
                                price={formatToRupiah(product.price)}
                                link={product.link}
                            />
                        ))
                        
                    }
        </SimpleGrid>
    )
}

export default ProductList;
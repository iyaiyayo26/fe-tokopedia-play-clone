import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import useFetchData from "../Hooks/useFetchData";
import LoadingMessage from "./LoadingMessage";
import ErrorMessage from "./ErrorMessage";

const ProductList = ({videoId}) => {
    const productlist_url = `https://be-tokopedia-play-clone-production.up.railway.app/api/video/product/${videoId}`;
    const {data, isLoading, error} = useFetchData(productlist_url);

    if(isLoading){
        return <LoadingMessage />
    }
    
    if(error){
            return <ErrorMessage errorMessage={error.message}/>
    }


    return(
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
                    {
                        data.map(product => (
                            <ProductCard 
                                key={product._id}
                                title={product.title}
                                price={product.price}
                                link={product.link}
                            />
                        ))
                        
                    }
        </SimpleGrid>
    )
}

export default ProductList;
import Header from "./Header";
import { useParams } from "react-router-dom";

const ProductDetail=()=>{
    const params=useParams();
    return <>
        <Header/>
        <h1>Product detail</h1>
    </>
}
export default ProductDetail;
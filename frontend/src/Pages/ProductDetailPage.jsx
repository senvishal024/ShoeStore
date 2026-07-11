import ProductDetailComponent from "../Components/ProductDetailComponent";
import Navbar from "../Components/Navbar";
import CardVerticalComponent from "../Components/CardVerticalComponent";
import { useState } from "react";
import ReviewComponent from "../Components/reviewComponent";
import Footer from "../Components/Footer";

function ProductDetailPage(){
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("");
    const [category,setCategory]=useState("")
    
    return(
        <>
            <Navbar></Navbar>
            <ProductDetailComponent setCategory={setCategory}> </ProductDetailComponent>
            <CardVerticalComponent search={search} sort={sort} category={category}> </CardVerticalComponent>
            <ReviewComponent/>
            <Footer></Footer>
        </>
    )
}
export default ProductDetailPage
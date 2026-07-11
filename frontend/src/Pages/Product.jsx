import { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import ProductSearch from "../Components/ProductSearch";
import Footer from "../Components/Footer";
function ProductPage(){
    const [search,setSearch]=useState("");
    const [sort,setSort]=useState("");
      const [category,setCategory]=useState("");
    return (
        <>
            <Navbar></Navbar>
            <ProductSearch search={search} setSearch={setSearch} sort={sort} setSort={setSort} category={category} setCategory={setCategory}></ProductSearch>
            <ProductCard search={search} sort={sort} category={category}></ProductCard>
            <Footer></Footer>
        </>
    )
} 
export default ProductPage
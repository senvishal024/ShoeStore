import CardVerticalComponent from "../Components/CardVerticalComponent"
import FeaturedProduct from "../Components/FeaturedProduct"
import Hero from "../Components/Hero_Section"
import Navbar from "../Components/Navbar"
import ProductCard from "../Components/ProductCard"
import ProductSearch from "../Components/ProductSearch"
import { useState } from "react"
import WhyChooseUs from "../Components/WhuChooseUsComponent"
import Footer from "../Components/Footer"
import AboutUsComponent from "../Components/AboutUsComponent"

function HomePage(){
         const [search,setSearch]=useState("");
            const [sort,setSort]=useState("");
              const [category,setCategory]=useState("");
              


    return(
        <>
            <Navbar></Navbar>
            <Hero ></Hero>
            <FeaturedProduct></FeaturedProduct>
            <CardVerticalComponent search={search} sort={sort} category={"Running"} ></CardVerticalComponent>
                
            <WhyChooseUs></WhyChooseUs>
            <AboutUsComponent></AboutUsComponent>
            <Footer></Footer>
        </>
    )
}
export default HomePage
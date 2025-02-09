"use client"
import Breadcrum from "../../../components/Breadcrumbs/Breadcrumb";
import ProductDisplay from "../../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../../components/Description/DescriptionBox";
import { notFound } from "next/navigation";
import { useContext } from 'react';
import { ShopContext } from '../../../context/ShopContext'; 
import React from "react";

const Product =  ({ params }) => {
    const { all_product } = useContext(ShopContext);
    const { productId } =  React.use(params);
    
    const product = all_product.find((e) => e.id === Number(productId));

    
    if (!product) {
        return notFound(); 
    }

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>
    );
};

export default Product;

"use client";

import "./ProductDisplay.css";
import Image from "next/image";
import star_icon from "../../assets/images/star_icon.png";
import star_dull_icon from "../../assets/images/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  console.log("Product in Display:", product);
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* Thumbnail Images */}
        <div className="productdisplay-img-list">
          <Image src={product.image} alt="" width={80} height={80} />
          <Image src={product.image} alt="" width={80} height={80} />
          <Image src={product.image} alt="" width={80} height={80} />
          <Image src={product.image} alt="" width={80} height={80} />
        </div>

        {/* Main Product Image */}
        <div className="productdisplay-img">
          <Image
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            width={300}
            height={400}
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <Image src={star_icon} alt="" width={20} height={20} />
          <Image src={star_icon} alt="" width={20} height={20} />
          <Image src={star_icon} alt="" width={20} height={20} />
          <Image src={star_icon} alt="" width={20} height={20} />
          <Image src={star_dull_icon} alt="" width={20} height={20} />
          <p>(122)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline 
          and short sleeves, worn as an undershirt or outershirt garment.
        </div>

        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
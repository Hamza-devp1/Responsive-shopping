"use client";
import "./Item.css";    
import Link from "next/link";
import Image from 'next/image';

const Item = (props) => {
    return (
        <div className="item">
            <Link href={`/product/${props.id}`}>
                <Image 
                    src={props.image} 
                    alt={props.name} 
                    priority={true} // Optional for performance optimization
                />
            </Link>
            <p>{props.name}</p>
            <div className="item-price">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;

import "./Offers.css"
import exclusive_image from '../../assets/images/exclusive_image.png'
import Image from "next/image"
const Offers = () =>{

    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <h1>ONLY ON BEST SELLERS PRODUCT</h1>
                <button>Check Now</button>
            </div>

            <div className="offers-right">
                <Image src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
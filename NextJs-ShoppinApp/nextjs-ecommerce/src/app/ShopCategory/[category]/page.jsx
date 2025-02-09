import Image from "next/image"; 
import '../../css/ShopCategory.css';
import dropdown_icon from '../../../assets/images/dropdown_icon.png';
import Item from '../../../components/Item/Item';
import all_product from "../../../assets/js/all_product"; 
import men_banner from '../../../assets/images/banner_mens.png';
import women_banner from '../../../assets/images/banner_women.png';
import kids_banner from '../../../assets/images/banner_kids.png';

const Shopcategory = async ({ params }) => {
    const { category } = await params; // Directly destructuring category from params

    const banners = {
        men: men_banner,
        women: women_banner,
        kid: kids_banner,
    };

    if (!category) {
        return <div>Loading...</div>; 
    }


    const filteredProducts = all_product.filter(item => item.category === category);

    return (
        <div className="shop-category">
            <Image className='shopcategory-banner' src={banners[category]} alt={category} />

            <div className="shop-category-indexSort">
                <p>
                    <span>Showing 1-12</span> Out of {all_product.length} Products
                </p>
                <div className="shopcategory-sort">
                    Sort By <Image src={dropdown_icon} alt="drop" />
                </div>
            </div>

            <div className="shopcategory-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))
                ) : (
                    <div>No products found in this category.</div>
                )}
            </div>  

            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}

export default Shopcategory;

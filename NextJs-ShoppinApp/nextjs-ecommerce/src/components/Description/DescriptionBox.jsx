import './DescriptionBox.css'

const DescriptionBox = () =>{
    return(
        <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>
            E-commerce refers to the process of buying and selling goods or services through the internet,
             offering convenience and accessibility for both businesses and consumers. It enables companies to reach a global audience 
             without the need for physical storefronts, allowing customers to browse, compare, and purchase products from anywhere in 
             the world. Popular platforms like Amazon, eBay, and Shopify have made online shopping simple and efficient. 
             E-commerce includes different models like B2C (business-to-consumer) and B2B (business-to-business), catering to individual
              customers as well as other businesses. With various secure payment options such as credit cards, digital wallets, 
              and bank transfers, it has become a preferred method for transactions.
            </p>
            <p>
            The growth of e-commerce has led to improvements in logistics and delivery services, ensuring that products reach customers
            quickly. However, as the industry expands, concerns about data privacy and online security remain important for maintaining
            customer trust. Overall, e-commerce continues to transform the way we shop, bringing a world of products and services to
            our fingertips.
            </p>
        </div>
        </div>
    )

}

export default DescriptionBox
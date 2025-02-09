    /* eslint-disable react/prop-types */
    import '../Breadcrumbs/Breadcrumb.css'
    import arrow_icon from '../../assets/images/breadcrum_arrow.png'
    import Image from "next/image";
    const Breadcrumb = (props) =>{
        const {product} = props
            return(
                <div className="breadcrumb">
                HOME <Image src={arrow_icon} alt="" /> SHOP <Image src={arrow_icon} alt="" />
                {product.category} <Image src={arrow_icon} alt="" />
                {product.name}
            </div>
                
            )
        }
    
        export default Breadcrumb
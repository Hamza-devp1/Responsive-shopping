import "./Footer.css";
import Image from "next/image"; // Import Next.js Image component
import footer_logo from "../../assets/images/logo_big.png";
import instagram_icon from "../../assets/images/instagram_icon.png";
import pintester_icon from "../../assets/images/pintester_icon.png";
import whatsapp_icon from "../../assets/images/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Image src={footer_logo} alt="Brand Logo"  />
        <p>BRAND STORE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Image src={instagram_icon} alt="Instagram" width={30} height={30} />
        </div>
        <div className="footer-icons-container">
          <Image src={pintester_icon} alt="Pinterest" width={30} height={30} />
        </div>
        <div className="footer-icons-container">
          <Image src={whatsapp_icon} alt="WhatsApp" width={30} height={30} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

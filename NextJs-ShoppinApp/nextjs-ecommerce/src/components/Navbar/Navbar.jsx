"use client";
import { useState, useContext } from "react";
import "./Navbar.css";
import Image from "next/image"; 
import Link from "next/link"; 
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart_icon.png";
import { ShopContext } from "../../context/ShopContext"; 

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext); 
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

    return (
        <div className="navbar">
            <div className="nav-left">
                <div className="nav-logo">
                    <Image src={logo} alt="Brand Logo" width={50} height={50} />
                    <p>Brand Store</p>
                </div>
            </div>

            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link href="/" onClick={() => setMenuOpen(false)}>Shop</Link>
                </li>
                <li>
                    <Link href="/ShopCategory/men" onClick={() => setMenuOpen(false)}>Men</Link>
                </li>
                <li>
                    <Link href="/ShopCategory/women" onClick={() => setMenuOpen(false)}>Women</Link>
                </li>
                <li>
                    <Link href="/ShopCategory/kid" onClick={() => setMenuOpen(false)}>Kids</Link>
                </li>
            </ul>

            <div className="nav-right">
                <div className="nav-login-cart">
                    <Link href="/login">
                        <button>Login</button>
                    </Link>
                    <Link href="/cart">
                        <Image src={cart} alt="Cart" width={30} height={30} />
                    </Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>

                {/* Hamburger Icon for Mobile (Moved to Last) */}
                <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </div>
        </div>
    );
};

export default Navbar;
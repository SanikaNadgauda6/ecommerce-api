import React from "react";
import "./header.css";
const Header = () => {
    return (
        <>
            <div className="navbar">
                <h2>E-Commerce  </h2>
                <ul>
                    <li>
                        Products
                    </li>
                    <li>
                        Add a Product
                    </li>
                </ul>

                <div className="profile">Your Name</div>
                
            </div>
        </>
  )
};

export default Header;

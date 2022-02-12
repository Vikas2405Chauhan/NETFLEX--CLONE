import React, { useEffect, useState } from "react";
import './Nav.css'; 

function Nav() {
    const [show, handleshow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                // handleshow(true);
            } else handleshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
            alt="Netflix Logo"
            /> 

        </div>
    )
}

export default Nav
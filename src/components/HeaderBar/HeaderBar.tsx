import React, { useState, useEffect } from "react";
import "./HeaderBar.css";
import DropMenuButton from "../DropMenuButton/DropMenuButton.tsx";

function HeaderBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="HeaderBar" className={scrolled ? "opaque" : ""}>
            <DropMenuButton style={{ marginLeft: "10px", marginTop: "10px" }} />
        </div>
    );
}

export default HeaderBar;

import React, { useState, useEffect } from "react";
import "./HeaderBar.css";
import DropMenuButton from "../DropMenuButton/DropMenuButton.tsx";
// import ButtonLink from "../ButtonLink/ButtonLink.tsx";
import { NavLink } from "react-router-dom";

interface HeaderBarProps {
    links?: [string, string][];
}

function HeaderBar(props: HeaderBarProps) {
    const { links } = props;
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
            <div className="space-evenly">
                {links &&
                    links.map(([name, link]) => (
                        <NavLink
                            to={link}
                            className="NavLink"
                            activeclassname="active"
                            key={link + name}
                        >
                            {name}
                        </NavLink>
                    ))}
            </div>
        </div>
    );
}

export default HeaderBar;

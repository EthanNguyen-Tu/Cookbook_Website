import React from "react";
import "./DropMenuButton.css";

function DropMenuButton({ style = {} }) {
    const [showMenu, setShowMenu] = React.useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <button
            className={`DropMenuButton ${showMenu ? "animate" : ""}`}
            onClick={handleClick}
            style={{ ...style }}
        >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />

            <div className="overlay" />

            <div className="DropMenu">
                <div className="DropMenuItems">
                    <span>Test</span>
                    <span>Test</span>
                    <span>Test</span>
                    <span>Test</span>
                </div>
            </div>
        </button>
    );
}

export default DropMenuButton;

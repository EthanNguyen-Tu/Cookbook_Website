import React from "react";
import "./HeaderBar.css";
import DropMenuButton from "../DropMenuButton/DropMenuButton.tsx";

function HeaderBar() {
    return (
        <div className="HeaderBar">
            <DropMenuButton style={{ marginLeft: "10px", marginTop: "10px" }} />
        </div>
    );
}

export default HeaderBar;

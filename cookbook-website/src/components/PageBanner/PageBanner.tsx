import React from "react";
import "./PageBanner.css";

function PageBanner({ title = "Page Title" }) {
    return (
        <div className="PageBanner">
            <h1>{title}</h1>
        </div>
    );
}

export default PageBanner;

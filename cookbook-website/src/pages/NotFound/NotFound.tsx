import React from "react";
import "./NotFound.css";
import HeaderBar from "../../components/HeaderBar/HeaderBar.tsx";
import PageBanner from "../../components/PageBanner/PageBanner.tsx";

function NotFound() {
    return (
        <div className="page">
            <HeaderBar />
            <PageBanner title="Page Not Found" />
        </div>
    );
}

export default NotFound;

import React, { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/colors.css";
import "./assets/styles/theme.css";
import HomePage from "./pages/HomePage/HomePage.tsx";
import HeaderBar from "./components/HeaderBar/HeaderBar.tsx";

const { PUBLIC_URL } = process.env;

const NotFound = lazy(() => import("./pages/NotFound/NotFound.tsx"));

function App() {
    return (
        <HashRouter basename={PUBLIC_URL}>
            <Suspense fallback={<HomePage />}>
                <HeaderBar
                    links={[
                        ["Home", "/"],
                        ["Not Found", "/Oops"],
                    ]}
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default App;

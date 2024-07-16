import React from "react";
import "./styles/rightPanel.css";
import Img from "./img";

export function RightPanel() {

    return (
        <div className="rightPanel">
            <div className="description">
                <h1>Compress Photos </h1>
                <h3>Easily compress your photos to optimize file size and improve performance.</h3>
            </div>
            <Img/>
        </div>
    );
}

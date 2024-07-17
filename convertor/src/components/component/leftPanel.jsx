import React from "react";
import "./styles/leftPanel.css";

    const video = {
        left: "video/profile-video.mp4"
    }

export function LeftPanel () {
    return (
        <div className="leftPanel">
            <video
                src={video.left}
                autoPlay
                loop
                muted
                playsInline
                preload="auto">
            </video>
        </div>
    )
}
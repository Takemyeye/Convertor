import React from "react"
import { RightPanel } from "./rightPanel"
import { LeftPanel } from "./leftPanel"
import "../styles/home.css"

export function HomeUnit () {
    return (
        <main>
            <LeftPanel/>
            <RightPanel/>
        </main>
    )
}
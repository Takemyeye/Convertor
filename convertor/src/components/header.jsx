import React from "react"
import "./styles/header.css"
import { Link } from "react-router-dom"

export function Header () {

    return (
        <header>
            <div className="logo">
                <Link to="/">
                  <h1> Belance </h1>
                </Link>
            </div>
             <div className="nav-bar">
                <Link to="https://belance.netlify.app/">
                    <span> About </span>
                </Link>
                <span> Donate </span>
                <span> Contact Us</span>
                <span> compress </span>
            </div>
        </header>
    )
}
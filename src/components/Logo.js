import React from 'react';
import LogoImage from "../logo.svg";
import { Link } from "react-router-dom";
import '../App.css';

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src={LogoImage} width="20%" alt="logo" />
            </Link>
        </div>
    );
}
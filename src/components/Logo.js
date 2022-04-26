import React from 'react';
import { Link } from "react-router-dom";

export default function Logo(props) {
    return (
        <Link className={props.className} to="/">
            <img src={props.logoImage} alt="logo" />
        </Link>
    );
}
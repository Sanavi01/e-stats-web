import React from "react";

export default function BasicConcepts (props) {

    function returnMenu () {
        props.toggleMenu()
    }

    return (
        <h1 onClick={returnMenu}>Estos son los conceptos basicos</h1>
    )
}
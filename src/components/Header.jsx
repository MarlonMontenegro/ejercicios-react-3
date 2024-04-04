import React from "react";


function Header(props) {

    return (

        <header>
            <h1>{props.mensaje}</h1>
        </header>

    );
}

export default Header;
import React from "react";


function Bio() {

    return <p>Apasionado de los videojuegos desde que tengo memoria. Siempre en busca de nuevos desafíos y aventuras
        virtuales. ¡Sigue mi viaje a través de mundos virtuales llenos de emoción y acción!</p>

}

function UserName() {
    return <h1>GamerMaster96</h1>
}

function Imagen() {
    return <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6MGhoHS2Jb97DB13B3EyolqW6Q6Y0Wy6s7WxXrE1_g&s"
        className="profile-picture"
    />
}


function UserProfile() {

    return (

        <div className="User-container">

            <div className="user">
                <Imagen/>
                <UserName/>
                <Bio/>
            </div>

        </div>

    );
}

export default UserProfile
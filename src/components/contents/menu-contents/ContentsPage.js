import React from "react";
import BasicConcepts from "../lessons/BasicConcepts";
import "./contentsPage.css"


export default function ContentsPage() {

    const [menu, setMenu] = React.useState(true)

    function toggleMenu() {
        setMenu(prevMenu => !prevMenu)
    }

    return (

        <div className="total-height">

            <div className="page-top">
                <h1>E - Stats</h1>
            </div>
            <div className="board">
                <div className="content-board">
                    {menu == true ?
                        <div className="lessons">
                            <h2>Contenidos</h2>
                            <h3>Estadistica Descriptiva</h3>
                            <p onClick={toggleMenu}>Conceptos Basicos</p>
                        </div>

                        :

                        <BasicConcepts toggleMenu={toggleMenu} />
                    }
                </div>
            </div>
        </div>

    )

}
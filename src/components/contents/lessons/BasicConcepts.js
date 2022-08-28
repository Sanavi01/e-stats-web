import React from "react";

export default function BasicConcepts(props) {

    function returnMenu() {
        props.toggleMenu()
    }

    return (
        <>
            <h2 onClick={returnMenu}>Conceptos Basicos Para Entender Estadistica</h2>
            <h3>Poblacion</h3>
            <p>
                Una <b>poblacion</b> es un conjunto de elementos o eventos similares que son de interes para alguna pregunta o experimento. Una poblacion estadistica puede ser un grupo de objetos existentes o una hipotetica y potencialmente infinito grupo de objetos concebidos como uno generalizacion de la experiencia. Estos elementos pueden ser objetos, acontecimientos, situaciones, grupos de animales o personas que comparten algo en comun.
            </p>

            <h4>Tipos de Poblacion</h4>

            <ul>
                <li>
                    <b>Finita:</b> Es aquella en la que el numero de valores que la componen tiene un fin. Por ejemplo: la poblacion estadistica que nos indica la cantidad de arboles de una ciudad es finita; en el instante de la medicion se puede determinar la cantidad finitamente.
                </li>
                <li>
                    <b>Infinita:</b> Es aquella que como su nombre indica, no tiene fin, como el numero de planetas en el universo.
                </li>
            </ul>
            
            <h4>Ejemplos:</h4>
            <ul>
                <li>
                    Un equipo de geografos esta estudiando las caracteristicas de <b>las montañas de la cordillera de los Andes.</b>
                   
                    
                    <p><b>Poblacion:</b> Todas las montañas de la cordiera de los Andes.</p>
                </li>
                <li>
                    Un grupo de economistas estan estudiando como son <b>las ganancias de los productores de alimentos organicos.</b>
                   
                    
                    <p><b>Poblacion:</b> Las ganancias de todos los productores de alimentos organicos de un pais.</p>
                </li>
            </ul>
            
        </>


    )
}
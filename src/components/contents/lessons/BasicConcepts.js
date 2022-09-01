import React from "react";
import basicConcepts from "./basicConcepts.css"

export default function BasicConcepts(props) {

    function returnMenu() {
        props.toggleMenu()
    }

    return (
        <>
            <h2 onClick={returnMenu}>CONCEPTOS BASICOS PARA ENTENDER ESTADISTICA</h2>
            <h3 className="underline-h3">POBLACION</h3>
            <p>
                Una <b>poblacion</b> es un conjunto de elementos o eventos similares que son de interes para alguna pregunta o experimento. Una poblacion estadistica puede ser un grupo de objetos existentes o una hipotetica y potencialmente infinito grupo de objetos concebidos como uno generalizacion de la experiencia. Estos elementos pueden ser objetos, acontecimientos, situaciones, grupos de animales o personas que comparten algo en comun. El metodo de recoleccion de informacion en el caso de la poblacion es denominado como <b>senso</b>
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

                    <p>
                        <b>Poblacion:</b> Todas las montañas de la cordiera de los Andes.
                    </p>
                </li>
                <li>
                    Un grupo de economistas estan estudiando <b>las ganancias de los productores de alimentos organicos.</b>

                    <p>
                        <b>Poblacion:</b> Las ganancias de todos los productores de alimentos organicos de un pais.
                    </p>
                </li>
            </ul>

            <h3 className="underline-h3">MUESTRA</h3>

            <p>
                Es una <b>parte o un subconjunto de la totalidad de la poblacion</b> que se quiere estudiar. Las muestras permiten ahorrar tiempo y recursos en la recoleccion y analisis de los datos. La cantidad de elementos debe ser suficiente para que sea representativa. El metodo de recoleccion de informacion en el caso de la muestra es denominado <b></b>
            </p>

            <h4>Tipós de Muestra</h4>

            <ul>
                <li>
                    <b>Muestra probabilista:</b> Se seleccionan los individuos al azar
                    <ul>
                        <li>
                            <b>Aleatoria simple:</b> Se seleccionan a los individuos utilizando sorteos, cuadros estadisticos o programas informaticos
                        </li>
                        <li>
                            <b>Por conglomerado:</b> Seleccion al azar de conglomerados; grupos de poblacion que ya se encuentran divididos
                        </li>
                        <li>
                            <b>Estratificada:</b> Seleccion al azar de individuos de distintos estratos; grupos de personas que fueron divdidos por una variable
                        </li>
                        <li>
                            <b>Sistematico:</b> Seleccion de un individuo cada determinada cantidad de elementos
                        </li>
                    </ul>
                </li>
                <li>
                    <b>Muestra no probabilista:</b> La seleccion es por criterios y no al azar
                    <ul>
                        <li>
                            <b>Conveniencia:</b> Selecciona a los individuos segun la cercania al investigador
                        </li>
                        <li>
                            <b>Accidental o Consecutiva:</b> Seleccion de disintos individuos hasta llegar a una cantidad determinada
                        </li>
                        <li>
                            <b>Subjetiva:</b> Seleccion por un criterio establecido por los investigadores
                        </li>
                    </ul>
                </li>
            </ul>

            <h4>Ejemplos:</h4>
            <ul>
                <li>La mitad de los estudiantes de Administracion de Empresas</li>
                <li>Algunos profesores del Colegio Mayor de Cundinamarca</li>
                <li>Una parte de los profesionales en Ingenieria Civil</li>
            </ul>

            <h3 className="underline-h3">VARIABLES</h3>

            <p>
                Cada una de las caracteristicas que se quieren estudiar en unos individuos de una poblacion o una muestra
            </p>

            <ul>
                <b>Cuantitativa:</b> Se expresa numerica (datos numericos)
                <ul>
                    <li>
                        <b>Continua:</b> Toman un valor infinito de valores entre un intervalo de datos (toma decimales desde 0 hasta infinito)
                    </li>
                    <li>
                        <b>Discreta:</b> Toma un valor finito de valores (no toma decimales, se queda con numueros enteros)
                    </li>
                </ul>

                <b>Cualitativa:</b> Se expresa en palabras
                <ul>
                    <li>
                        Expresan diferentes niveles, ordenes, jerarquias, etc, como tambien caracteristicas de estudio tales como el color de ojos, tipo de cabello, tipo de material de fabricacion,etc
                    </li>
                </ul>
            </ul>

            <h4>Ejemplos:</h4>
            <ul>
                <li>
                    Horas que trabaja un empleado a lo largo de la semana
                </li>
                <li>
                    Un ciclista profesional realiza x numero de Km en x competencia
                </li>
                <li>La estatura promedio que existe en personas entre lo 15 y 16 años en Mexico</li>
            </ul>
        </>


    )
}
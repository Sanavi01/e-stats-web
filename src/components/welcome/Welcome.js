import React from "react"
import "./welcome.css"

export default function Welcome(props) {

    return (
        <div className="welcome">
            <div className="welcome-top">
                <h4>Educacion gratuita</h4>
            </div>
            <div className="welcome-presentation">
                <h1>E - Stats</h1>
                <h3>Una manera efectiva de aprender estadistica</h3>
                <button className="welcome-button" onClick={props.handle}>Empecemos!</button>
            </div>

            <div className="welcome-buttom">
                <h4>Created by - Santiago Angarita Avila</h4>
            </div>
        </div>

    )
}
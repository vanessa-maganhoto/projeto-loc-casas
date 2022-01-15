import * as React from 'react'
import {ReactComponent as GithubIcon} from "../../recursos/img/github.svg"
import './styles.css'

export default function Navbar(){
    return(
    <header>
        <nav className="container">
            <div className="loc-nav-content">
                <h1>Loc Casas</h1>
                <a href="https://github.com/vanessa-maganhoto" target="_blank" rel="noreferrer">
                    <div className="loc-contact-container">
                        <GithubIcon/>
                        <p className="loc-contact-link">/vanessa-maganhoto</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    )
}
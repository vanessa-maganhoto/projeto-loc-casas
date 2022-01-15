import * as React from 'react'
import {ReactComponent as Seta} from '../recursos/img/setaCinza.svg'
import './paginacaoStyle.css'

export default function Paginacao() {
    return (
        <div className="loc-pagination-container">
            <div className="loc-pagination-box">
                <button className="loc-pagination-button" disabled={true} >
                    <Seta />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="loc-pagination-button" disabled={false} >
                    <Seta className="loc-flip-horizontal" />
                </button>
            </div>
        </div>
    )
}
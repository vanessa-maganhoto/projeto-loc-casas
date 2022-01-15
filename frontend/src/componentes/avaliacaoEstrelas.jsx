import * as React from 'react'
import { ReactComponent as EstrelaPreenchida } from '../recursos/img/estrelaCompleta.svg'
import { ReactComponent as EstrelaMetade } from '../recursos/img/estrelaMetade.svg'
import { ReactComponent as EstrelaVazia } from '../recursos/img/estrelaVazia.svg'
import '../componentes/avaliacaoEstrelasStyles.css'


export default function AvaliacaoEstrelas() {
    return (
        <div className="loc-estrelas-containe">
            <EstrelaPreenchida />
            <EstrelaPreenchida />
            <EstrelaPreenchida />
            <EstrelaMetade />
            <EstrelaVazia />
        </div>

    )
}
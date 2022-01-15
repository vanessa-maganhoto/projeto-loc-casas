import * as React from 'react'
import '../componentes/scoreStyles.css'
import AvalicaoEstrela from '../componentes/avaliacaoEstrelas.jsx'

export default function Score() {
    
    const score = 3.5
    const count = 13
    
    return (

        <div className="loc-score-container">
            <p className="loc-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <AvalicaoEstrela />
            <p className="loc-score-count">{count} avaliações</p>
        </div>
    )
}

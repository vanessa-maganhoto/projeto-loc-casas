import * as React from 'react'
import Score from '../componentes/score'

export default function Cards() {
    const imovel = {
        id: 1,
        imagem: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        titulo: "The Witcher",
        count: 2,
        score: 4.5
    };
    
    
    return (
        <div>
            <img className="loc-movie-card-image" src={imovel.imagem} alt={imovel.titulo} />
            <div className="loc-card-bottom-container">
                <h3>{imovel.titulo}</h3>
                <Score />
                <div className="btn btn-primary loc-btn">Avaliar</div>
            </div>
        </div>
    )
}
import * as React from 'react'
import { Link } from 'react-router-dom';
import Score from '../componentes/score'
import { Imovel } from '../types/imovel';

type Props = {
    imovel:Imovel
}

export default function Cards( { imovel } : Props) {
    


    return (
        <div>
            <img className="loc-movie-card-image" src={imovel.image} alt={imovel.title} />
            <div className="loc-card-bottom-container">
                <h3>{imovel.title}</h3>
                <Score count = {imovel.count} score={imovel.score}/>

                <Link to={`/form/${imovel.id}`}>
                    <div className="btn btn-primary loc-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}
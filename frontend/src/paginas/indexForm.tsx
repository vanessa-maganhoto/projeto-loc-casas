import * as React from 'react'
import './form.css'
export default function Form() {

    const imovel = {
        id: 1,
        imagem: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        titulo: "The Witcher",
        count: 2,
        score: 4.5
    };


    return (
        <div className="loc-form-container">
            <img className="loc-movie-card-image" src={imovel.imagem} alt={imovel.titulo} />
            <div className="loc-card-bottom-container">
                <h3>{imovel.titulo}</h3>
                <form className="loc-form">
                    <div className="form-group loc-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group loc-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="loc-form-btn-container">
                        <button type="submit" className="btn btn-primary loc-btn">Salvar</button>
                    </div>
                </form >
                <button className="btn btn-primary loc-btn mt-3">Cancelar</button>
            </div >
        </div >
    )
}
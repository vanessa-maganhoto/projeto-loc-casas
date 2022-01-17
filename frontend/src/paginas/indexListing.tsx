import * as React from 'react'
import Paginacao from '../componentes/paginacao'
import Cards from '../componentes/cards'
import axios from 'axios'
import { BASE_URL } from '../utils/requests'
import { ImovelPage } from '../types/imovel'




export default function Listing() {

    const [pageNumber, setPageNumber] =React.useState(0)
    
    React.useEffect(()=>{

        axios.get(`${BASE_URL}/imovel?size=12&page=1`)
            .then(response => {
                const data = response.data as ImovelPage
                console.log(data)
                setPageNumber(data.number)
                
            })
    }, [])
    
    

    return (
        <>
        <p>{pageNumber}</p>
            <Paginacao />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        < Cards />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        < Cards />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        < Cards />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        < Cards />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        < Cards />
                    </div>
                </div>
            </div>

        </>
    )
}
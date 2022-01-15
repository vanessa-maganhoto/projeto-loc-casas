import * as React from 'react'
import Paginacao from '../componentes/paginacao'
import Cards from '../componentes/cards'

export default function Listing() {
    return (
        <>
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
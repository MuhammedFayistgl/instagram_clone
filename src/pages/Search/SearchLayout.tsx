import React from 'react'
import Search from './Search'
import { Container } from '@mui/material'
import Imagelist from '../../components/IMGlist/Imagelist'

const SearchLayout = () => {
    return (
        <>
            <Container>
                <span className='px-2'>
                    <Search />
                </span>
            </Container>
            <Imagelist variants={'quilted'} />
        </>
    )
}

export default SearchLayout
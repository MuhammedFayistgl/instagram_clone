
import Search from './Search'
import { Container } from '@mui/material'
import Imagelist from '../../components/IMGlist/Imagelist'
import Footer from '../../components/Footer/Footer'

const SearchLayout = () => {
    return (
        <>
            <Container>
                <span className='px-2'>
                    <Search />
                </span>
            </Container>
            <Imagelist  />
            <Footer />
        </>
    )
}

export default SearchLayout
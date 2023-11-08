
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from 'rsuite'
type NameProp = {
    Username: string
    Textonly?: boolean
}
const Namebutton = ({ Username ,Textonly}: NameProp) => {
    return (
        <>
            {
                Textonly ?
                    (<span className='font-bold text-2xl'>{Username}</span>)
                    : (<Button style={{ padding: 5 }} endIcon={<MdKeyboardArrowDown />}>
                        <span className='font-bold text-2xl'>{Username}</span>
                    </Button>)
            }
        </>

    )
}

export default Namebutton
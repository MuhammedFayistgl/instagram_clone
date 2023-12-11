
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Button } from 'rsuite'
import UserName from '../newComp/UserName/UserName'
type NameProp = {
  
    Textonly?: boolean
}
const Namebutton = ({ Textonly}: NameProp) => {
    return (
        <>
            {
                Textonly ?
                    (<span className='font-bold text-2xl'><UserName/></span>)
                    : (<Button style={{ padding: 5 }} endIcon={<MdKeyboardArrowDown />}>
                        <span className='font-bold text-2xl'><UserName/></span>
                    </Button>)
            }
        </>

    )
}

export default Namebutton
// import { Button } from '@mui/material'

import { Button  } from 'rsuite'

type ButtonProps = {
    value: string
    width?:number | string
}
const Custombutton = ({ value ,width }: ButtonProps) => {
    return (
        <Button style={{width:width}} >{value}</Button>
    )
}

export default Custombutton
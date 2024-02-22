
import { Button } from '@mui/material'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { styled } from '@mui/material/styles';
const UplodeButton = () => {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <>
            <Button component="label" color='inherit'  startIcon={<BiMessageSquareAdd className={"text-3xl"} />}>
                <VisuallyHiddenInput type="file" />
            </Button>
        </>
    )
}

export default UplodeButton

import { BiMessageSquareAdd } from 'react-icons/bi'
import { Button, Uploader } from 'rsuite'

const UplodeButton = () => {
    return (
        <>	<Uploader action="//jsonplaceholder.typicode.com/posts/">
            <Button>
                <BiMessageSquareAdd className={"text-2xl tex"} />
            </Button>
        </Uploader></>
    )
}

export default UplodeButton
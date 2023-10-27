
import { BiSearchAlt } from 'react-icons/bi'
import { Input, InputGroup } from 'rsuite'

const Searchcomponent = () => {
    return (
        <div>


            <InputGroup inside >
                <Input />
                <InputGroup.Button>
                    <BiSearchAlt />
                </InputGroup.Button>
            </InputGroup>

        </div>
    )
}

export default Searchcomponent
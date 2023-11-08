
import { Input, InputGroup } from 'rsuite'
import { BiSearchAlt } from 'react-icons/bi'
import ChatSlider from './ChatSlider'
const Chatheaderserch = () => {
    return (
        <div>
            {/* SEARCH... */}
            <InputGroup inside >
                <Input />
                <InputGroup.Button>
                    <BiSearchAlt />
                </InputGroup.Button>
            </InputGroup>

            {/* Slider */}
            <ChatSlider />
        </div>
    )
}

export default Chatheaderserch